import axios from  "axios";
import * as types from "./actionTypes";

const addItemToCart=(data)=>{
    return (dispatch)=>{
        dispatch({type:types.REQUEST_ADDTOCART_ITEM});
        axios.post("https://scary-fly-gilet.cyclic.app/cart",data).then((r)=>dispatch({type:types.SUCCESS_ADDTOCART_ITEM,payload:r.data})).catch((er)=>dispatch({type:types.FAILURE_ADDTOCART_ITEM}));
    }
}

const getCartItems=()=>{
    return (dispatch)=>{
        dispatch({type:types.REQUEST_CART_ITEMS});
        axios.get("https://scary-fly-gilet.cyclic.app/cart").then((r)=>dispatch({type:types.SUCCESS_CART_ITEMS,payload:(r.data)})).catch((er)=>dispatch({type:types.FAILURE_CART_ITEMS}));
    }
}


export {addItemToCart,getCartItems};