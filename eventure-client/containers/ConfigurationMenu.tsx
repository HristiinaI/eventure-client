import * as React from "react";
// import Tabs from 'react-bootstrap/Tabs'
import EventName from "../components/EventName";
import EventDate from "../components/EventDate";
import HandleSubmit from "../components/HandleSubmit";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Event name', 'When?', 'Where?'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <EventName />;
    case 1:
      return <EventDate />;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

export default function ConfigurationMenu() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = () => {
    <HandleSubmit />
  }

  return (
    <form onSubmit = {handleSubmit}>
    <div className={classes.root} >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleSubmit} className={classes.button}>
              Submit
            </Button>
            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>

              <Button
                 variant="contained"
                 color="primary"
                 onClick={handleNext}
                 className={classes.button}
              >
                {/* {activeStep === steps.length - 1 ? 'Submit' : 'Next'} */}
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </form>
  );
}
