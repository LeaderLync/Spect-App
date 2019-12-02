import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


import logo from '../assets/Googlelogo.png';
import { BottomNavigation } from '@material-ui/core';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 50,
    border: '1px solid blue',
    float: "left",
  },
  media: {
  	height: 80,
  	width: 'maxWidth',
    position: 'relative',

  },
  logo: {
    display: 'block',
  	height: '100%',

    marginLeft: 'auto',
    marginRight: 'auto'
  },
  actions: {
    justifyContent: 'center',
  },
  matchButton: {
  	background: 'linear-gradient(45deg, #FA4616 30%, #FA0700 90%)',
  },
  actionDiv: {
    display: 'inline',
  }
});


export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      	<div className={classes.media}>
	        <img
	          className={classes.logo}
	          src={logo}
	        />
        </div>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <div className={classes.actionDiv}>
          <h3>Google</h3>
          <Button variant="contained" color="secondary" startIcon={<FavoriteIcon />} className={classes.matchButton}>
            Match
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
