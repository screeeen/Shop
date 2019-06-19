import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  card: {
    display: "grid",
    gridTemplateRows: "1fr auto",
    gridGap: "8px",
    height: 600,
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start",
  },
  media: {
    height: 140,
  }
}));

function ItemCard(props) {
  const classes = useStyles();

  return (

    <Grid item xs={3} key={props.title} >

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            image={props.img}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography component="p">{props.desc}</Typography>
            <Typography component="p">Price: {props.price}</Typography>
          </CardContent>

        </CardActionArea>
        <CardActions>
          <Button variant="contained" size="small" color="primary" onClick={() => { props.addToCartFunc(props.id) }}>
            Add to cart
                </Button>
          <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
            <AddIcon />
          </Fab>
          <Button variant="contained" size="small" color="primary">
            Learn More
                </Button>
        </CardActions>
      </Card>
    </Grid>

  )
}


export default ItemCard;

