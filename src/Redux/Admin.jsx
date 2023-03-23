import React from "react";
import {
  useAddAccountsMutation,
  useDeleteAccountsMutation,
  useGetAccountsQuery,
  useUpdateAccountsMutation,
} from "./Slices/AdminSlice";

const Admin = () => {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();

  const [addAccount] = useAddAccountsMutation();
  const [deleteAccount] = useDeleteAccountsMutation();
  const [updateAccount] = useUpdateAccountsMutation();

  console.log({ data, error, isLoading });

  return (
    <>
      <h4>Admin Page</h4>
      {isSuccess && data &&
        data.map((item) => (
          <>
            <p>
              {item.id}: {item.amount}
              <button onClick={() => deleteAccount(item.id)}>
                Delete Account
              </button>
              <button
                onClick={() => updateAccount({ id: item.id, amount: 999 })}
              >
                Update Account
              </button>
            </p>
          </>
        ))}

      <button onClick={() => addAccount(100, data.length + 1)}>
        Add Account
      </button>
      {/* {error}
      {isLoading} */}
    </>
  );
};

export default Admin;
