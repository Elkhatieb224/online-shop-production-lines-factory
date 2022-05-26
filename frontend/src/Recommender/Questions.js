import React, { Component, Fragment } from 'react';
import quizdata from './Data';
import Answer from './Answer';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap'
import './quiz.css';

class Questions extends Component {
  state = {
    showResults: false,
    recommend: '',
    completed: 0,
    dataQuestion: [],
    steel: 0,
    Stainless: 0,
    copper: 0,
  };

  setStatefunstion = () => {
    //  use reactjs setState
    this.setState({
      dataQuestion: quizdata,
    });
  };
  componentDidMount() {
    this.setStatefunstion();
  }

  onAnswer = (products) => {
    products.map((product) => {
      if (product === ' STEEL')
        this.setState({ steel: this.state.steel + 1 });
      if (product === 'STAINLESS') this.setState({ Stainless: this.state.Stainless + 1 });
      if (product === 'COPPER')
        this.setState({ copper: this.state.copper + 1 });
    });

    this.setState({ completed: this.state.completed + 1 });
  };

  showResults = () => {
    let recommend = '';

    if (
      this.state.steel >= this.state.Stainless &&
      this.state.steel >= this.state.copper
    ) {
      recommend = 'product of steel';
    }
    if (
      this.state.copper >= this.state.Stainless &&
      this.state.copper >= this.state.steel
    ) {
      recommend =
        recommend === ''
          ? 'product of copper'
          : recommend + ' or product of copper';
    }
    if (
      this.state.Stainless >= this.state.copper &&
      this.state.Stainless >= this.state.steel
    ) {
      recommend =
        recommend === ''
          ? 'product of Stainless'
          : recommend + ' or product of Stainless';
    }

    this.setState({
      showResults: true,
      recommend,
    });
  };

  render() {
    return (
      <Fragment>
        {!this.state.showResults ? (
          <>
            {this.state.dataQuestion.map((data) => {
              return (
                <div key={data.id} className=' mainDiv'>
                  <h2> {data.question}</h2>
                  <Answer
                    key={data.id}
                    answers={data.answers}
                    onAnswer={this.onAnswer}
                  />
                </div>
              );
            })}

            {this.state.completed == 5 && (
              <div>
                <Button  className='my-3' onClick={this.showResults}>
                  {' '}
                  Recommend Product  {' '}
                </Button>
              </div>
            )}

            <br />
            <br />

            <div>
              <Link to='/'>
                <Button variant='light' className='btn-sm'>Back To Home</Button>
              </Link>
            </div>
          </>
        ) : (
          <div>
            We recommend You to {this.state.recommend}
            <div>
              <Link to='/'>
                <Button variant='light' className='btn-sm'>Home</Button>
              </Link>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Questions;
