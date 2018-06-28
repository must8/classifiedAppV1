import { userConstants } from '../constants/actions';

const initialState = { categoryBuffer : {"data":[],"details":{"title":"","urlString":""}}}

export default function categoryReducer(state = initialState, action) {
        switch (action.type) {
            case userConstants.DATA_REQUEST:
                return {
                    ...state,
                    categoryBuffer:action.payload
                };
            
        default:
                 return {...state}
        }
    }