
import React, { Component } from 'react';
import SubCategoryItem from '../components/SubCategoryItem';
import  ProductsFilterComponent  from './FilterComponent'

class SubCategory extends Component {  
    constructor(props){
        super(props)
        this.state = {
         }
        const urlkey = window.location.pathname.split('/')[window.location.pathname.split('/').length-1];
        this.props.loadSubcategory(urlkey);
    }

 productItems = () => {

      const products = this.props.objBufferData.data;
      const searchQuery = this.props.filterSearchQuery;
      const productBuffer = [];
      // feature type filter
      for (let p_item of products) {
        for (let s_item of searchQuery.featureData) {
            
              if(s_item.title == p_item.filterTitle && s_item.checked){
                  productBuffer.push(p_item)
              }
        }
        // manufacturor fulter //
        // for (let s_item of searchQuery.manufacturor) {
        //     if(s_item.title == p_item.manufacturor && s_item.selected && this.notDuplicate(productBuffer, p_item)){
        //          productBuffer.push(p_item)
        //     }
        //  }

       // console.log(products)
        // price filter //
    //     let newbuffer =[]
    //     for (let i=0; i<=products.length-1; i++) {
    //         // check against variable // put fix  at left side //
    //               if(products[i].price <= searchQuery.maxPrice && products[i].price >=searchQuery.minPrice){
    //                 console.log("pushed");  
    //                 newbuffer.push(p_item)
    //               }
    //         }
    //    console.log(newbuffer)
      }       
       return productBuffer;
   }

   notDuplicate = (buffer, item) => {
     let notDuplicate = true;
        buffer.map((b_item)=> {
            if(item.id == b_item.id){
                notDuplicate = false;
            }
        })
     return notDuplicate;
   }

   loadMore = (productList,urlString) => {
       this.props.loadMore(productList,urlString)
   }

  
 
    render () {
            // render will call everytime when some props change in future//
            let list = ''; 
            if(this.props.objBufferData.data.length>0){
                 list = this.productItems().map(( item, index ) => { 
                    return (<SubCategoryItem item = {item} key = {index} />)
                     })
               }
            return (
                <div>
                    <span  className="categories-header"> { this.props.objBufferData.details.title } </span>
                    <ProductsFilterComponent item = {this.props.objBufferData.details.filterData} />
                    <div className=" tab product-items">
                        <ul className="cate-list subcategory clearfix">
                            {list}
                        </ul>
                        <button onClick={(e)=>this.loadMore(this.props.objBufferData,this.props.objBufferData.details.urlString)}> Load more </button>
                    </div>
                </div>
            )
        }
    }

    export default SubCategory;