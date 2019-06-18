import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Elements } from 'react-stripe-elements'
import Checkout from './../pages/Checkout';



class Recipe extends Component {

  // if(this.refs.shipping.checked)
  // this.props.substractShipping()
  // }

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    }
    else {
      this.props.substractShipping();
    }
  }


  render() {
    return (
      <>
        <div className="collection">
          <li className="collection-item">
            <label>
              <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
              <span>Shipping(+6$)</span>
            </label>
          </li>
          <li className="collection-item"><b>Total: {this.props.total} $</b></li>
        </div>
        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
        <Elements>
          <Checkout/>
        </Elements>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("st: ", state);
  return {
    addedItems: state.addedItems,
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
    substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
