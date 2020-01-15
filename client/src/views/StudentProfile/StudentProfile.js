import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from  '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CompanyPopup from '../../components/CompanyPopup.js';
import Navbar from '../../components/Navbar/Navbar';
import ReactLoading from 'react-loading'
const styles = theme => ({
root: {
    flexGrow: 1,
  },
  companyCard: {
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'white',
    minWidth: '200px',
    maxWidth: '50%',
    border: '1px solid #dfe1e5',
    margin: 30,
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
      backgroundColor: 'whitesmoke',
      padding: theme.spacing(6, 0, 6),
    },
})

class StudentProfile extends React.Component {
    constructor(props)
    {
        super(props);
        this.updateSelectedCompany = this.updateSelectedCompany.bind(this);
        this.state =
        {
            morePopup: false,
            selectedCompany: {
              strongSkills : {
                first: "Leadership",
                second: "Communication",
                third: "Creativity"
              }
            },
        }
    }

    updateSelectedCompany(company){
        let formattedCompany = {
            companyName: company.companyName,
            strongSkills: company.companyTopSkills[0],
            companyBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt nunc sit amet nisi tincidunt egestas. Vestibulum justo tellus, pretium id consequat at, convallis quis erat. Etiam non placerat diam, quis tempus elit. Nulla in elementum turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam in tellus metus. Aliquam ut mi interdum nibh tempor eleifend vel et libero.",
        };
        this.setState(
        {
            selectedCompany: formattedCompany
        }
        )};

    render() {
      if (this.props.userinfo === null) {
        return ( <div style={{margin: '0 auto'}}><ReactLoading type="spin" color="#28a4eb" height={"10%"} width={"10%"} className="the-loader"/></div>)
      }
        const { classes } = this.props;
        let morePopupClose = () => this.setState({morePopup: false});
        let person = this.props.userinfo;
        return (
            <div className={classes.root}>
                <Navbar isStudent={this.props.isStudent} />
                <div className={classes.heroContent}>
                    <Grid container spacing={4} justify="center" alignItems="center">
                        <Grid container item sm={4} md={2} style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <Avatar className={classes.avatar} src={this.props.avatarURL}></Avatar>
                        </Grid>
                        <Grid item sm={4} md={2} style={{textAlign: 'left', justifyContent: 'center'}}>
                            <Typography noWrap variant="h5" style={{color: 'black', display: 'block'}}>
                                {person.firstName + " " + person.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs = {12} sm={12} md={8} style={{textAlign: 'center', justifyContent: 'center'}}>
                            <Typography noWrap style={{color: "black", display: 'block'}} variant="h6" gutterBottom>Your Top 3 Soft Skills</Typography>
                            {/*<Grid container spacing = {2}>
                                {Object.entries(person.strongSkills).map(([key, value]) => {return(
                                    <Grid key={key} item xs = {12} sm={12} md={4}>
                                        <Card className={classes.skillCard}>
                                            <CardContent textalign = "center">
                                                    <Typography noWrap style={{display: 'block'}}>{value}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )})}
                                </Grid>*/}
                            </Grid>
                        </Grid>
                     </div>
                <Grid container spacing={4} style={{ paddingTop: '4%' }}>
                    {person.matches.map(function (item, index) {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={4} align="center">
                                <Card className={classes.companyCard}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {item.companyName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ textAlign: 'center', justifyContent: 'center' }}>
                                        <Button variant="contained" size="small" style={{background: 'rgb(46, 167, 235)', color: 'white'}} onClick={() => {this.setState({morePopup : true}); this.updateSelectedCompany(item);}}>
                                            Profile
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }.bind(this))}
                </Grid>
                <CompanyPopup // view more company info modal
                    show={this.state.morePopup}
                    onHide={morePopupClose}
                    company={this.state.selectedCompany}
                />
            </div>
        );
    }
}

StudentProfile.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(StudentProfile);
