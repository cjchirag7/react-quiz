import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Home()
{
  return (
    <div className='container mt-4'>
      <div className='row white-text'>
        A platform to allow you to add various questions in a question bank and
        play a quiz made up of random questions.
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='row text-center'>
        <div className='col-12'>
          <Link to='/quiz'>
            <Button color='primary'>Play quiz</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;