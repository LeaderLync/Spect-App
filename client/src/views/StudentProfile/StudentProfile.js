import React from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CompanyPopup from '../../components/CompanyPopup.js';
import logo from '../../assets/White logo - no background.svg';
import Navbar from '../../components/Navbar/Navbar';
import './StudentProfile.css'

class StudentProfile extends React.Component {
    constructor(props)
    {
        super(props);
        this.updateSelectedCompany = this.updateSelectedCompany.bind(this);
        this.state =
        {
            morePopup: false,
            selectedCompany: this.props.userinfo,
        }
    }

    updateSelectedCompany(company){ 
        let formattedCompany = {
            companyName: company.companyName, 
            strongSkills: company.companyTopSkills[0], 
            companyBio: "lorem ipsum",
        };
        this.setState(
        {
            selectedCompany: formattedCompany
        }
        )};

    render() {
        let morePopupClose = () => this.setState({morePopup: false});
        let person = this.props.userinfo;
        return (
            <div className="root">
                <Navbar isStudent={this.props.isStudent} />
                <div className="heroContent">
                    <Grid container spacing={4} justify="center" alignItems="center">
                        <Grid container item sm={4} md={2} style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <Avatar className="avatar" src="https://i.pravatar.cc/300"></Avatar>
                        </Grid>
                        <Grid item sm={4} md={2} style={{ textAlign: 'left', justifyContent: 'center' }}>
                            <Typography variant="h5" style={{ color: 'white' }}>
                                {person.firstName + " " + person.lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={8} style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <Typography style={{ color: "white" }} variant="h6" gutterBottom>Your Top 3 Soft Skills</Typography>
                            <Grid container spacing={2}>
                                {Object.entries(person.strongSkills).map(([key, value]) => {
                                    return (
                                        <Grid key={key} item xs={12} sm={12} md={4}>
                                            <Card className="skillCard">
                                                <CardContent textAlign="center">
                                                    {value}
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={4} style={{ paddingTop: '4%' }}>
                    {person.matches.map(function (item, index) {
                        return (
                            <Grid item xs={12} sm={6} md={4} align="center">
                                <Card className="companyCard">
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {item.companyName}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ textAlign: 'center', justifyContent: 'center' }}>
                                        <Button variant="contained" size="large" color="primary" onClick={() => {this.setState({morePopup : true}); this.updateSelectedCompany(item);}}>
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
                <div className="footer">
                    <img className="footerLogo" src={logo}></img>
                </div>
            </div>

        );
    }
}

export default StudentProfile;