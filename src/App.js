import React, {useState} from 'react';
import './css/App.css';
import {makeStyles} from "@material-ui/core/styles";
import DisplayTime from "./component/DisplayTime";
import Buttons from "./component/Buttons";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    maxWidth: '600px',
    width: '90%',
    height: 500,
    margin: '30px auto',

  },
  clockHolder: {
    width: '100%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: '30px auto',
    borderRadius: 5,
    '& h1': {
      textAlign: 'center',
      paddingTop: 20,
    },
},
  stopWatch: {
    padding: '60px 0px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '& #bt': {
      background: '#00ABA9',
      color: '#fff',
      fontFamily: 'monospace',
      fontSize: 22,
      padding: 20,
      borderRadius: 5,
      width: 70,
    }
  },
}));

function App() {
  const classes = useStyles();
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interV, setInterV] = useState();
  const [status, setStatus] = useState(0);

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH});
  };
  const start = () => {
    run();
    setStatus(1);
    setInterV(setInterval(run, 10));
  };
  const pause = () => {
    clearInterval(interV);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interV);
    setStatus(0);
    setTime({ms: 0, s: 0, m: 0, h: 0});
  };
  const resume = () => start();
  return (
    <div className={classes.mainSection}>
      <div className={classes.clockHolder}>
        <h1>STOPWATCH</h1>
        <div className={classes.stopWatch}>
          <DisplayTime time={time}/>
          <Buttons
            status={status}
            start={start}
            pause={pause}
            reset={reset}
            resume={resume}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
