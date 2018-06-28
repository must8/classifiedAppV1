import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';

class MainCategoryItem extends Component {

  render () {
      return (
        <li className="item">
        <Link to={"subcategory/"+this.props.item.urlString }>
                <img src={this.props.item.image} />
                <span> {this.props.item.title} </span>
         </Link>
       </li>
      )
  }
}

export default MainCategoryItem; 