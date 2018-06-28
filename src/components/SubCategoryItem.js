import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class SubCategoryItem extends Component {

  render () {
      return (
        <li className="item">
          <Link to={"/subcategory/products/"+this.props.item.urlString}>
            <img alt="" src={this.props.item.image} />
            <span> Product: {this.props.item.title} </span>
            <span>Price: {this.props.item.price} </span>
            <span>Manufacturor: {this.props.item.manufacturor} </span>
          </Link>
       </li>
      )
  }
}
export default SubCategoryItem; 