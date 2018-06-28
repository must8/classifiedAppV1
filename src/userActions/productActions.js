import axiosInstance from '../https/https'
import { productConstActions } from '../constants/productsConstActions';
import { myCartConstActions } from '../constants/myCartConstActions'

export const loadProduct = (urlkey) => {
       return (dispatch) => {
        axiosInstance.get('https://sparx-classified-app.firebaseio.com/'+urlkey+'.json')
            .then(json => {
                dispatch({
                type: productConstActions.PRODUCT_REQUEST,
                payload: json.data
                })
            })
            .catch(function (error) { });     
    }   
}

export const addToCart = (totalItemsinCart, selectedItem) => {
    totalItemsinCart.push(selectedItem)
    return {
        type: myCartConstActions.MY_CART_REQUEST,
        payload: totalItemsinCart
    }
} 

