import React, { Component } from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class Checkout extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({name:event.target.value});
  }

  handleSubmit = (event)=> {
    event.preventDefault();
  }


  render() {
    return (
      <>
          <form>
            <label>name</label>
            <input
              type="text"
              className=""
              value={this.state.name}
              onChange={(event) => this.handleChange (event)}
            />
            <CardElement className="p-2 border border-dark" />

      </form>

      </>
    )
  }
}

interface IFormProps { }

interface IFormState { }


export default injectStripe(Checkout) 