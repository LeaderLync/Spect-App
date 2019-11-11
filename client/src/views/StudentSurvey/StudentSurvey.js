import React from 'react';
import './StudentSurvey.css';
import SoftSkill from '../../components/SoftSkill/SoftSkill.js'
import SkillSelector from '../../components/SkillSelector/SkillSelector.js'

class StudentSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strongSkills: [],
      weakSkills: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // prevent page refresh during testing, might prevent post
    const data = new FormData(event.target);
    data.append("Strong skills", this.state.strongSkills);
    data.append("Weak skills", this.state.weakSkills);

    for (var pair of data.entries()) {
      console.log(pair[0]+ ': ' + pair[1]);
    }
  }

  getStrongSkills = (skills) => {this.setState({strongSkills: skills})}

  getWeakSkills = (skills) => {this.setState({weakSkills: skills})}

  /*
    Add state to the skill selector class to ensure
    that no more than three are chosen, save them into array,
    then add function that takes in FormData and appends the
    array of skills to it
  */

  render() {
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
                      <input type="text" className="form-control" placeholder="First name" name="firstName"/>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="inputLastName">Last name</label>
                      <input type="text" className="form-control" placeholder="Last name" name="lastName"/>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="inputEmail">Email</label>
                      <input type="email" className="form-control" placeholder="Email" name="email"/>
                    </div>
                    <div className="form-group col">
                      <label htmlFor="inputNumber">Telephone number</label>
                      <input type="tel" className="form-control" placeholder="(xxx)xxx-xxxx" name="telephone"/>
                    </div>
                  </div>
                  <br/>
                  <h3 className="card-title">Professional Interests and Skills</h3>
                  <div className="form-group">
                    <label htmlFor="selectIndustry">Select the industry that best describes your professional interests:</label>
                    <select className="form-control" id="selectIndustry" size="10" name="industry">
                      <option>Medical/Healthcare</option>
                      <option>Engineering</option>
                      <option>Tech</option>
                      <option>Law</option>
                      <option>Education</option>
                      <option>Manufacturing (Food, chemical, textiles, machines, equipment)</option>
                      <option>Retail</option>
                      <option>Agriculture</option>
                      <option>Sports</option>
                      <option>Media/Entertainment</option>
                    </select>
                  </div>
                  <br/>
                  <h5>Pick your top 3 strongest soft skills:</h5>
                  <SkillSelector passToParent={this.getStrongSkills}/>
                  <br/>
                  <h5>Pick the top 3 soft skills you want to work on:</h5>
                  <SkillSelector passToParent={this.getWeakSkills}/>
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
