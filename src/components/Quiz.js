import React, { useState, useEffect } from 'react';
import {Progress, Button} from 'reactstrap';
import DisplayProblem from './DisplayProblem';
import questions from '../questions';

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function Timer(props)
{
  const {timeLeft} = props;
return (
  <>
    <div className='text-center'>
      {timeLeft!==0
      ?
      (timeLeft+" seconds left ")
      :"Time's Up"
      }
      </div>
    <Progress color="danger" value={100-timeLeft} />
  </>
);
}

function Quiz() {
  const [time, setTime] = useState(100);
  const [active, setActive] = useState(true);
  const [problems, setProblems] = useState([]);
  const [selected, setSelected] = useState([null,null,null,null,null]); // option selected by user
  const [current, setCurrent] = useState(0);  // index of current question

  const finishQuiz = () => {
    setActive(false);
    let score=0;
    for(let i=0; i<problems.length; i++)
    {
      score+=(problems[i].correct===selected[i])*10;
    }
    alert("Congrats ! Your score is "+score+" out of 50");
  };

  useEffect(()=>{
    setTimeout(()=>{
      if(active&&time!==0)
      {
        setTime(Number(time)-1);
      }
      else if(active)
      {
        finishQuiz();
      }
    },1000);
  },[time]);

  useEffect(()=>{
    let problems = shuffle(questions);
    problems = problems.splice(0, 5);
    setProblems(problems);
  },[]);

  const setUsersChoice = (index, choice) =>
  {
    selected[index]=choice;  // Modify the array 'selected'
    setSelected(selected);
  }

  return (
    <div className='container mt-4 text-white'>
      <div className='row'>
        <div className='col-12'>
          <Timer timeLeft={time} />
        </div>
      </div>
      <br /> <br />
      <DisplayProblem
        index={current}
        problem={problems[current]}
        setUsersChoice={setUsersChoice}
        active={active}
        userChoice={selected[current]}
      />
      <div className='row'>
        <div className='col-12'>
          {current !== 0 ? (
            <>
              <Button
                color='info'
                onClick={() => {
                  setCurrent(current - 1);
                }}
              >
                Previous
              </Button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </>
          ) : (
            ''
          )}
          {current !== 4 ? (
            <>
              <Button
                color='info'
                onClick={() => {
                  setCurrent(current + 1);
                }}
              >
                Next
              </Button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </>
          ) : (
            ''
          )}
          {
            active
          ?
          <Button color='primary' onClick={finishQuiz}>Submit Quiz</Button>
          :""
          }
        </div>
      </div>
    </div>
  );
}

export default Quiz;
