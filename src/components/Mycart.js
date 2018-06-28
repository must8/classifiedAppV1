
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mycart extends Component {   

removeItemFromCartHandelar = (cartArray,index_remove) => {
    this.props.removeItemFromCart(cartArray,index_remove)
  }

render () {
    const cartList = this.props.myCartData.map((item, index)=> {
      return(
        <li key={index} className="cartList">
          <div className="slider">
            <figure> <img alt ="" src={item.image}/>  </figure>
            <div> 
              <span> Rs: <span> {item.price} </span> </span>
              <span> Quantity: <span> {item.quantity} </span> </span>
              <button  onClick={()=>{this.removeItemFromCartHandelar(this.props.myCartData,index)}}> Remove from Cart </button>
            </div>
        </div>
      </li>
      )
    })

    return (
        <div> 
          <h2> Items in your cart </h2>
            <div>
              <ul>
                {cartList}
              </ul>
            </div>
            <div>  <button><Link to="/checkout">Proceed To Checkout and make payment. We will send these items to your doorstep.</Link></button> </div>
        </div>
    )
  }
}

export default Mycart;