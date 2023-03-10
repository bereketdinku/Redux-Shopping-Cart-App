import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout"
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-action";
import { uiActions } from "./store/ui-slice";
let isFirstRender=true;
function App() {
  const dispatch=useDispatch();
  const notification=useSelector(state=>state.ui.notification)
  const cart=useSelector(state=>state.cart);
  const isLogged=useSelector(state=>state.auth.isLogged)
  useEffect(()=>{
    dispatch(fetchData)
  },[dispatch])
  useEffect (()=>{
    if (isFirstRender){
      isFirstRender=false;
      return;
    }
    if (cart.changed){
      dispatch(sendCartData(cart));

    }
  
  },[cart,dispatch]);
  return (
    <div className="App">
     {notification && <Notification type={notification.type} message={notification.message}/>}
     { !isLogged && <Auth /> }
      { isLogged &&  <Layout /> }
    </div>
  );
}

export default App;
