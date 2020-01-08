import React, {Component} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Companies from './Companies'
import Students from './Students'
const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column'
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

    }
    render() {
        const {classes} = this.props

        return (
            <div className={classes.root}>
                <Navbar isStudent={false}/>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer}/>
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Companies/>
                            </Paper>
                        </Grid>
                        <div className={classes.appBarSpacer}/>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Students/>
                            </Paper>
                        </Grid>

                    </Container>

                </main>
            </div>
        )
    }
}

export default withStyles(styles)(AdminDashboard);