import React from 'react';

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
    if (event.target.checked && (this.state.skills.length < this.state.skillLimit)) {
      this.setState({
        skills: [...this.state.skills, event.target.value]
      },
      () => this.props.passToParent(this.state.skills));
    } else {
      this.setState({
        skills: this.state.skills.filter((name)=> name!==event.target.value)
      },
      () => this.props.passToParent(this.state.skills));
    }
  }

  render() {
    return (
      <div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="Communication" value="Communication" onChange={this.selectSkill} checked={this.state.skills.indexOf("Communication")>=0}/>
          <label className="form-check-label" htmlFor="Communication">Communication</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="Leadership" value="Leadership" onChange={this.selectSkill} checked={this.state.skills.indexOf("Leadership")>=0}/>
          <label className="form-check-label" htmlFor="Leadership">Leadership</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="Creativity" value="Creativity" onChange={this.selectSkill} checked={this.state.skills.indexOf("Creativity")>=0}/>
          <label className="form-check-label" htmlFor="Creativity">Creativity</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="Mindfulness" value="Mindfulness" onChange={this.selectSkill} checked={this.state.skills.indexOf("Mindfulness")>=0}/>
          <label className="form-check-label" htmlFor="Mindfulness">Mindfulness</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="WorkEthic" value="WorkEthic" onChange={this.selectSkill} checked={this.state.skills.indexOf("WorkEthic")>=0}/>
          <label className="form-check-label" htmlFor="WorkEthic">Work Ethic</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="TimeManagement" value="TimeManagement"  onChange={this.selectSkill} checked={this.state.skills.indexOf("TimeManagement")>=0}/>
          <label className="form-check-label" htmlFor="TimeManagement">Time Management</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="CriticalThinking" value="CriticalThinking" onChange={this.selectSkill} checked={this.state.skills.indexOf("CriticalThinking")>=0}/>
          <label className="form-check-label" htmlFor="CriticalThinking">Critical Thinking</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="Teamwork" value="Teamwork" onChange={this.selectSkill} checked={this.state.skills.indexOf("Teamwork")>=0}/>
          <label className="form-check-label" htmlFor="Teamwork">Teamwork</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="GlobalAwareness" value="GlobalAwareness" onChange={this.selectSkill} checked={this.state.skills.indexOf("GlobalAwareness")>=0}/>
          <label className="form-check-label" htmlFor="GlobalAwareness">Global Awareness</label>
        </div>
      </div>
    )
  }
}
 export default SkillSelector;
