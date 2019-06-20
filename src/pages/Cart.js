import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './../components/ItemCard'
import { Grid } from "@material-ui/core";
import Recipe from './../components/Recipe.js'


const styleThing = {
  border: "1px solid white",
  "border-radius":"4px",
  height: "300px"
}

class Cart extends Component {

  generateList = () => {
    let itemList = this.props.addedItems;
    return itemList.map((oneItem, index) => {
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
          disabledActions={true}
        />
      )
    })
  }

  render() {
    return (
      <>
      <div style={{ marginTop: 20, padding: 30 }}>
        <h3>My cart</h3>
        <Grid container spacing={2} justify="flex-start" style={styleThing} >
          {this.generateList()}
        </Grid>
      </div>
        <Recipe />
        </>
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