import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions'
import { addQuantity } from '../components/actions/cartActions'
import { substractQuantity } from '../components/actions/cartActions'
import ItemCard from './../components/ItemCard'
import { Grid } from "@material-ui/core";

class Home extends Component {

  generateList = () => {
    let itemList = this.props.items;
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
          removeFromCartFunc={this.props.removeItem}
          addQuantityFunc={this.props.addQuantity}
          substractQuantityFunc={this.props.substractQuantity}
        />
      )
    })
  }

  render() {
    console.log("props: ", this.props);
    return (
    <div style={{ marginTop: 20, padding: 30 }}>
        <h3>Home</h3>
      <Grid container spacing={2} justify="center">
        {this.generateList()}
      </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("st: ", state);
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => { dispatch(addToCart(id)) },
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    substractQuantity: (id)=>{dispatch(substractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
