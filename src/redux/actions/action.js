
export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
export const SUB_QUANTITY = "SUB_QUANTITY";
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
export const ADD_QUANTITY = "ADD_QUANTITY";
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}