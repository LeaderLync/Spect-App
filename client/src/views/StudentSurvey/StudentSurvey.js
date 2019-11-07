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
                <h3>Contact Information</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
 export default StudentSurvey;
