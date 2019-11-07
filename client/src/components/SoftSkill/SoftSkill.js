import React from 'react';
import './SoftSkill.css';

// This will be a small icon representing each soft skill that can be used in the survey and on profile pages
class SoftSkill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true
    };
  }

  render() {
    const {abbrev, skill} = this.props; //text displayed on icon

    return (
      <div>
        {abbrev}
        {skill}
      </div>
    )
  }
}
 export default SoftSkill;
