
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
                <div>
                 <span  className="categories-header"> { this.props.objBufferData.details.title }</span>            
                    <ProductItem item = { this.props.objBufferData.data }/>     
                    <button
                        onClick={()=>{this.addToCartHandeler(this.props.myCartData,this.props.objBufferData.data)}}> 
                        Add to Cart and review later 
                    </button>            
                    <ContactToseller />
                    <SelerInformation sellerInfo = {this.props.objBufferData.sellerInfo}/>
                </div>
            )
        }
    }

    export default Product;