
import { connect } from 'react-redux';
import Mycart from '../components/Mycart';
import { removeItemFromCart } from '../userActions/cartActions';

function mapStateToProps(store) {
    return {
        myCartData: store.myCartReducer.myCartData
        };
}

function mapDispatchToProps(dispatch) {
    return {
        removeItemFromCart : (cartArray,index_remove) =>  dispatch(removeItemFromCart(cartArray,index_remove))
        };
}

const connectCartPage = connect(mapStateToProps, mapDispatchToProps)(Mycart);
export { connectCartPage as myCartContainer};

