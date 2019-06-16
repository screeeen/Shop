import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../components/actions/cartActions'
import ItemCard from './../components/ItemCard'

class Home extends Component {

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  generateList = () => {
    return this.props.items.map((oneItem, index) => {
      const { id, title, desc, price, img } = oneItem;
      return (
        <ItemCard
          key={index}
          title={title}
          desc={desc}
          price={price}
          img={img}
          id={id}
        />
      )
    })
  }



  render() {
    console.log("props: ", this.props);

    return (

      <div className="Container">
        <h3>Home</h3>
        {this.generateList()}
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
    addToCart: (id) => { dispatch(addToCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
