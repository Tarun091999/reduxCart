import { ADD_To_CART } from "../Constant";

const initialData ={
    cartData:[]
}
export default function CartItem(state=[], action){    
    console.log("reducer",action) 
    switch(action.type)
    { 
        case ADD_To_CART:
            return[
                    ...state,
                    {cartData: action.data}
            ]
        break;
          default :
          return state;
    }
} 
