import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,
        changed:false,
    },
    reducers:{
        replaceData(state,action){
            state.totalQuantity= action.payload.totalprice;
        },
        addToCart(state,action){
            state.changed=true;
           const newitem=action.payload;
           const existingitem=state.itemsList.find((item)=>item.id === newitem.id);
           if(existingitem){
            existingitem.quantity++;
            existingitem.totalprice +=newitem.price;
           }else{
              state.itemsList.push({
                id:newitem.id,
                price:newitem.price,
                quantity:1,
                totalprice:newitem.price,
                name:newitem.name,
              });
              state.totalQuantity++;
           }
        },
        removeFromCart(state,action){
            state.changed=true;
         const id =action.payload;
         const existingitem= state.itemsList.find(item=>item.id===id);
         if (existingitem.quantity===1){
            state.itemsList=state.itemsList.filter(item=>item.id!==id);
            state.totalQuantity--;
        }else{
            existingitem.quantity--;
            existingitem.totalprice -=existingitem.price;

         }
        },
        setshowcart(state){
            state.showCart=!state.showCart;
        },
    }
});
 


export const cartActions = cartSlice.actions;
export default cartSlice