import axiosInstance from '../https/https'
import { subCategoryConstActions } from '../constants/subCategoryConstActions'

export const loadSubcategory = (urlkey) => {
       return (dispatch) => {
        axiosInstance.get('https://sparx-classified-app.firebaseio.com/'+urlkey+'.json')
            .then(json => {
                dispatch({
                type: subCategoryConstActions.SUBCAT_REQUEST,
                payload: json.data
                })
            })
            .catch(function (error) { }); 
    }   
}

export const loadMore = (productList,urlkey) => {
    return (dispatch) => {
     axiosInstance.get('https://sparx-classified-app.firebaseio.com/'+urlkey+'.json')
         .then(json => {
            let newDataArray = [...productList.data, ...json.data.data]
             json.data.data=newDataArray
             dispatch({
             type: subCategoryConstActions.LOAD_MORE,
             payload: json.data
             })
         })
         .catch(function (error) { }); 
 }   
}

export const putProductFilterDataToReducer = (data) => {
    return {
        type: subCategoryConstActions.SAVE_FILTER_DATA,
        payload: data
    }
}

export const putdispatchSearchQueryToReducer = (data) => {
    return {
        type: subCategoryConstActions.SAVE_SEARCH_QUERY,
        payload: data
    }
} 