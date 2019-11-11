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


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 50,
    border: '1px solid blue',

  },
  media: {
  	height: 80,
  	width: 150,
  	padding: 20,
  },
  logo: {
  	height: '100%',
  	justifyContent: 'center'
  },
  actions: {
  	justifyContent: 'center',
  },
  matchButton: {
  	background: 'linear-gradient(45deg, #FA4616 30%, #FA0700 90%)',
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
        <Button variant="contained" color="third" startIcon={<FavoriteIcon />} className={classes.matchButton}>
        	Match
      	</Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
