import axios from "axios";
import * as types from "./actionTypes";

const requestWishlist=()=>{
    return {type:types.REQUEST_WISHLIST_ITEMS};
}

const getWishlist=(data)=>{
    return {type:types.SUCCESS_WISHLIST_ITEMS,payload:data};
}

const failureWishlist=()=>{
    return {type:types.FAILURE_WISHLIST_ITEMS};
}

const getWishListItems=()=>{
    return (dispatch)=>{
        dispatch(requestWishlist);
        axios.get("https://scary-fly-gilet.cyclic.app/wishlist").then((r)=>dispatch(getWishlist(r.data))).catch((er)=>dispatch(failureWishlist));
    }
}

const deleteWishListItem=(id)=>{
    return (dispatch)=>{
        dispatch({type:types.REQUEST_DELETEWISHLIST_ITEM});
        axios.delete(`https://scary-fly-gilet.cyclic.app/wishlist/${id}`).then((r)=>dispatch({type:types.SUCCESS_DELETEWISHLIST_ITEM,payload:id})).catch((er)=>dispatch({type:types.FAILURE_DELETEWISHLIST_ITEM}));
    }
}

export {getWishListItems,deleteWishListItem};