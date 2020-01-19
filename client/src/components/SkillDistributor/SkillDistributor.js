import React from 'react';
import skillData from '../../assets/SkillData.js'


/*
  This component allows a user to distribute 27 points amongst 9 skills, with a skill ranging from 1-5
*/

class SkillDistributor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 9,
      skills: {
        leadership: 1,
  			teamwork: 1,
  			creativity: 1,
  			mindfulness: 1,
  			criticalThinking: 1,
  			communication: 1,
  			globalAwareness: 1,
  			timeManagement: 1,
  			workEthic: 1
      }
    };

    this.moveSlider = this.moveSlider.bind(this);
  }

  moveSlider(event) {
    var total = 0;
    skillData.map(skill => {
      total += parseInt(document.getElementById(skill.id).value);
    })

    if (total > 27) {
      event.target.value = parseInt(event.target.value) + 27 - total;
      total = 27;
    }

    var updatedSkills = {...this.state.skills};
    updatedSkills[event.target.id] = parseInt(event.target.value);

    this.setState({
      points: total,
      skills: updatedSkills
    }, () => this.props.passToParent(this.state));
  }

  componentDidMount() {
    var total = 0;
    var updatedSkills = {...this.state.skills}

    skillData.map(skill => {
      let curVal = parseInt(document.getElementById(skill.id).value);
      total += curVal;
      updatedSkills[skill.id] = curVal;
    })

    this.setState({
      points : total,
      skills: updatedSkills
    }, () => this.props.passToParent(this.state))
  }

  render() {
    const skillList = skillData.map(skill => {
      return (
        <div className="form-group" key={skill.key}>
          <label htmlFor="formControlRange">{skill.name}</label>
          <input type="range" className="custom-range" id={skill.id} min="1" max="5" step="1" onChange={this.moveSlider} defaultValue={(this.props.stats ? this.props.stats.skills[skill.id] : "1")}/>
          <div className = "ticks">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
        </div>
      )
    })

    let instruction;
    if (this.state.points < 27) {
      instruction = "Distribute the allotted 27 skill points amongst the 9 skills below.  A skill level can range from 1 (weak) to 5 (strong)."
    }
    else {
      instruction = "You have used all your skill points! If you want to increase the level of a skill, you must decrease the level of another skill."
    }

    return (
      <div>
        <div>{instruction}</div>
        <br/>
        <div>{this.state.points}/27 points</div>
        <br/>
        <div>{skillList}</div>
      </div>
    )
  }
}
 export default SkillDistributor;
