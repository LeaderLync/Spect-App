import React from 'react';
import './StudentSurvey.css';
import SoftSkill from '../../components/SoftSkill/SoftSkill.js'

class StudentSurvey extends React.Component {
  render() {
    return (
      <div>
        <SoftSkill abbrev='Le' skill='Leadership'/>
        <SoftSkill abbrev='Cr' skill='Creativity'/>
        <SoftSkill abbrev='Mi' skill='Mindfulness'/>
      </div>
    )
  }
}
 export default StudentSurvey;
