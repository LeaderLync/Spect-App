import React from 'react';
import './StudentSurvey.css';
import SoftSkill from '../../components/SoftSkill/SoftSkill.js'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
import QuestionForm from '../../components/QuestionForm/QuestionForm.js'
import api from '../../api.js'

class StudentSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [],
      strongSkills: {}, // 3 of your strongest soft skills
      weakSkills: {}    // 3 soft skills you want to work on
    };
    console.log(this.props.user)
    console.log(this.props.collectionId)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent page refresh during testing, might prevent post
    const data = new FormData(event.target); // initializes with all text fields and select field

    /*data.append("selectedIndustries", JSON.stringify(this.state.selectedIndustries)); //industries of interest array
    data.append("strongSkills", JSON.stringify(this.state.strongSkills)); // strong soft skills
    data.append("weakSkills", JSON.stringify(this.state.weakSkills)); // weak soft skills*/

    /*console.log("FORM DATA SUBMISSION:")
    for (var pair of data.entries()) {
      console.log(pair[0]+ ': ' + pair[1]);
    }*/

    var studentData = {}
    data.forEach(function(value, key){
    studentData[key] = value;
    });

    studentData["selectedIndustries"] = this.state.selectedIndustries;
    studentData["strongSkills"] = this.state.strongSkills;
    studentData["weakSkills"] = this.state.weakSkills;

    console.log(JSON.stringify(studentData, null, 2));
    //console.log(JSON.parse(data.get("selectedIndustries")));
    //console.log(JSON.parse(data.get("strongSkills")));
    //console.log(JSON.parse(data.get("weakSkills")));

    api.collectStudentResponse(studentData);

    this.props.history.push("/studentprofile"); // reroutes to student profile page upon successful survey form submission
  }

  getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries}, console.log(industries))} // retireves state from child

  getStrongSkills = (skills) => {this.setState({strongSkills: skills}, console.log(skills))} // retrieves state from child

  getWeakSkills = (skills) => {this.setState({weakSkills: skills}, console.log(skills))} // retrieves state from child

  render() {
    /*if (this.props.collectionId === null || this.props.collectionId == '0') {
      return (
        <p>this is not loading</p>
      )
    }*/
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
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
                  {/*<div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="inputEmail">Email</label>
                      <input type="email" className="form-control" placeholder="Email" name="email" required/>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="inputNumber">Telephone number</label>
                      <input type="tel" className="form-control" placeholder="(xxx)xxx-xxxx" name="telephone" required/>
                    </div>
                  </div>*/}
                  <br/>
                  <h3 className="card-title">Professional Interests and Skills</h3>
                  <div className="form-group">
                    <label htmlFor="selectIndustry">What job sector are you looking for an internship/full time job? (pick a maximum of 3)</label>
                    <IndustrySelector passToParent={this.getSelectedIndustries}/>
                  </div>
                  <br/>
                  <h5>Pick your top 3 strongest soft skills:</h5>
                  {/*<SkillSelector passToParent={this.getStrongSkills}/>*/}
                  <br/>
                  <h5>Pick the top 3 soft skills you want to work on:</h5>
                  <SkillSelector passToParent={this.getWeakSkills}/>
                  {/*<QuestionForm/>*/}
                  <button type="submit" className="btn btn-primary" style={{marginBottom:'5vh', marginTop: '3vh',}}>Submit</button>
                </form>
                <h3 className="card-title">Self-Assessment Survey</h3>
                <h6 className="card-subtitle mb-2 text-muted">Please consider completing this additional self-assessment survey:</h6>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src='https://www.surveymonkey.com/r/spectSelfAssessment'></iframe>
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
