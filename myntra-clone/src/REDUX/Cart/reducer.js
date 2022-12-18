import * as types from "./actionTypes";

const intialState={
    isLoading:false,
    items:[],
    isError:false
};

function reducer(state=intialState,action){
    const {type,payload}=action;
    switch(type){
        case types.REQUEST_CART_ITEMS: return {...state,isLoading:true};
        case types.SUCCESS_CART_ITEMS: return {...state,isLoading:false,items:payload};
        case types.FAILURE_CART_ITEMS: return {...state,isLoading:false,isError:true};
        case types.REQUEST_ADDTOCART_ITEM: return {...state,isLoading:true};
        case types.SUCCESS_ADDTOCART_ITEM: return {...state,isLoading:false,items:[...state.items,payload]};
        case types.FAILURE_ADDTOCART_ITEM: return {...state,isLoading:false,isError:true};
        default : return state;
    }
}

export {reducer};