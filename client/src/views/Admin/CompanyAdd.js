import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    }
})


class CompanyAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companyName: 'Default Company',
            nameErr: false,
            emailErr: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            companyName: event.target.value
        })
    }
    handleSubmit() {

    }
    
    render() {
        const {classes} = this.props
        return (
            <form classes={classes.root} >
                <TextField error={this.state.nameErr} required onChange={this.handleChange} defaultValue="Default Company" label="Company Name"/>
                <TextField error={this.state.emailErr} required onChange={this.handleChange} defaultValue="Default Company" label="Company Name"/>


            </form>
        )
    }
}

export default withStyles(styles)(CompanyAdd);