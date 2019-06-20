import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Elements } from 'react-stripe-elements'
import Checkout from './../pages/Checkout';
import Card from '@material-ui/core/Card';

const styleThing = {
  border: "1px solid white",
  "border-radius":"4px",
  width: "300px"
}

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
      <Card style={styleThing}>
          <li >
            <label>
              <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
              <span>Shipping(+6$)</span>
            </label>
          </li>
          <li className="collection-item"><b>Total: {this.props.total} $</b></li>
        <div className="checkout">
          <button className="waves-effect waves-light btn">Checkout</button>
        </div>
        <Elements>
          <Checkout/>
        </Elements>
        </Card>
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
