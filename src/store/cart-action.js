import { cartActions } from "./cart-clice";
import { uiActions } from "./ui-slice";
export const fetchData=()=>{
    return async(dispatch)=>{
   const  fetchHandler=async ()=>{
        const res=await fetch('https://redux-http-2a3c7-default-rtdb.firebaseio.com/cartItems.json')
        const data=await res.json();
        return data;
    }
    try{
        const cartData= await fetchHandler();
        dispatch(cartActions.replaceData(cartData));
    }catch(err){
        dispatch(uiActions.showNotification({
            open:true,
            message:"Sent Request Failed",
            type:'error',
          })
        )
    }
}}
export const sendCartData=(cart)=>{
    return (dispatch)=>{
        dispatch(uiActions.showNotification({
            open:true,
            message:"Sending Request ",
            type:'warning'
          }));
          const sendRequest=async ()=>{
      
            const res=await fetch('https://redux-http-2a3c7-default-rtdb.firebaseio.com/cartItems.json',{
              method:"PUT",
              body:JSON.stringify(cart)
            });
            const data= await res.json();
            dispatch(uiActions.showNotification({
              open:true,
              message:"Sent Request To Database Successfully",
              type:'success'
            }));
          }; 
          
          try{
                 sendRequest();
          }catch(err){
            dispatch(uiActions.showNotification({
                open:true,
                message:"Sent Request Failed",
                type:'error',
              }))
          }
    }
}