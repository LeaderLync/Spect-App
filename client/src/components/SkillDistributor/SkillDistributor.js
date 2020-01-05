import React from 'react';
import skillData from '../../assets/SkillData.js'

/*
  This component allows a user to distribute points amongst 9 skills
*/

class SkillDistributor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 9
    };

    this.moveSlider = this.moveSlider.bind(this);
  }

  moveSlider(event) {
    var total = 0;
    skillData.map(skill => {
      total += parseInt(document.getElementById(skill.name).value);
    })

    if (total > 27) {
      event.target.value = parseInt(event.target.value) + 27 - total
      total = 27
    }

    this.setState({
      points: total
    }, () => this.props.passToParent(this.state.points))
  }

  componentDidMount() {
    var total = 0;

    skillData.map(skill => {
      total += parseInt(document.getElementById(skill.name).value);
    })

    this.setState({points : total}, () => this.props.passToParent(this.state.points))
  }

  render() {
    const skillList = skillData.map(skill => {
      return (
        <div className="form-group" key={skill.id}>
          <label htmlFor="formControlRange">{skill.name}</label>
          <input type="range" className="custom-range" name={skill.name} id={skill.name} min="1" max="5" step="1" onChange={this.moveSlider} defaultValue={(this.props.stats ? this.props.stats[skill.name] : "1")}/>
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
        <span>{instruction}</span>
        <div>{this.state.points}/27</div>
        <div>{skillList}</div>
      </div>
    )
  }
}
 export default SkillDistributor;
