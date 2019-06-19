import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1),
    textDecoration: 'none'
  },
}));


const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <List component="nav">
            <ListItem component="div">

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h4">
                  <Link to="/"className={classes.link}>Shop</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h4">
                  <Link to="/cart" className={classes.link}>Cart</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h4">
                  <Link to="/cart"className={classes.link}>Checkout</Link>
                </TypoGraphy>
              </ListItemText>

            </ListItem >
          </List>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;