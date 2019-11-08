import React from 'react';
import './StudentSurvey.css';
import SoftSkill from '../../components/SoftSkill/SoftSkill.js'

class StudentSurvey extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <h3 className="card-title">Contact Information</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group col">
                      <label for="inputFirstName">First name</label>
                      <input type="text" className="form-control" placeholder="First name"/>
                    </div>
                    <div className="form-group col">
                      <label for="inputLastName">Last name</label>
                      <input type="text" className="form-control" placeholder="Last name"/>
                     </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label for="inputEmail">Email</label>
                      <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group col">
                      <label for="inputNumber">Telephone number</label>
                      <input type="tel" className="form-control" placeholder="(xxx)xxx-xxxx"/>
                    </div>
                  </div>
                </form>
                <br/>
                <h3 className="card-title">Professional Interests and Skills</h3>
                <form>
                  <div className="form-group">
                    <label for="selectIndustry">Select the industry that best describes your professional interests:</label>
                    <select className="form-control" id="selectIndustry" size="10">
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
                </form>
                <button type="submit" class="btn btn-primary">Submit</button>
                <h3 className="card-title">Self-Assessment Survey</h3>
                <h6 className="card-subtitle mb-2 text-muted">Please consider completing this additional self-assessment survey:</h6>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src='https://www.surveymonkey.com/r/spectSelfAssessment' onLoad="alert('Test');"></iframe>
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
