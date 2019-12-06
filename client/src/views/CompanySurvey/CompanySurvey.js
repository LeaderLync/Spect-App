import React from 'react';
import './CompanySurvey.css';
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
import QuestionForm from '../../components/QuestionForm/QuestionForm.js'
import api from '../../api.js'
import logo from '../../assets/Black-logo-no-background.png'

class CompanySurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [],
      strongSkills: {} // 3 of your strongest soft skills
    };
    console.log(this.props.user)
    console.log(this.props.collectionId)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent page refresh during testing, might prevent post
    const data = new FormData(event.target); // initializes with all text fields and select field

    var companyData = {}
    data.forEach(function(value, key){
    companyData[key] = value;
    });
    companyData["avatarUrl"] = this.props.avatarURL
    companyData["id"] = this.props.collectionId;
    companyData["selectedIndustries"] = this.state.selectedIndustries;
    companyData["strongSkills"] = this.state.strongSkills;

    //console.log(JSON.stringify(companyData, null, 2));

    api.collectCompanyResponse(companyData).then(response => {
      //console.log(response.data);
      this.props.userInfoUpdate(response);
    }); // passes JSON object to be request

    this.props.history.push("/CompanyProfile"); // reroutes to student profile page upon successful survey form submission
  }

  getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries}, console.log(industries))} // retireves state from child

  getStrongSkills = (skills) => {this.setState({strongSkills: skills}, console.log(skills))} // retrieves state from child

  render() {
    if (this.props.collectionId === null || this.props.collectionId == '0') {
      console.log(this.props.collectionId);
      return (
        <p>this is not loading</p>
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
                  <QuestionForm/>
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
 export default CompanySurvey;
