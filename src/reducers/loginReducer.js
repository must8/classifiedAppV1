import { loginActionConstants } from '../constants/loginActionConstants';

const initialState = { loginData:{ loginStatus : false}}

export default function loginReducer(state = initialState, action) {
        switch (action.type) {
            case loginActionConstants.SAVE_LOGIN:
                return {
                    ...state,
                    loginData:action.payload
                };
            
            default:
               return {...state}
        }
    }