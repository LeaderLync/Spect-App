import React from 'react';
import './StudentSurvey.css';
//import SoftSkill from '../../components/SoftSkill/SoftSkill.js'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
import QuestionForm from '../../components/QuestionForm/QuestionForm.js'
import api from '../../api.js'
import logo from '../../assets/Black-logo-no-background.png'

class StudentSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [], // up to three
      strongSkills: {}, // 3 of your strongest soft skills
      weakSkills: {}    // 3 soft skills you want to work on
    };
    //console.log(this.props.user)
    //console.log(this.props.collectionId)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent page refresh during testing, might prevent post
    const data = new FormData(event.target); // collects info from all text fields and multiple choice questions

    /* create JSON object to include in post request */
    var studentData = {}
    data.forEach(function(value, key){
    studentData[key] = value;
    });

    studentData["id"] = this.props.collectionId;
    studentData["selectedIndustries"] = this.state.selectedIndustries;
    studentData["strongSkills"] = this.state.strongSkills;
    studentData["weakSkills"] = this.state.weakSkills;
    studentData["matches"] = [
      {
        companyName: "Google"
      }, {
        companyName: "Twitter"
      }, {
        companyName: "Capitol One"
      }
    ]

    //console.log(JSON.stringify(studentData, null, 2));

    api.collectStudentResponse(studentData).then(response => {
      //console.log(response.data);
      this.props.userInfoUpdate(response);
    }); // passes JSON object to be request

    this.props.history.push("/"); // reroutes to student profile page upon successful survey form submission
  }

  getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries}, console.log(industries))} // retireves state from child

  getStrongSkills = (skills) => {this.setState({strongSkills: skills}, console.log(skills))} // retrieves state from child

  getWeakSkills = (skills) => {this.setState({weakSkills: skills}, console.log(skills))} // retrieves state from child

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
                  <h3 className="card-title">Contact Information</h3>
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="inputFirstName">First name</label>
                      <input type="text" className="form-control" placeholder="First name" name="firstName" required/>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="inputLastName">Last name</label>
                      <input type="text" className="form-control" placeholder="Last name" name="lastName" required/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="inputEmail">Email</label>
                      <input type="email" className="form-control" placeholder="Email" name="email" required/>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="inputNumber">Telephone</label>
                      <input type="tel" className="form-control" placeholder="(xxx)xxx-xxxx" name="telephone" required/>
                    </div>
                  </div>
                  <br/>
                  <h3 className="card-title">Professional Interests and Skills Assessment</h3>
                  <div className="form-group">
                    <label htmlFor="selectIndustry" className="question">What job sector(s) are you looking for an internship/full time job? (pick a maximum of 3)</label>
                    <IndustrySelector passToParent={this.getSelectedIndustries}/>
                  </div>
                  <br/>
                  <label className="question">Pick your top 3 strongest soft skills:</label>
                  <SkillSelector passToParent={this.getStrongSkills}/>
                  <br/>
                  <label className="question">Pick the top 3 soft skills you want to work on:</label>
                  <SkillSelector passToParent={this.getWeakSkills}/>
                  <QuestionForm/>
                  <button type="submit" className="btn btn-primary" style={{marginBottom:'5vh', marginTop: '3vh',}}>Submit</button>
                </form>
                <h3 className="card-title">Self-Assessment Survey</h3>
                <h6 className="card-subtitle mb-2 text-muted">Please consider completing this additional self-assessment survey:</h6>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src='https://www.surveymonkey.com/r/spectSelfAssessment' title="surveymonkey"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default StudentSurvey;
