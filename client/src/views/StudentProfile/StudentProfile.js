import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CompanyPopup from '../../components/CompanyPopup.js';
import logo from '../../assets/White logo - no background.svg'

function StudentProfile() {

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        companyCard: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: 'black',
          backgroundColor: 'white',
          maxWidth: '50%%',
          minHeight: '90%',
          marginRight: 10,
          marginLeft: 10,
        },
        skillCard: {
            color: 'black',
            marginRight: 30,
            marginLeft: 30,
          },
        avatar: {
            width: 100,
            height: 100,
          },
          heroContent: {
            backgroundColor: 'rgb(46, 167, 235)',
            padding: theme.spacing(6, 0, 6),
          },
        media: {
            
            maxHeight: '200px',
            maxWidth: '200px',
            display: 'block',
            margin: 'auto',
        },
        footer: {
            position: 'fixed',
            left: 0,
            bottom: 0,
            width: '100%',
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
          },
        img: {
            maxWidth: '10%',
            height: 'auto',
        }


      }));
      const classes = useStyles();
      //set person = this.props
      const person = {
        oid: "5dd416b81c9d440000dba799",
        id: "123456789",
        name: "Marcus Smart",
        topSkills: ["Communication","Leadership","Creativity"],
        skillsToWork: ["Working hard","Eating","Breathing"],
        responseValues: [0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1],
        matches:[
            {companyID: "companyid1",
            companyName: "Google",
            CompanyTopSkills: ["Communication","Leadershipp","values"]},
            {companyID: "companyid2",
            companyName: "Amazon",
            CompanyTopSkills: ["Communication","Leadershipp","values"]},
            {companyID: "companyid3",
            companyName: "Microsoft",
            CompanyTopSkills: ["Communication","Leadershipp","values"]}
            ],
        industry:["Engineering","Health","Business"]
    }

        return(

            <div className={classes.root}>
                <div className={classes.heroContent} >
                    <Grid container spacing={4} justify="center" alignItems="center">
                        <Grid container item sm={4} md={2} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Avatar className={classes.avatar} src="https://i.pravatar.cc/300"></Avatar>
                        </Grid>
                        <Grid item sm={4} md={2} style={{textAlign: 'left', justifyContent: 'center'}}>
                            <Typography variant="h5" style={{color: 'white'}}>
                                {person.name}
                            </Typography>
                        </Grid>
                        <Grid item xs = {12} sm={12} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Typography style={{color: "white"}} variant="h6" gutterBottom>Your Top 3 Soft Skills</Typography>     
                            <Grid container spacing = {2}>
                                {person.topSkills.map((item,index) => {return(
                                    <Grid key={index} item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textAlign = "center">
                                                    {item}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )})}
                                </Grid>
                        </Grid>      
                    </Grid>            
                </div>
                <Grid container spacing = {4} style={{paddingTop: '4%'}}>
                    {person.matches.map((item, index) => {return(
                        <Grid key={index} item xs = {12} sm={6} md={4} align="center">
                            <Card className={classes.companyCard}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {item.companyName}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{textAlign: 'center', justifyContent: 'center'}}>
                                    <CompanyPopup></CompanyPopup>
                                </CardActions>
                            </Card>
                    </Grid>
                    )})}
                </Grid>

                <div className={classes.footer}>
                    <img className={classes.img} src={logo}></img>
                </div>
            </div>

        );
    }
    
export default StudentProfile;