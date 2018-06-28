import axiosInstance from '../https/https'

export const categoryMountAction = () => {
       return (dispatch) => {
       axiosInstance.get('https://sparx-classified-app.firebaseio.com/main.json')
        .then(json => {
            dispatch({
               type: 'DATA_REQUEST',
               payload: json.data
            })
        })
        .catch(function (error) { }); 
    }   
}