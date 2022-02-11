
import Item1 from "../../Images/Product/1.png";
import Item2 from '../../Images/Product/2.png';
import Item3 from '../../Images/Product/3.png';
import Item4 from '../../Images/Product/4.png';
import Item5 from '../../Images/Product/5.png';
import Item6 from '../../Images/Product/6.png';
import Item7 from '../../Images/Product/7.png';
import Item8 from '../../Images/Product/8.png';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action';
import _find from "lodash/find";
import _filter from "lodash/filter";

const initState = {
    items: [
        {id: 1,img: Item1 , rate: 4,name: "Emulsion shoes",quantity:0,price: 400,discount_price: 350.00},
        {id: 2, img: Item2 , rate: 5,name: "Red high heels",quantity:0,price: 450.00, discount_price: 390.00},
        {id: 3, img: Item3 , rate: 5,name: "Back strap shoes",quantity:0,price: 360.00,discount_price: 340.00},
        {id:4, img: Item4 , rate: 4, name: "Princess shoes",quantity:0,price: 599.00,discount_price: 520.00},
        {id: 5, img: Item5 ,  rate: 5,name: "Eye color palette",quantity:0,price: 230.00, discount_price: 200.00},
        {id:6, img: Item6 ,  rate: 4,name: "Diagonal bag",quantity:0,price: 340.00,discount_price: 310.00 },
        {id: 7, img: Item7 ,  rate: 4, name: "Makeup bag",quantity:0,price: 250.00, discount_price: 210.00 },
        {id:8, img: Item8 ,  rate: 4,name: "Backpack cross",quantity:0,price: 320.00,discount_price: 299.00}
    ],
    addedItems:[],
    total: 0
}

const Reducer= (state = initState,action)=>{
//INSIDE HOME COMPONENT
switch (action.type) {
    case ADD_TO_CART:
        console.log("Add cart");
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.discount_price 
                }
      }
        else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.discount_price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
        case REMOVE_ITEM:
            let itemToRemove=  _find(state.addedItems, function(o) {return o.id === action.id});
            let new_items = state.addedItems.filter(item=> action.id !== item.id);
           //calculating the total
    const newTotal = state.total - (itemToRemove.discount_price * itemToRemove.quantity)
    return{
        ...state,
        addedItems:  new_items ,
        total: newTotal
    }
    case ADD_QUANTITY:
    //INSIDE CART COMPONENT
    let addedItem1 = state.items.find(item=> item.id === action.id)
    addedItem1.quantity += 1 
    let newTotal1 = state.total + addedItem1.discount_price

    return{
        ...state,
        total: newTotal1
    }

    case SUB_QUANTITY:
        //INSIDE CART COMPONENT
        let addedItem2 = state.items.find(item=> item.id === action.id) 
    //if the qt == 0 then it should be removed
    if(addedItem2 && addedItem2.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem2.discount_price
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    else {
        addedItem2.quantity -= 1
        let newTotal = state.total - addedItem2.discount_price
        return{
            ...state,
            total: newTotal
        }
}

default:
    return state
}
}

export default Reducer;
