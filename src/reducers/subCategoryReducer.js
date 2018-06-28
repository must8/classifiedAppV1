import { subCategoryConstActions } from '../constants/subCategoryConstActions';

const initialState = { 
                      subcategoryBuffer : { 
                          "data":[],
                          "details":{
                              "title":"",
                              "urlString":"", 
                              "filterData":{
                                  "featureData":[],
                                  "manufacturor":[]
                                }
                            }
                        }, 
                        "filterSerchQuery":{
                            "featuresData":[],
                            "manufacturor":[], 
                            "touched":false,
                            "minPrice":"",
                            "maxPrice": ""
                        }
                    }

export default function subCategoryReducer(state = initialState, action) {
        switch (action.type) {
            case subCategoryConstActions.SUBCAT_REQUEST:
                return {
                    ...state,
                    subcategoryBuffer:{...action.payload}
                };
            case subCategoryConstActions.SAVE_FILTER_DATA:
            return {
                ...state,
                filterData:{...action.payload}
            };
            case subCategoryConstActions.SAVE_SEARCH_QUERY:
            return {
                ...state,
                filterSerchQuery:{...action.payload} 
            };
            case subCategoryConstActions.LOAD_MORE:
            return {
                
                ...state,
                subcategoryBuffer:{...action.payload} 
            };
        default:
                return {...state}
        }
    }
