import React from 'react';
import skillData from '../../assets/SkillData.js'

class SkillSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      second: null,
      third: null
    };

    this.selectSkill = this.selectSkill.bind(this);
  }

  selectSkill(event) {
    const skill = event.target.id;
    this.setState({
      [skill]: event.target.value
    }, () => this.props.passToParent(this.state));
  }

  render() {
    const skillList = skillData.map(skill => {
      return <option key={skill.id} value={skill.name}>{skill.name}</option>
    });

    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="first">1st</label>
          </div>
          <select className="form-control custom-select" id="first" defaultValue="Choose..." onChange={this.selectSkill} required>
            <option value="">Choose...</option>
            {skillList}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="second">2nd</label>
          </div>
          <select className="form-control custom-select" id="second" defaultValue="Choose..." onChange={this.selectSkill} required>
            <option value="">Choose...</option>
            {skillList}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="third">3rd</label>
          </div>
          <select className="form-control custom-select" id="third" defaultValue="Choose..." onChange={this.selectSkill} required>
            <option value="">Choose...</option>
            {skillList}
          </select>
        </div>
      </div>
    )
  }
}
 export default SkillSelector;
