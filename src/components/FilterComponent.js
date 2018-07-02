import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putProductFilterDataToReducer, putdispatchSearchQueryToReducer } from '../userActions/subCategoryUserActions'

class ProductsFilterComponent extends Component { 
    constructor(props){
        super(props)
        this.state = {
            filterData:{
                "featureData":[],
                "manufacturor":[], 
                "touched":false,
                "minPrice":"",
                "maxPrice": ""
            }
        }
        this.minPriceRef = React.createRef();
        this.maxPriceRef = React.createRef();
    }

   static getDerivedStateFromProps = (props, state) => {
      let newState = {filterData:{...state.filterData,...props.item }}
      //take the key and put the approriate data inside it . last item will get precedence.
            props.dispatchSearchQueryToReducer({...newState.filterData})
        return newState;
    }

    handleChange = (e, index) => {
       const typeElem = e.target.tagName
       switch (typeElem) {
           case "OPTION" :
               const manufacturesData = this.state.filterData.manufacturor;    
               let newManufacturesData = manufacturesData.map((item, i) => {
                    if (i == index){
                        item.selected = true
                    } else {
                        item.selected = false
                    }
                    return item
                    })
                this.setState({manufacturor:newManufacturesData});
             break;
            case "INPUT" : 
                const featureData = this.state.filterData.featureData;    
                let newfeatureData = featureData.map((item, i) => {
                    if (i == index){
                        item.checked = item.checked ? false : true;
                    } 
                    return item
                    })
                this.setState({featureData:newfeatureData});
            break;
            default:
             break;
       }
      
    this.setState({}, ()=>{
        this.props.dispatchSearchQueryToReducer(this.state.filterData);
    })    
  }

  setPriceFilter = ()=> {
      this.setState({
          filterData:{
            minPrice:this.minPriceRef.current.value,
            maxPrice:this.maxPriceRef.current.value
          }
       }, ()=>{
           this.props.dispatchSearchQueryToReducer(this.state.filterData);
      });
      
  }

    render(){
       const manufacturorOptions = this.state.filterData.manufacturor.map((item, index)=> {   
            return <option 
                      onClick={(e)=> {this.handleChange(e, index)}}  
                      selected = {item.selected ? "selected" : ""} 
                      key= {index} > {item.title} 
                    </option>
        });

        const featureTypes = this.state.filterData.featureData.map((item, index)=> {  
            return (  
                      <label key={index}>
                          <input
                           checked={item.checked ? true: false} 
                           onChange={(e)=> {this.handleChange(e, index)}} 
                           type='checkbox' /> {item.title} 
                        </label>                 
                )
        });       
        return(
            <div className="sub-row filterTab filters-sub">
            <span className="categories-header">Filter items from given list </span>
                <div>
                    <div className="price-filter filter-area">
                           <label className="priceFilterLabel">Filter by Price: </label>
                            <input placeholder="min-100" ref={this.minPriceRef} />
                            <input placeholder="max-150" ref={this.maxPriceRef} />
                            <button className="pricefilterButton" onClick={()=> this.setPriceFilter()}>Go</button>
                           
                    </div>
                    <div className="price-filter filter-area clearfix">
                         <label className="manufacturor"> Manufacturor: </label>
                            <select className="manufacturor-filter-select">
                               { manufacturorOptions }
                            </select>
                    </div>
                    <div className="type-filter filter-area clearfix">
                            <div className="filter-check-label">
                             <span>Type</span>
                            </div>
                             <div className="filter-check-value" >
                                { featureTypes }
                                </div>
                    </div>
                </div>
          </div>
        )
    }
}

function mapStateToProps(store) {
    return {     
        };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchFilterDataToReducer : (data) =>  dispatch(putProductFilterDataToReducer( data )),
        dispatchSearchQueryToReducer : (data) => dispatch(putdispatchSearchQueryToReducer( data ))
    }
}

export default connect( null, mapDispatchToProps )(ProductsFilterComponent);
