import React from 'react';
import '../CompanySurvey/CompanySurvey.css';
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
import QuestionForm from '../../components/QuestionForm/QuestionForm.js'
import api from '../../api.js'
import logo from '../../assets/Black-logo-no-background.png'
import ReactLoading from 'react-loading'
/*
  This component is what a company user will be presented with upon registartion for a new account.  It pulls from several other files to comose a large form that is sent to the database upon successful submission
*/

class CompanyUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [],
      strongSkills: {} // 3 of company's strongest soft skills
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent page refresh
    const data = new FormData(event.target); // collects all text fields and select fields data

    // composing payload
    var companyData = {}
    data.forEach(function(value, key){
    companyData[key] = value;
    });
    //companyData["avatarUrl"] = this.props.avatarURL
    companyData["id"] = this.props.collectionId;
    companyData["selectedIndustries"] = this.state.selectedIndustries;
    companyData["strongSkills"] = this.state.strongSkills;
    companyData["jobPosts"] = this.props.userinfo.jobPosts;

    console.log(companyData);

    // send payload
    api.updateCompanyProfile(companyData).then(response => {
      if (!this.props.editClose){
        this.props.userInfoUpdate(response);
        this.props.history.push("/CompanyProfile");
      } else {
        this.props.editClose();
      }
      console.log(response);
    }); // passes JSON object to be request*/
  }

  getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries}, /*console.log(industries)*/)} // retireves state from child

  getStrongSkills = (skills) => {this.setState({strongSkills: skills}, /*console.log(skills)*/)} // retrieves state from child

  render() {
    if (this.props.collectionId === null || this.props.collectionId == '0') {
      return (
        <div style={{margin: '0 auto'}}><ReactLoading type="spin" color="#28a4eb" height={"10%"} width={"10%"} className="the-loader"/></div>
      )
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <img src={logo} className="col-3 mx-auto"/>
                <form onSubmit={this.handleSubmit}>
                <h3 className="card-title">Company Information</h3>
                {/*<div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="inputCompanyName">Company name</label>
                    <input type="text" className="form-control" placeholder="Company name" name="companyName" required/>
                  </div>
                </div>*/}
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="inputBio">Company bio</label>
                    <textarea type="text" className="form-control" placeholder="Company bio" name="companyBio" rows="3"
                    defaultValue={(this.props.userinfo.companyBio)} required/>
                  </div>
                </div>
                <br/>
                  <h3 className="card-title">Professional Interests and Skills Assessment</h3>
                  <i>Please answer the following questions in a way you hope your ideal employee would answer them:</i>
                  <br/>
                  <br/>
                  <div className="form-group">
                    <label htmlFor="selectIndustry" className="question">What job sector(s) are you looking for an internship/full time job? (pick a maximum of 3)</label>
                    <IndustrySelector stats={this.props.userinfo} passToParent={this.getSelectedIndustries}/>
                  </div>
                  <br/>
                  {/*<label className="question">Pick your top 3 strongest soft skills:</label>
                  <SkillSelector stats={this.props.userinfo} passToParent={this.getStrongSkills}/>*/}
                  <br/>
                  {/*<QuestionForm/>*/}
                  <button type="submit" className="btn btn-primary" style={{marginBottom:'5vh', marginTop: '3vh',}}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default CompanyUpdate;
