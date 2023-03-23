import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItems, updateItems, deleteItems } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};
export const fetchAsync = createAsyncThunk("cart/fetchItems", async () => {
  const response = await fetchItems();
  return response.data;
});

export const addAsync = createAsyncThunk("cart/addItems", async (item) => {
  const { id, title, brand, price, thumbnail } = item;
  const response = await addItems({
    id,
    title,
    brand,
    price,
    thumbnail,
    quantity: 1,
  });
  return response.data;
});

export const deleteAsync = createAsyncThunk("cart/deleteItems", async (id) => {
  await deleteItems(id);
  return id;
});

export const updateAsync = createAsyncThunk(
  "cart/updateItems",
  async ({ id, changes }) => {
    const response = await updateItems(id, changes);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })

      .addCase(addAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })

      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      })

      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      });
  },
});

// export const {} = productsSlice.actions;

export default cartSlice.reducer;
