import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import 'typeface-roboto';
import Oracle_logo from '../../assets/Oracle_logo.svg';
import Google_logo from '../../assets/Google_2015_logo.svg';
import Twitter_logo from '../../assets/Twitter_Logo_Blue.svg';
import CardActionArea from '@material-ui/core/CardActionArea';
import CompanyPopup from '../../components/CompanyPopup.js';
import Container from '@material-ui/core/Container';

function StudentProfile() {

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        companyCard: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: 'white',
          backgroundColor: '#6C9AC3',
          maxWidth: '50%%',
          minHeight: '90%'
        },
        skillCard: {
            //padding: theme.spacing(2),
            // textAlign: 'center',
            // justifyContent: 'center',
            backgroundColor: '#6C9AC3',
            color: 'white',
            //minWidth: 80,
            marginRight: 30,
            marginLeft: 30,
          },
        avatar: {
            width: 100,
            height: 100,
          },
          heroContent: {
            backgroundColor: '#E28F41',
            padding: theme.spacing(6, 0, 6),
          },
        media: {
            
            maxHeight: '200px',
            maxWidth: '200px',
            display: 'block',
            margin: 'auto',
        },


      }));
      const classes = useStyles();



        return(

            <div className={classes.root}>
                <div className={classes.heroContent} >
                    
                    <Grid container spacing={4} justify="center" alignItems="center">
                        
                        <Grid container item sm={4} md={2} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Avatar className={classes.avatar}>A</Avatar>
                        </Grid>

                        <Grid item sm={4} md={2} style={{textAlign: 'left', justifyContent: 'center'}}>
                            <Typography variant="h5" style={{color: 'white'}}>
                                Alberta Gator
                            </Typography>
                        </Grid>

                        <Grid item xs = {12} sm={12} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            
                                <Typography style={{color: "white"}} variant="h6" gutterBottom>
                                    Your Top 3 Soft Skills
                                </Typography>
                                
                                <Grid container spacing = {2}>
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent>
                                                <Typography>
                                                    Global Awareness
                                                </Typography>
                                            </CardContent>
    
                                        </Card>
                                    </Grid>
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent>
                                                <Typography>
                                                    Critical Thinking
                                                </Typography>
                                            </CardContent>
    
                                        </Card>
                                    </Grid>
                                    <Grid item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
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
    
                <Grid container spacing = {4} style={{paddingTop: '4%'}}>
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.companyCard}>
                            <CardContent>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    image={Twitter_logo}
                                    title="Twitter"
                                    />
                            
                            </CardActionArea>
                            </CardContent>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                {/* <Button variant="contained" size="large" color="primary">View</Button> */}
                                <CompanyPopup></CompanyPopup>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.companyCard}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    image={Oracle_logo}
                                    title="Oracle"
                                    />
                            
                            </CardActionArea>
                            <CardActions style={{alignItems: 'center',textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.companyCard}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className={classes.media}
                                image={Google_logo}
                                title="Google"
                                />
                            
                            </CardActionArea>
                            <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" color="primary">View</Button>
                            </CardActions>
                        </Card>
                    </Grid>
    
                    <Grid item xs = {12} sm={6} md={4} align="center">
                        <Card className={classes.companyCard}>
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
                        <Card className={classes.companyCard}>
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
                        <Card className={classes.companyCard}>
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