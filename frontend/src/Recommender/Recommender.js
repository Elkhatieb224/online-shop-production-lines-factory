import React from 'react';
import { Link } from 'react-router-dom';
import {  Button} from 'react-bootstrap';


const Recommender = () => {
  return (
    <div>
      We Recommender You To use{' '}
      <div>
        <Link to='/'>
          <Button  variant='light' className='btn-sm'> Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Recommender;
