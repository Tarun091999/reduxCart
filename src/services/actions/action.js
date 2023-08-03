import { ADD_To_CART } from "../Constant"

export const AddToCart=data=>{
 console.log("action ", data)
    return {
        type:ADD_To_CART,
        data
    }
}