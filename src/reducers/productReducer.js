import { productConstActions } from '../constants/productsConstActions';

const initialState = { productBuffer : {
            "data": {
                "image": "",
                "price": "",
                "productDescription": "",
                "productName": "",
                "technicleSpecification": [
                
                ]
            },
            "details": {
                "title": "",
                "urlString": ""
            },
            "sellerInfo":{
               "email":"",
               "mobile":  "",
               "name": ""
            }
        }            
   }

export default function productReducer(state = initialState, action) {
        switch (action.type) {
            case productConstActions.PRODUCT_REQUEST:               
             return {
                    ...state,
                    productBuffer:action.payload 
                };
        default:
                return {...state}
        }
    }
    