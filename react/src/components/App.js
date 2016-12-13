import React, { Component } from 'react';
import Answer from './Answer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusAnswerId: null,
      response: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    if(id != this.state.focusAnswerId) {
      let focusAnswerCorrect = this.findAnswerResponseById(id);
      let newResponse = focusAnswerCorrect ? "CRUSHED IT" : "WRONG"
      this.setState({ focusAnswerId: id, response: newResponse })
    }
  }

  findAnswerResponseById(id) {
    let allAnswers = this.props.data.answers;
    let answer = allAnswers.find(answer => answer.id == id);
    return answer.correct;
  }

  render() {
    let question = this.props.data.question.body;
    let response = this.state.response;

    let answers = this.props.data.answers.map(answer => {
      let onClick = () => {
        this.handleClick(answer.id);
      }
      return (
        <Answer
          id = {answer.id}
          key = {answer.id}
          body = {answer.body}
          onClick={onClick}
        />
      )
    });

    return(
      <div>
        <h1 id="question">{question}</h1>
        {answers}
        {response}
      </div>
    )
  }
}

export default App;
