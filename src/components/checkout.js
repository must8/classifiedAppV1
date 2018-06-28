import React, { Component } from 'react';
import { connect } from 'react-redux';

class Checkout extends Component {
render(){
    let totalPrice = 0;
    const chekOutItems = this.props.itemsinCart.map((item, index)=> {
        totalPrice = totalPrice + (item.quantity * item.price)
            return(
                <li key={ index } className="cartList">
                    <h2>Product: { item.productName } </h2>
                    <span> Total Items: {  item.quantity }</span>
                    <span> Price:{ item.price }</span>
                </li>
            )
    }); 
    return(
        <div>
          <ul>
            { chekOutItems }
          </ul>
          <span> Total Price: { totalPrice } </span>
          <button> Preceed to payment and close the deal.</button>
        </div>
    )
 }
}

function mapStateToProps(store) {
    return {
          itemsinCart : store.myCartReducer.myCartData
        };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Checkout);
