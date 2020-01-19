import React from 'react';
import logo from '../../assets/logo.svg';
import app from '../../config/firebaseauth'
import Button from '@material-ui/core/Button'
import Navbar from '../../components/Navbar/Navbar'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import api from '../../api'
import { CardContent, Typography } from '@material-ui/core';
import ReactLoading from 'react-loading'
import Grid from '@material-ui/core/Grid'
import CompanyPopup from '../../components/CompanyPopup.js'

const styles = theme => ({
    cardList: {
        display: 'inline-block',
        paddingLeft: '8%',
    },
    card: {
        minWidth: '200px',
        maxWidth: '50%',
        margin: 30,
        border: '1px solid #dfe1e5',
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
    matchButtonFalse: {
        background: 'linear-gradient(45deg, #FA4616 30%, #FA0700 90%)',
    },
    matchButtonTrue: {
        background: 'black',
    },
    actionDiv: {
        display: 'inline',
    },
    matchButton1: {
        background: 'black',
    }
})

class Matches extends React.Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.updateSelectedCompany = this.updateSelectedCompany.bind(this);
        this.state =
            {
                jobs: [],
                morePopup: false,
                matchButtonState: false,
                selectedCompany: {
                    companyName: 'company1',
                },
            }
        this.matchButtonClicked = this.matchButtonClicked.bind(this);
    }

    signOut() {
        app.auth.signOut().then(() => {
            alert('Signed Out')
        }).catch((error) => {
            alert('Cant sign out')
        })
    }

    matchButtonClicked(companyARG) {
        if ((this.props.userinfo.matches.filter(job => {return job.jobTitle == companyARG.jobTitle}).length <= 0)){
          var newArray = this.props.userinfo.matches;
          newArray.push({
              jobId: companyARG.jobId,
              companyName: companyARG.companyName,
              jobTitle: companyARG.jobTitle,
              jobDescription: companyARG.jobDescription,
              jobRequirements: companyARG.jobRequirements,
              jobLink: companyARG.jobLink,
              avatarUrl: companyARG.avatarUrl
          })
          var newinfo = this.props.userinfo
          newinfo.matches = newArray

          const payload = {
              userId: this.props.userinfo.id,
              newArray:  newArray,
          };
          api.updatematch(payload).then(response => {
              console.log(response)
              this.props.userInfoUpdate(response);
          })
        }
    }

    componentDidMount() {
        this._isMounted = true
        api.getrecommendations(this.props.userinfo).then((res) => {
            if (this._isMounted) {
                this.setState({
                    jobs: res.data
                })
            }
        }
        )
        // console.log("getting matches");
        // console.log(this.props.userinfo)
        // console.log(typeof this.props.userinfo)
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    updateSelectedCompany(company) { this.setState({ selectedCompany: company }) };
    render() {
        let morePopupClose = () => this.setState({ morePopup: false });
        const btnPrefix = "matchButton";
        const { classes } = this.props;
        if (this.props.userinfo === null) {
            return ( <div style={{margin: '0 auto'}}><ReactLoading type="spin" color="#28a4eb" height={"10%"} width={"10%"} className="the-loader"/></div>)
        }
        return (
            <div className="App">
                <Navbar isStudent={this.props.isStudent} />
                <Grid container spacing={4} style={{ paddingTop: '4%' }}>
                    {this.state.jobs.map(function(company,index) {
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
                                        <Typography noWrap style={{ display: 'block' }}>
                                            {company.percentMatch}% Match
                                        </Typography>
                                    </CardContent>
                                    <img style={{width: '75px', marginBottom: '0px'}}src={company.avatarUrl}>
                                    </img>
                                    <CardActions className={classes.actions}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            size="small"
                                            startIcon={<FavoriteIcon />}
                                            onClick={() => {this.matchButtonClicked(company)}}
                                            style={
                                                (this.props.userinfo.matches.filter(job => {return job.jobTitle == company.jobTitle}).length <= 0) ?
                                                    { background: '#2EA7EB', margin: '5px' }
                                                    : { background: 'black', margin: '5px' }
                                            }
                                        >
                                            Match
                                        </Button>
                                        <Button variant="contained" size="small" style={{ background: 'rgb(46, 167, 235)', color: 'white' }} onClick={() => { this.setState({ morePopup: true }); this.updateSelectedCompany(company); }}>
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
            </div>
        );
    }
}

export default withStyles(styles)(Matches);
