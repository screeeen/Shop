import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from "@material-ui/core/CardMedia";
import Pinguino from './../images/stickerFacePinguino.png';

//Badge
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
}))(Badge);



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1),
    textDecoration: 'none'
  },
  media: {
    width: 60,
    height: 60
  },
}));


const Navbar = (props) => {
  console.log("props app: ", props.addedItems.length);
  const numberOfItems = props.addedItems.length;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
          <List component="nav">
            <ListItem component="div">

              <CardMedia
                className={classes.media}
                component="img"
                alt="Contemplative Reptile"
                image={Pinguino}
              />

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/" className={classes.link}>Shop</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/cart" className={classes.link}>Cart</Link>
                </TypoGraphy>
              </ListItemText>

              <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                  <Link to="/cart" className={classes.link}>Checkout</Link>
                </TypoGraphy>
              </ListItemText>


              <IconButton aria-label="Cart" className={classes.iconButton}>
                <StyledBadge badgeContent={props.addedItems.length} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

            </ListItem >
          </List>


        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;