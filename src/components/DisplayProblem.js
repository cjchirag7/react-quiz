import React from 'react';
import {FormGroup, Form, Spinner, Alert, Input, Label} from 'reactstrap';

function DisplayProblem (props)
{
  const { index, problem, setUsersChoice, active, userChoice } = props;
  if(!problem)
  {
    return    (
     <Spinner color='info' />
     );
  }
  const { question, choices, correct, desc, image} = problem;
  return (
    <>
      {image !== 'None' ? (
        <div className='row '>
          <div className='col-12 text-center'>
            <img src={image} />
            <br />
            <br />
          </div>
        </div>
      ) : (
        ''
      )}
      <div className='row '>
        <div className='col-12 text-center'>
          <h5>{index + 1 + '. ' + question}</h5>
        </div>
      </div>
      <Form>
        {choices.map((option, i) => (
          <FormGroup check key={i.toString()}>
            <Label check>
              {active ? (
                <Input
                  type='radio'
                  name={'radio'}
                  checked={userChoice === i + 1}
                  onChange={() => {
                    setUsersChoice(index, i + 1);
                  }}
                />
              ) : (
                <Input type='radio' name={'radio' + i} disabled />
              )}
              {option}
            </Label>
          </FormGroup>
        ))}
      </Form>
      <br />
      <br />
      {!active ? (
        <Alert color='info'>
          <b> Correct answer : </b> ({correct})
          <br />
          <b> Explanation : </b> {desc}
        </Alert>
      ) : (
        ''
      )}
    </>
  );
}

export default DisplayProblem;