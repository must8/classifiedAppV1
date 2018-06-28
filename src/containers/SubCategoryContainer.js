
import { connect } from 'react-redux';
import SubCategory from '../components/SubCategory';
import { loadSubcategory } from '../userActions/subCategoryUserActions';
import { loadMore } from '../userActions/subCategoryUserActions'

function mapStateToProps(store) {
    return {
        objBufferData: store.subCategoryReducer.subcategoryBuffer,
        filterSearchQuery: store.subCategoryReducer.filterSerchQuery
        };
}

function mapDispatchToProps(dispatch) {
    return {
       loadSubcategory : (urlkey) =>  dispatch(loadSubcategory(urlkey)),
       loadMore : (productList,urlString) => dispatch(loadMore(productList,urlString))
    }
}

const connectSubCategoryPage = connect(mapStateToProps, mapDispatchToProps)(SubCategory);
export { connectSubCategoryPage as SubCategoryContainer};

