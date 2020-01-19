import React from 'react';
import '../StudentSurvey/StudentSurvey.css';
//import SoftSkill from '../../components/SoftSkill/SoftSkill.js'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'
import IndustrySelector from '../../components/IndustrySelector/IndustrySelector.js'
import QuestionForm from '../../components/QuestionForm/QuestionForm.js'
import SkillDistributor from '../../components/SkillDistributor/SkillDistributor.js'
import api from '../../api.js'
import logo from '../../assets/Black-logo-no-background.png'
import ReactLoading from 'react-loading'
/*
  This component is what a student user will be presented with upon registartion for a new account.  It pulls from several other files to compose a large form that is sent to the database upon successful submission
*/

class StudentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndustries: [], // up to three
      skillPoints: 0,
      skillTree: {}
      /*strongSkills: {}, // 3 of your strongest soft skills
      weakSkills: {}    // 3 soft skills you want to work on*/
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent page refresh during testing, might prevent post

    /* create JSON object to include in post request */
    var studentData = {}

    studentData["id"] = this.props.collectionId || this.props.userinfo.id;
    studentData["selectedIndustries"] = this.state.selectedIndustries;
    studentData["skills"] = this.state.skillTree;

    //console.log(studentData);

    api.updateStudentProfile(studentData).then(response => {
      if (!this.props.editClose){
        this.props.userInfoUpdate(response);
        this.props.history.push("/");
      } else {
        this.props.editClose();
      }
      console.log(response);
    }); // passes JSON object to be request*/
  }

  getSelectedIndustries = (industries) => {this.setState({selectedIndustries: industries}, /*console.log(industries)*/)} // retireves state from child

  getSkillData = (childState) => {this.setState({skillPoints: childState.points, skillTree: childState.skills}, /*() => console.log(this.state)*/)} // retireves state from child


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
                  <h3 className="card-title">Professional Interests and Skills Assessment</h3>
                  <SkillDistributor passToParent={this.getSkillData} stats={this.props.userinfo}/>
                  <div className="form-group">
                    <label htmlFor="selectIndustry" className="question">What job sector(s) are you looking for an internship/full time job? (pick a maximum of 3)</label>
                    <IndustrySelector stats={this.props.userinfo} passToParent={this.getSelectedIndustries}/>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{marginBottom:'5vh', marginTop: '3vh',}}>Save</button>
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
