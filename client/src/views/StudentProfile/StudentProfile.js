import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Avatar from '@material-ui/core/Avatar';
import 'typeface-roboto';



function StudentProfile() {

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        card: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
          maxWidth: '50%%',
        },
        skill: {
            //padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            minWidth: 80,
            margin: 30,
          },
        bigAvatar: {
            width: 120,
            height: 120,
          },
          heroContent: {
            backgroundColor: '#FA4616',
            padding: theme.spacing(8, 0, 6),
          },

      }));
      const classes = useStyles();



        return(

            <div className={classes.root}>
                <div className={classes.heroContent} >
                    
                    <Grid container spacing={4} justify="center" alignItems="center">
                        
                        <Grid container item xs = {6} sm={6} md={2} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Avatar className={classes.bigAvatar}>G</Avatar>
                            
                        </Grid>
                        <Grid item xs = {6} sm={6} md={2} style={{textAlign: 'left', justifyContent: 'center'}}>
                            <Typography variant="h5" style={{color: 'white'}}>
                                Student Name
                            </Typography>
                        </Grid>
                        <Grid item xs = {12} sm={6} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            
                                <Typography style={{color: "white"}} variant="h6" gutterBottom>
                                    Your Top 3 Soft Skills
                                </Typography>
                                
                                <Grid container spacing = {2}>
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skill}>
                                            <CardContent>
                                                <Typography>
                                                    Global Awareness
                                                </Typography>
                                            </CardContent>
    
                                        </Card>
                                    </Grid>
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skill}>
                                            <CardContent>
                                                <Typography>
                                                    Critical Thinking
                                                </Typography>
                                            </CardContent>
    
                                        </Card>
                                    </Grid>
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skill}>
                                            <CardContent>
                                                <Typography>
                                                    Time Management
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
    
                        </Grid>
                        
                    </Grid>
                
                </div>
    
                <Grid container spacing = {4}>
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Company Logo
                                </Typography>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Company Logo
                                </Typography>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Company Logo
                                </Typography>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Company Logo
                                </Typography>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Company Logo
                                </Typography>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Company Logo
                                </Typography>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                </Grid>
            </div>
        );
    }
    






export default StudentProfile;