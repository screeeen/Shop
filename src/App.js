import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});


class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <CssBaseline />
          <Box style={{backgroundColor: '#1E2759', color: 'white'}}>
          <Navbar />
          <Container maxWidth="md">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/cart" component={Cart} />
              {/* <Route exact path="/checkout" component={Checkout} /> */}
            </Switch>
          </Container>
          </Box>
        </BrowserRouter>
      </>
    );
  }
}





export default App;
