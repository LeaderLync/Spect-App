import React from 'react';
import questionData from '../../assets/QuestionData.js'

class QuestionForm extends React.Component {
  render() {
    const questionList = questionData.map(question => {
      return (
        <div key={question.id} className="form-group">
          <br/>
          <label>{question.question}</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question.id} value="1"/>
            <label className="form-check-label" htmlFor={question.question}>{question.option1}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question.id} value="0"/>
            <label className="form-check-label" htmlFor={question.question}>{question.option0}</label>
          </div>
        </div>
      )
    })
    return (
      <div>{questionList}</div>
    )
  }
}
export default QuestionForm;
