import React, {Component} from 'react'
import Skeleton from 'react-loading-skeleton'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import SnackBar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Navbar from '../../components/Navbar/Navbar'

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


class SearchPage extends Component {
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
                <Navbar isStudent={false}/>
                <main className={classes.content}>
                    
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            </Paper>
                        </Grid>
                        <div className={classes.appBarSpacer}/>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            </Paper>
                        </Grid>
                        <div className={classes.appBarSpacer}/>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            </Paper>
                        </Grid>
                    </Container>

                </main>
            </div>
        )
    }
}

export default withStyles(styles)(SearchPage);