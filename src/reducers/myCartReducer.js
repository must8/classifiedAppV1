import { myCartConstActions } from '../constants/myCartConstActions';

const initialState = { myCartData : 
    [
        {
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdt0Au-31RfZEsqCQnECoYTCTRE0pQL0L5NI2bymAYSCEhrC04IQ",
            "price": "20000000",
            "productName": "Blackberry",
            "quantity":1
            }     
    ]
    }

export default function myCartReducer(state = initialState, action) {
        switch (action.type) {
            case myCartConstActions.MY_CART_REQUEST:               
             return {
                    ...state,
                    myCartData:[...action.payload] 
                };
            case myCartConstActions.REMOVE_FROM_CART:               
            return {
                    ...state,
                    myCartData:[...action.payload] 
                };
        default:
                return {...state}
        }
    }
    