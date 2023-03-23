import React, { useState } from "react";
import Product from "./RealProjectStructure/Features/Products/Products";
import Cart from "./RealProjectStructure/Features/Cart/Cart";
import { Button } from "@mui/material";

const RealProjectStructiure = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div>
      <Button onClick={() => setShowCart(!showCart)} variant="contained">
        {showCart ? "Hide Card" : "Show Card"}
      </Button>
      {showCart ? <Cart /> : <Product />}
    </div>
  );
};

export default RealProjectStructiure;
