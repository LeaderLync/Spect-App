import React, {Component} from 'react'
import Skeleton from 'react-loading-skeleton'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Companies from './Companies'
import Students from './Students'
import CompanyAdd from './CompanyAdd'
import SnackBar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>
}
const styles = theme => ({
    
    root: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        maxHeight: '100%'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    appBarSpacer: theme.mixins.toolbar,
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

})


class AdminDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            loading: true
        }
        this.handleOpen = this.handleOpen.bind(this)
    }
    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return
        }
        this.setState({
            open: false
        })
    }
    handleOpen(){
        this.setState({
            open: true
        })
    }
    componentDidMount() {
        this.setState({
            loading: false
        })
    }

    render() {
        const {classes} = this.props
        if (this.state.loading) {
            return (
            <div className={classes.root}>
            <Skeleton height="100"/>
            <main className={classes.content}>
                
                <Container maxWidth="lg" className={classes.container}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Skeleton/>
                        </Paper>
                    </Grid>
                    <div className={classes.appBarSpacer}/>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Skeleton/>
                        </Paper>
                    </Grid>
                    <div className={classes.appBarSpacer}/>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Skeleton/>
                        </Paper>
                    </Grid>
                </Container>

            </main>
        </div>
            )
        }
        return (
            <div className={classes.root}>
                <AdminNavbar isStudent={false}/>
                <main className={classes.content}>
                    
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Companies handleOpen={this.handleOpen}/>
                            </Paper>
                        </Grid>
                        <div className={classes.appBarSpacer}/>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Students userInfoUpdate={this.props.userInfoUpdate} handleOpen={this.handleOpen}/>
                            </Paper>
                        </Grid>
                        <div className={classes.appBarSpacer}/>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <CompanyAdd handleOpen={this.handleOpen}/>
                            </Paper>
                        </Grid>
                    </Container>
                    <SnackBar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="success">
                        This is a success message!
                        </Alert>
                    </SnackBar>

                </main>
            </div>
        )
    }
}

export default withStyles(styles)(AdminDashboard);