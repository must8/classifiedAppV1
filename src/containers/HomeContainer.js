
import { connect } from 'react-redux';
import Home from '../components/Home';
import { categoryMountAction} from '../userActions/userActions.js';

function mapStateToProps(store) {
    return {
        objBufferData: store.categoryReducer.categoryBuffer,
     };
}

function mapDispatchToProps(dispatch) {
    return {
      categoriesMount: (test) => dispatch(categoryMountAction())
    }
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Home);
export { connectedLoginPage as HomeContainer };

