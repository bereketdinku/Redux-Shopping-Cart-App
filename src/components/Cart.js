import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-clice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch();
  const showcart =()=>{
    dispatch(cartActions.setshowcart());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showcart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
