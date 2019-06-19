import React, { Component } from 'react'
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements'
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";

class Checkout extends Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      name: "",
      amount: props.amount
    };
    console.log("state ", this);
    console.log("props ", props);
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("test");
    try {
      let token = await this.props.stripe.createToken({ name: this.state.name });
      console.log("token ", token);
    } catch (e) {
      throw e;
    }
  }


  render() {
    return (
      <>
        <Grid container spacing={2} justify="flex-start">


            <Card >

              <form onSubmit={(event) => { this.handleSubmit(event) }}>
                <label>name</label>
                <input
                  type="text"
                  className=""
                  value={this.state.name}
                  onChange={(event) => this.handleChange(event)}
                />
                <label>CC Numbr -- Exp.Date</label>
                <CardElement className="p-2 border border-dark" />
                <button className="">Buy</button>
              </form>
            </Card>
        </Grid>
      </>
    )
  }
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState {
  name: "";
  amount: "";
}


export default injectStripe(Checkout) 