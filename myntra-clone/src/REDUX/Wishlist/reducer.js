import * as types from "./actionTypes";

const intialState={
    isLoading:false,
    items:[],
    isError:false
};

function reducer(state=intialState,action){
    const {type,payload}=action;
    switch(type){
        case types.REQUEST_WISHLIST_ITEMS: return {...state,isLoading:true};
        case types.SUCCESS_WISHLIST_ITEMS: return {...state,isLoading:false,items:payload};
        case types.FAILURE_WISHLIST_ITEMS: return {...state,isLoading:false,isError:false};
        case types.REQUEST_DELETEWISHLIST_ITEM: return {...state,isLoading:true};
        case types.SUCCESS_DELETEWISHLIST_ITEM: return {...state,isLoading:false,items:state.items.filter((el)=>el.id===payload)};
        case types.FAILURE_DELETEWISHLIST_ITEM: return {...state,isLoading:false,isError:true};
        default : return state;
    }
}

export {reducer};
