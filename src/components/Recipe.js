import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        <label>
          <input type="checkbox" ref="shipping" onChange={this.handleChecked} />
          </label>

          <label> 
            Shipping(+6$) 
          </label>
          <label> 

        <b >Total: {this.props.total} $</b>
        </label>

        <Elements>
          <Checkout />
        </Elements>
        </>
    )
  }
}

const mapStateToProps = (state) => {
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
