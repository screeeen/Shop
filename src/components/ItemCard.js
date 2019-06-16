import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

function ItemCard(props) {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={2} justify="center">
        <Grid item key={props.title}>

          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={props.img}
                title="Contemplative Reptile"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography component="p">{props.desc}</Typography>
                <Typography component="p">{props.price}</Typography>
              </CardContent>

            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={()=>{props.addToCartFunc(props.id)}}>
                Add to cart
                </Button>
              <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}


export default ItemCard;

