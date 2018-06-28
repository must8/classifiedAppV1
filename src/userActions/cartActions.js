import { myCartConstActions } from '../constants/myCartConstActions'

export const removeItemFromCart = (cartArray,index_remove) => {
    cartArray.splice(index_remove,1);
    return {
        type : myCartConstActions.REMOVE_FROM_CART,
        payload: cartArray
    }
}