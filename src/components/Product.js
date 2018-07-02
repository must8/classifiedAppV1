
import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';
import ContactToseller from '../components/ContactToseller';
import SelerInformation from '../components/SelerInformation'

class Product extends Component {   
      
   addToCartHandeler = (totalItemsinCart,product) => {
      this.props.addToCart(totalItemsinCart,product)
   }

   componentWillMount = () => {
       const urlkey = window.location.pathname.split('/')[window.location.pathname.split('/').length-1];
       this.props.loadProduct(urlkey);
    }

    render () {
         return (
            <div className="container">
                <span  className="categories-header"> { this.props.objBufferData.details.title }</span> 
                <div className="clearfix product-wrapper">
                    <div className="product-info-wrap tab" >           
                        <ProductItem item = { this.props.objBufferData.data }/>     
                        <button className="add-to-cart"
                            onClick={()=>{this.addToCartHandeler(this.props.myCartData,this.props.objBufferData.data)}}> 
                            Add to Cart and review later 
                        </button>            
                    </div>
                    <div className="product-seller-wrap tab">
                        <ContactToseller />
                        <SelerInformation sellerInfo = {this.props.objBufferData.sellerInfo}/>
                    </div>
                </div>
            </div>
            )
        }
    }

    export default Product;