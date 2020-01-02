import React from 'react'
import Link from '@material-ui/core/Link'
import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import api from '../../api'
const styles = theme => ({
    root1: {
        display: 'block'
    },
})

class Companies extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        
    }
    render() {
        const {classes} = this.props
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Companies);

