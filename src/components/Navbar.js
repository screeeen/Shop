import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Navbar = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <TypoGraphy variant="h4" color="inherit">

          <Link to="/" className="brand-logo">Shopping</Link>


          <List component="nav">
            <ListItem component="div">

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h4">
                  <Link to="/">Shop</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h4">
                <Link to="/cart">My Cart</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h4">
                  <Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                </TypoGraphy>
              </ListItemText>

            </ListItem >

          </List>




        </TypoGraphy>
      </Toolbar>


    </AppBar>
  )
}

export default Navbar;