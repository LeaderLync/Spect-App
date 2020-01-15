import React from 'react';
import skillData from '../../assets/SkillData.js'

/*
  This component allows a user to rank their top 3 soft skills without being able to make a repetition
*/

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
    }, () => this.props.passToParent(this.state)); // keeps parent state updated
  }

  componentDidMount() {
    if (this.props.stats) {
      this.setState({
        first: this.props.stats.strongSkills.first,
        second: this.props.stats.strongSkills.second,
        third: this.props.stats.strongSkills.third
      }, () => this.props.passToParent(this.state));
    }
  }

  render() {

    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="first">1st</label>
          </div>
          <select className="form-control custom-select" id="first" defaultValue={this.props.stats ? this.props.stats.strongSkills.first : "Choose..."} onChange={this.selectSkill} required>
            <option value="">Choose...</option>
            {skillData.filter(skill => {
              return skill.id !== this.state.second && skill.id !== this.state.third // removes already selected skills as options
            }).map(skill => {
              return <option key={skill.key} value={skill.id}>{skill.name}</option>
            })}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="second">2nd</label>
          </div>
          <select className="form-control custom-select" id="second" defaultValue={this.props.stats ? this.props.stats.strongSkills.second : "Choose..."} onChange={this.selectSkill} required>
            <option value="">Choose...</option>
            {skillData.filter(skill => {
              return skill.id !== this.state.first && skill.id !== this.state.third // removes already selected skills as options
            }).map(skill => {
              return <option key={skill.key} value={skill.id}>{skill.name}</option>
            })}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="third">3rd</label>
          </div>
          <select className="form-control custom-select" id="third" defaultValue={this.props.stats ? this.props.stats.strongSkills.third : "Choose..."} onChange={this.selectSkill} required>
            <option value="">Choose...</option>
            {skillData.filter(skill => {
              return skill.id !== this.state.first && skill.id !== this.state.second // removes already selected skills as options
            }).map(skill => {
              return <option key={skill.key} value={skill.id}>{skill.name}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}
 export default SkillSelector;
