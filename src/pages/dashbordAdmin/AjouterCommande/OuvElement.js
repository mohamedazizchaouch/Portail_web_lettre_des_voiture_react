
import React, { useState, useEffect,useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function OuvElement(data) {
    const [img, setimg] = React.useState("");
  const classes = useStyles();
  useEffect(() => {

    
    // Met à jour le titre du document via l’API du navigateur
 //  console.log(data.data)
   setimg(data.data)
   console.log(img)
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
          <Typography variant="subtitle1">element graphique :</Typography>
          </Grid>
          <Grid item xs={12} sm container>
          <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={`http://localhost/Images/${data.data}`} />
            </ButtonBase>
            <Grid item>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
