import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: <NavigateNextIcon></NavigateNextIcon>,
  },
  {
    value: 25,
    label: 'Etape 2',
  },
  {
    value: 50,
    label: 'Etape 3',
  },
  {
    value: 75,
    label: 'Etape 4',
  },
  {
    value: 100,
    label: 'Etape 5',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Slider
        defaultValue={0}
        //getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={0}
        marks={marks}
        valueLabelDisplay="off"
      />
    </div>
  );
}
