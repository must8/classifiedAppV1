
import axiosInstance from '../https/https'

var dataPut = {
    "data": {
        "image": "http://www.ajnara.com/images/Ajnara-Ambrosia-1.jpg",
        "price":"500000",
        "productName": "Ajnara Homes",
        "productDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        "technicleSpecification" : [
            "Comming soon",
            "5 Store",
            "Parking",
            "Personal Lawn"
        ]
    },
    "details": {
        "urlString": "ajnara"
    }
}


export const firebaseHandeler = () => {
    axiosInstance.get('https://sparx-classified-app.firebaseio.com/ajnara.json', dataPut)
        .then(json => {
            console.log(JSON.stringify(json.data))
        })
        .catch(function (error) { });
}   
