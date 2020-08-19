import React from "react";
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  btMain: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 50,
  },
  btSS: {
    '& #stop': {marginLeft: 10}
  },
  btDef: {
    marginTop: 12,
    display: 'flex',
    '& Button': {
      flexGrow: 2,
    },
  }
}))

function Buttons(props) {
  const classes = useStyle();
  return (
    <div className={classes.btMain}>
      <div className={classes.btSS}>
        {(props.status === 0) ?
          <Button variant="outlined" color="primary" onClick={props.start}>
            Start
          </Button> : ""
        }
        {(props.status === 1) ?
          <div>
            <Button variant="outlined" color="primary" onClick={props.pause}>
              Pause
            </Button>
            <Button id="stop" variant="outlined" color="secondary" onClick={props.reset}>
              Reset
            </Button>
          </div>
          : ""
        }
        {(props.status === 2) ?
          <div>
            <Button variant="outlined" color="primary" onClick={props.resume}>
              Resume
            </Button>
            <Button id="stop" variant="outlined" color="secondary" onClick={props.reset}>
              Reset
            </Button>
          </div>
          : ""
        }
      </div>
      {/*<div className={classes.btDef}>*/}
      {/*  <Button variant="outlined">Reset</Button>*/}
      {/*</div>*/}

    </div>
  )
}

export default Buttons