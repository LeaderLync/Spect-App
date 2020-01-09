import React from 'react';
import industryData from '../../assets/IndustryData.js'

/*
  This component allows a user to check off up to three industry names, but no more than 3
*/

class IndustrySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      industries: [],
      industryLimit: 3
    };

    this.selectIndustry = this.selectIndustry.bind(this);
  }

  selectIndustry(event) {
    if (event.target.checked) { // clicking on an unchecked box
      if (this.state.industries.length < this.state.industryLimit) {
        this.setState({
          industries: [...this.state.industries, event.target.value]
        },
        () => this.props.passToParent(this.state.industries)); // passes industries array to parent component
      } else { // attempting to check more than 3 industries
        // console.log("Industry limit reached!");
      }
    } else { // clicking on an already checked box to uncheck it
      this.setState({
        industries: this.state.industries.filter((name)=> name!==event.target.value)
      },
      () => this.props.passToParent(this.state.industries)); // passes skill array to parent component
    }
  }

  componentDidMount() {
    if (this.props.stats) {
      this.setState({
        industries: this.props.stats.selectedIndustries
      },
      () => this.props.passToParent(this.state.industries));
    }
  }

  render() {
    const industryList = industryData.map(industry => {
      return (
        <div key={industry.id} className="form-check">
          <input className="form-check-input" type="checkbox" id={industry.id} value={industry.name} onChange={this.selectIndustry} checked={this.state.industries.indexOf(industry.name)>=0}/>
          <label className="form-check-label" htmlFor={industry.name}>{industry.name}</label>
        </div>
      );
    });

    return (
      <div>
        {industryList}
      </div>
    );
  }
}
 export default IndustrySelector;
