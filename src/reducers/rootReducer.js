
import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import subCategoryReducer from './subCategoryReducer';
import productReducer from './productReducer';
import myCartReducer from './myCartReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    categoryReducer: categoryReducer,
    subCategoryReducer : subCategoryReducer,
    productReducer : productReducer,
    myCartReducer : myCartReducer,
    loginReducer: loginReducer
 })
 
 export default rootReducer;

