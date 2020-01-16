import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import api from '../../api'
import Button from '@material-ui/core/Button'
import app from "../../config/firebaseauth"
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import FormControl from '@material-ui/core/FormControl'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    appBarSpacer: theme.mixins.toolbar
})

class CompanyAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companyName: 'Default Company',
            selectedIndustries: [],
            strongSkills: {},
            strongSkills: {},
            nameErr: false,
            emailErr: false,
            selectedFile: null,
            imagePreviewUrl: null,
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlefileChange = this.handlefileChange.bind(this)
    }
    getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries})}
    getStrongSkills = (skills) => {this.setState({strongSkills: skills})}
    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            companyName: event.target.value
        })
    }   
    handlefileChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }
    async handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target);
        console.log(event.target.elements)
        const {thefile, companyName, companyEmail, companyBio, companyPassword} = event.target.elements
        const imagefile = thefile.files[0]
        console.log(imagefile)
        companyData= {}
        try {
            const newuser = await app.auth.createUserWithEmailAndPassword(companyEmail.value,companyPassword.value)
            var request = {
                uid: newuser.user.uid,
                accountType: 1
            }
            var response = '0'
            await api.registernewuser(request).then((res) => {
                response = res
            })
            const storageref = app.storage.ref()
            const mainImage = storageref.child(response + thefile.files[0].name)
            var the_url = ""
            var companyData = {}
            await mainImage.put(imagefile).then((snapshot) => {
            })
            await mainImage.getDownloadURL().then((url) => {
                companyData["avatarUrl"] = url
            })
            companyData["companyName"] = companyName.value
            companyData["companyBio"] = companyBio.value
            companyData["id"] = response
            companyData["selectedIndustries"] = this.state.selectedIndustries
            companyData['strongSkills'] = this.state.strongSkills
            await api.collectCompanyResponse(companyData).then(response => {
                console.log(response)
            })
        } catch(error) {
            alert(error)
        }
    }
    
    render() {
        const {classes} = this.props
        return (
            <React.Fragment>
                <Typography variant="h3" className={classes.title}>
                    Add Company/Mentor
                </Typography>
                <div className={classes.appBarSpacer}/>
                    <div className="">
                        <div className="card-body">
                            <img className="col-3 mx-auto"/>
                            <form onSubmit={this.handleSubmit}>
                            <h3 className="card-title">Company Information</h3>
                            <div className="form-row">
                                <div className="form-group col" style={{textAlign: 'center'}}>
                                        <Avatar style={{width: '200px', height: '200px', margin: '0 auto'}} src={this.state.file}/>
                                        <label htmlFor="file-upload" className="custom-file-upload" style={{marginTop: '10px'}}>
                                            <Button component="span" variant="contained" color="primary">Upload</Button>
                                        </label>
                                        <input type="file" style={{display: 'none'}}
                                        id="file-upload"
                                        name="thefile"
                                        onChange={this.handlefileChange}/>
                                 </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputCompanyName">Company email</label>
                                <input type="text" className="form-control" placeholder="Company name" name="companyEmail" required/>
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputCompanyName">Company password</label>
                                <input type="text" className="form-control" placeholder="Company name" name="companyPassword" required/>
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputCompanyName">Company name</label>
                                <input type="text" className="form-control" placeholder="Company name" name="companyName" required/>
                            </div>
                            </div>
                            <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="inputBio">Company bio</label>
                                <textarea type="text" className="form-control" placeholder="Company bio" name="companyBio" rows="3" required/>
                            </div>
                            </div>
                            <br/>
                            <h3 className="card-title">Professional Interests and Skills Assessment</h3>
                            <i>Please answer the following questions in a way you hope your ideal employee would answer them:</i>
                            <br/>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="selectIndustry" className="question">What job sector(s) are you looking for an internship/full time job? (pick a maximum of 3)</label>
                                <IndustrySelector passToParent={this.getSelectedIndustries}/>
                            </div>
                            <br/>
                            <label className="question">Pick your top 3 strongest soft skills:</label>
                            <SkillSelector passToParent={this.getStrongSkills}/>
                            <br/>
                            {/*<QuestionForm/>*/}
                            <button type="submit" className="btn btn-primary" style={{marginBottom:'5vh', marginTop: '3vh',}}>Submit</button>
                            </form>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(CompanyAdd);