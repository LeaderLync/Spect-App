import React from 'react';
import '../StudentSurvey/StudentSurvey.css';
//import SoftSkill from '../../components/SoftSkill/SoftSkill.js'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
import QuestionForm from '../../components/QuestionForm/QuestionForm.js'
import SkillDistributor from '../../components/SkillDistributor/SkillDistributor.js'
import api from '../../api.js'
import logo from '../../assets/Black-logo-no-background.png'

/*
  This component is what a student user will be presented with upon registartion for a new account.  It pulls from several other files to compose a large form that is sent to the database upon successful submission
*/

class StudentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [], // up to three
      /*strongSkills: {}, // 3 of your strongest soft skills
      weakSkills: {}    // 3 soft skills you want to work on*/
    };
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
    /*studentData["strongSkills"] = this.state.strongSkills;
    studentData["weakSkills"] = this.state.weakSkills;*/
    studentData["matches"] = []

    console.log(studentData);

    /*api.collectStudentResponse(studentData).then(response => {
      this.props.userInfoUpdate(response);
    }); // passes JSON object to be request*/

    //this.props.history.push("/"); // reroutes to student profile page upon successful survey form submission
  }

  getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries}, /*console.log(industries)*/)} // retireves state from child

  //getStrongSkills = (skills) => {this.setState({strongSkills: skills}, /*console.log(skills)*/)} // retrieves state from child

  //getWeakSkills = (skills) => {this.setState({weakSkills: skills}, /*console.log(skills)*/)} // retrieves state from child

  render() {
    /* FOR MANUAL TESTING */
    const testStudent = {
      "Leadership" : "1",
      "Teamwork" : "2",
      "Creativity" : "3",
      "Mindfulness" : "4",
      "Critical Thinking" : "5",
      "Communication" : "4",
      "Global Awareness" : "5",
      "Time Management" : "2",
      "Work Ethic" : "1"
    }

    if (this.props.collectionId === null || this.props.collectionId == '0') {
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
                  <SkillDistributor stats={testStudent}/>
                  {/*<h3 className="card-title">Contact Information</h3>
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
                  <br/>*/}
                  {/*<h3 className="card-title">Professional Interests and Skills Assessment</h3>
                  <div className="form-group">
                    <label htmlFor="selectIndustry" className="question">What job sector(s) are you looking for an internship/full time job? (pick a maximum of 3)</label>
                    <IndustrySelector passToParent={this.getSelectedIndustries}/>
                  </div>*/}
                  {/*<br/>
                  <label className="question">Pick your top 3 strongest soft skills:</label>
                  <SkillSelector passToParent={this.getStrongSkills}/>
                  <br/>
                  <label className="question">Pick the top 3 soft skills you want to work on:</label>
                  <SkillSelector passToParent={this.getWeakSkills}/>*/}
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
 export default StudentUpdate;