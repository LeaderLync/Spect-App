import React, {Component} from 'react'
import Skeleton from 'react-loading-skeleton'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import api from '../../api'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import './SearchPage.css'
import MenuItem from '@material-ui/core/MenuItem'
import SnackBar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton'
import MorHoriz from '@material-ui/icons/MoreHoriz'
import Avatar from '@material-ui/core/Avatar'
import Navbar from '../../components/Navbar/Navbar'

const styles = theme => ({
    root1: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 275,
      },
      iconButton: {
        padding: 10,
      },
    topbar: {
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center'
    },
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
    formControl: {
        marginLeft: '10px'
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
    _isMounted = false;
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            loading: true,
            data: null,
            type: 'Company'
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
    handleChange(value) {
        if (this.state.type != value && value === 'Jobs') {
            api.getrecommendations(this.props.userinfo).then((res) => {
                if (this._isMounted) {
                    this.setState({
                        data: res.data,
                    })
                }
            })
        } else if (this.state.type != value && value === 'Company') {
            api.getallcompanies().then(response => {
                if (this._isMounted) {
                    this.setState({
                        data: response,
                        // loading: res.data
                    })
                }
            })
        }
        this.setState({
            type: value
        })
        
    }
    componentDidMount() {
        this._isMounted = true
        api.getallcompanies().then(response => {
            if (this._isMounted) {
                this.setState({
                    data: response,
                    loading: false
                })
            }
        })
        
    }
    componentWillUnmount() {
        this._isMounted = false;
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
        }else {
            var rows = null;
            if (this.state.type === "Company") {
               rows = this.state.data.map(row => (
                    <CSSTransition timeout={500} classNames="fade" key={row.id}>
                        <ListItem key={row.id}>
                            <ListItemAvatar>
                                <Avatar src={row.avatarUrl}>

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={row.companyName}/>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit">
                                        <MorHoriz/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </CSSTransition>
                ));
            } else if (this.state.type === "Jobs") {
                rows = this.state.data.map((row,index) => (
                    <CSSTransition timeout={500} classNames="fade" key={index}>
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar src={row.avatarUrl}/>
                        </ListItemAvatar>
                        <ListItemText primary={`${row.jobTitle} ${row.percentMatch}% Match`} secondary={row.companyName}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="edit">
                                    <MorHoriz/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    </CSSTransition>
                ))
            }
                return (
                    <div className={classes.root}>
                    <Navbar isStudent={false}/>
                    <main className={classes.content}>
                    <Container maxWidth="lg" className={classes.container} style={{textAlign: 'center'}}>
                        <div className="row" style={{display: 'flex', flexDirection: 'row-reverse'}}>
                            <Paper className={classes.root1}>
                                <InputBase
                                    className={classes.input}
                                    placeholder={`Search ${this.state.type}`}
                                    inputProps={{ 'aria-label': 'search type' }}
                                />
                                
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel htmlFor="Type-native-simple">Type</InputLabel>
                                <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.type}
                                onChange={(e) => {this.handleChange(e.target.value)}}
                                id="demo-simple-select-outlined-label"
                                >
                                <MenuItem value=""><em>None</em></MenuItem>
                                <MenuItem value={"Company"}>Company</MenuItem>
                                <MenuItem value={"Jobs"}>Jobs</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                            <Grid item xs={12}>
                                <List style={{maxHeight: '500px', overflowY: 'auto'}}>
                                    <TransitionGroup>
                                    {rows}
                                    </TransitionGroup>
                                </List>
                            </Grid>
                        </Container>
                    </main>
                </div>
                )
            }
        }
    }

export default withStyles(styles)(SearchPage);