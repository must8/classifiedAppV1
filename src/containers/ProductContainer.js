
import { connect } from 'react-redux';
import Product from '../components/Product';
import { loadProduct } from '../userActions/productActions';
import { addToCart } from '../userActions/productActions'

function mapStateToProps(store) {
    return {
            objBufferData: store.productReducer.productBuffer,
            myCartData: store.myCartReducer.myCartData,
        };
}

function mapDispatchToProps(dispatch) {
    return {
            loadProduct : (urlkey) =>  dispatch(loadProduct(urlkey)),
            addToCart : (totalItemsinCart, selectedItem) =>  dispatch(addToCart(totalItemsinCart, selectedItem))
       }
}

const connectProductPage = connect(mapStateToProps, mapDispatchToProps)(Product);
export { connectProductPage as ProductContainer};

