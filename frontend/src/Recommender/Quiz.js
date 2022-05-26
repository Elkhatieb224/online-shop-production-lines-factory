import React, { Fragment } from 'react';
import Questions from './Questions';
import './quiz.css';

const Quiz = () => {
  return (
    <div>
      <br />
      <br />
      <h1>Questions to help you get the right product</h1>
      <br />
      <Fragment>
        <Questions />
      </Fragment>
    </div>
  );
};

export default Quiz;
