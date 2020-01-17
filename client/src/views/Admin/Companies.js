import React from 'react'
import Skeleton from 'react-loading-skeleton'
import {withStyles} from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostJobModal from '../CompanyProfile/PostJobModal'
import AdminJobEdit from './AdminJobEdit.js'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import {Modal, Form} from 'react-bootstrap'
import api from '../../api'
import CompanyUpdate from '../CompanyUpdate/CompanyUpdate'
const styles = theme => ({
    root1: {
        display: 'block'
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
})

function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
  }

var rows1 = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
  ];

class Companies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rows: [],
            currentRow: [],
            open: false,
            editopen: false,
            addopen:false,
            selectedid: '',
            companyName: '',
            loading: true,
            // selectedIndustries: [],
            // strongSkills: {},
            // weakSkills: {},
            // studentid: '',
            // avatarUrl: '',
            // matches: [],
            // questionarray: []
            postModalShow: true

        }

        this.editClose = this.editClose.bind(this);
        this.addClose = this.addClose.bind(this);
    }
    handleClose() {
        this.setState({
            open: !this.state.open,
        })
    }
    updateselectedid(id , name) {
        this.setState({
            selectedid: id,
            companyName: name
        })
    }
    handleSubmit() {

    }
    editClose() {
      api.getallcompanies().then(response => { //updates company rows when you close an editor
          this.setState({
              rows: response
          })
      })
      this.setState({
          editopen: !this.state.editopen,
      });
    }
    addClose() {
      api.getallcompanies().then(response => { //updates company rows when you close an editor
          this.setState({
              rows: response
          })
      })
      this.setState({
          addopen: !this.state.addopen,
      });
    }
    _editClose(row) {
        this.setState({
            editopen: !this.state.editopen,
            currentRow: row
        })
    }
    _addClose(row) {
        this.setState({
            addopen: !this.state.addopen,
            currentRow: row
        })
    }
    jobClose() {
      this.setState({
          addopen: !this.state.addopen,
          currentRow: null
      })
    }
    onClickDelete(item) {
        let index = this.state.rows.map(element => element.id).indexOf(item)
        this.state.rows.splice(index, 1)
        this.setState({
            rows: this.state.rows
        })
    }
    dialogClose() {
        this.setState({
            editopen: !this.state.editopen,
            currentRow: null
        })
    }

    deleteCompany() {
        var payload = {
            collectionid: this.state.selectedid
        }
        api.deleteuser(this.state.selectedid).then(response => {
            console.log(response)
        })
    }
    componentDidMount() {
        api.getallcompanies().then(response => {
            this.setState({
                rows: response,
                loading: false
            })
        })

    }
    componentWillUnmount() {
        this.setState({
            loading: true
        })
    }
    render() {
        if (this.state.loading) {
            const {classes} = this.props
            const numbers = [1,2,3]
            return (
                <React.Fragment>
                <Typography variant="h3" className={classes.title}>
                    <Skeleton width={400}/>
                </Typography>
                <List style={{maxHeight: '275px', overflowY: 'auto'}}>

                    {numbers.map(row => (
                        <ListItem key={row}>
                            <ListItemAvatar>
                                <Skeleton circle={true} height={50} width={50}/>
                            </ListItemAvatar>
                            <ListItemText>
                                <Skeleton width={500}/>
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <Skeleton circle={true} height={50} width={50}/>
                                <Skeleton circle={true} height={50} width={50}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                    }
                </List>
            </React.Fragment>
            )
        } else {
            const {classes} = this.props
        return (
            <React.Fragment>
                <Typography variant="h3" className={classes.title}>
                    Companies
                </Typography>
                <List style={{maxHeight: '275px', overflowY: 'auto'}}>

                    {this.state.rows.map(row => (
                        <ListItem key={row.id}>
                            <ListItemAvatar>
                                <Avatar src={row.avatarUrl}>
                                    <EditIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={row.companyName}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="edit" style={{marginRight: '5px'}} onClick ={() => {
                                  this._addClose(row)
                                  this.updateselectedid(row.id, row.companyName)
                                }}>
                                    <AddIcon/>
                                </IconButton>
                                <IconButton edge="end" aria-label="edit" style={{marginRight: '5px'}} onClick ={() => this._editClose(row)}>
                                    <EditIcon/>
                                </IconButton>
                                <IconButton edge="end" aria-label="delete" /*onClick={() => this.onClickDelete(row.id)}*/ onClick={() =>
                                    {
                                    this.handleClose()
                                    this.updateselectedid(row.id, row.companyName)
                                    }}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                    }
                </List>
                <Dialog
                    open={this.state.open}
                    onClose={() => this.handleClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete {this.state.companyName}?</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete {this.state.companyName}?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.handleClose()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => {
                            this.deleteCompany()
                            this.onClickDelete(this.state.selectedid)
                            this.handleClose()
                        }} color="secondary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.editopen} onClose={() => this.dialogClose()} aria-labelledby="form-dialog-title">
                    <CompanyUpdate userinfo={this.state.currentRow} editClose={this.editClose} collectionId={this.state.currentRow ? this.state.currentRow.id : null}/>
                </Dialog>
                <Dialog open={this.state.addopen} onClose={() => this.jobClose()} aria-labelledby="form-dialog-title">
                    {/*<CompanyUpdate userinfo={this.state.currentRow} editClose={this.editClose} collectionId={this.state.currentRow ? this.state.currentRow.id : null}/>*/}
                    <DialogTitle id="alert-dialog-title">Add Job for {this.state.companyName}</DialogTitle>
                    <DialogContent>
                      <AdminJobEdit userinfo={this.state.currentRow} addClose={this.addClose}/>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        )}
    }
}

export default withStyles(styles)(Companies);
