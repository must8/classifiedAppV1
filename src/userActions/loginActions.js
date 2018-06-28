import { loginActionConstants } from '../constants/loginActionConstants'

export const loginStatusAction = (loginDetails) => {
    return {
        type : loginActionConstants.SAVE_LOGIN,
        payload: loginDetails
    }
}