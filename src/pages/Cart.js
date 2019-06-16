import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import ItemCard from './../components/ItemCard'

class Cart extends Component {
 

  generateList = () => {
    let itemList = this.props.addedItems;
    return itemList.map ((oneItem, index) => {
      const { id, title, desc, price, img } = oneItem;
      return (
        <ItemCard
          key={index}
          title={title}
          desc={desc}
          price={price}
          img={img}
          id={id}
          addToCartFunc={this.props.addToCart}
        />
      )
    })
  }

  render() {
    return (
      <div className="Container">
        <h3>My Cart</h3>
        {this.generateList()}
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  console.log("st: ", state);
  return {

    addedItems: state.addedItems
  }
}


export default connect(mapStateToProps)(Cart)