import React from 'react';
import skillData from '../../assets/SkillData.js'

class SkillSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      skillLimit: 3
    };

    this.selectSkill = this.selectSkill.bind(this);
  }

  selectSkill(event) {
    if (event.target.checked) { // clicking on an unchecked box
      if (this.state.skills.length < this.state.skillLimit) {
        this.setState({
          skills: [...this.state.skills, event.target.value]
        },
        () => this.props.passToParent(this.state.skills)); // passes skill array to parent component
      } else { // attempting to check more than 3 skills
        console.log("Skill limit reached!");
      }
    } else { // clicking on an already checked box to uncheck it
      this.setState({
        skills: this.state.skills.filter((name)=> name!==event.target.value)
      },
      () => this.props.passToParent(this.state.skills)); // passes skill array to parent component
    }
  }

  render() {
    const skillList = skillData.map(skill => {
      return <option>{skill.name}</option>
    });

    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="first">1st</label>
          </div>
          <select className="form-control custom-select" id="first">
            <option selected disabled>Choose...</option>
            {skillList}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="second">2nd</label>
          </div>
          <select className="form-control custom-select" id="second">
            <option selected disabled>Choose...</option>
            {skillList}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="third">3rd</label>
          </div>
          <select className="form-control custom-select" id="third">
            <option selected disabled>Choose...</option>
            {skillList}
          </select>
        </div>
      </div>
    )
  }
}
 export default SkillSelector;
