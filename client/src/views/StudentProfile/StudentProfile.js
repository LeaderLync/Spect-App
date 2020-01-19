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
import FavoriteIcon from '@material-ui/icons/Favorite';
/* This component is the profile page for the student.  It dipslays their name, icon, and any jobs they have favorited */
const styles = theme => ({
root: {
    flexGrow: 1,
  },
  card: {
    minWidth: '200px',
    maxWidth: '50%',
    margin: 30,
    border: '1px solid #dfe1e5',
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
            selectedCompany: {},
        }
    }

    updateSelectedCompany(company){ // stores the data for the job the user clicks on
        this.setState(
        {
            selectedCompany: company
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
                      </Grid>
                   </div>
                <Grid container spacing={4} style={{ paddingTop: '4%' }}>
                    {person.matches.map(function (company, index) {
                        return (
                            <Grid key={index} item xs={12} sm={6} md={4} align="center">
                                <Card className={classes.card} key={company.id}>
                                    <CardContent style={{ textalign: 'center' }}>
                                        <Typography noWrap style={{ display: 'block' }}>
                                            {company.companyName}
                                        </Typography>
                                        <Typography noWrap style={{ display: 'block', fontWeight: 'bold'}}>
                                            {company.jobTitle}
                                        </Typography>
                                    </CardContent>
                                    <img style={{width: '75px', marginBottom: '0px'}}src={company.avatarUrl}>
                                    </img>
                                    <CardActions className={classes.actions}>
                                        <Button variant="contained" size="small" style={{ background: 'rgb(46, 167, 235)', color: 'white', margin: '0 auto' }} onClick={() => { this.setState({ morePopup: true }); this.updateSelectedCompany(company); }}>
                                            Details
                                        </Button>
                                        <CompanyPopup // view more company info modal
                                            show={this.state.morePopup}
                                            onHide={morePopupClose}
                                            company={this.state.selectedCompany}
                                        />
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
