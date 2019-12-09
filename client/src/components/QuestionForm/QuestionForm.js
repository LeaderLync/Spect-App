import React from 'react';
import questionData from '../../assets/QuestionData.js'

/*
  This component presents all of the soft skill questions as multiple choice style radio forms, with each question having answers of value 0 or 1
*/

class QuestionForm extends React.Component {
  render() {
    const questionList = questionData.map(question => {
      return (
        <div key={question.id} className="form-group">
          <br/>
          <label className="question">{question.question}</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question.id} value="1" required/>
            <label className="form-check-label" htmlFor={question.question}>{question.option1}</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name={question.id} value="0" required/>
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
