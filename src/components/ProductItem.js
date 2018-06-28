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
                <div> Product Name: { this.props.item.productName } </div>
                <div> Product Description: { this.props.item.productDescription } </div>
                <div className="technicalDesc" >
                    Technical Specification:
                    {
                        this.props.item.technicleSpecification.map((item, index) =>{                           
                            return <span key = {index}> {item} </span>
                        })
                    }
                </div>
            </div>
            <div className="productbar">
                <span> Price Rs: {this.props.item.price} </span>
            </div>         
        </div>
      )
  }
}

export default ProductItem; 