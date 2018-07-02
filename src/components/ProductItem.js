import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class ProductItem extends Component {
  
  render () {
      return (
        <div className="product">
            <div className="preview">
                <img alt="" src={this.props.item.image} />
            </div>
            <div className="description">
                <div className="product-title"> { this.props.item.productName } </div>
                <div> <label> Product Description: </label> <p className="product-Description"> { this.props.item.productDescription } </p> </div>
                <div className="technicalDesc" >
                    <label className="technical-spec">Technical Specification: </label>
                    {
                        this.props.item.technicleSpecification.map((item, index) =>{                           
                            return <li key = {index}> {item} </li>
                        })
                    }
                </div>
                <div className="productbar">
                <span> Price Rs: {this.props.item.price} </span>
            </div>  
            </div>
                  
        </div>
      )
  }
}

export default ProductItem; 