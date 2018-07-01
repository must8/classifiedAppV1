
import React, { Component } from 'react';
import MainCategoryItem from '../components/MainCategoryItem';

class Home extends Component {

 componentWillMount = () => {
    this.props.categoriesMount();
 }
        render () {  
            let list = '';
            if(this.props.objBufferData.data.length>0){
                 list = this.props.objBufferData.data.map(( item, index ) => { 
                    return (<MainCategoryItem item = {item} key = {index} />)
                     })
               }

            return (
                <div className="container">
                 <span className="categories-header"> { this.props.objBufferData.details.title }  </span>
                    <ul className="cate-list clearfix">
                    {list}     
                    </ul> 
                </div>
            )
        }
    }

    export default Home;