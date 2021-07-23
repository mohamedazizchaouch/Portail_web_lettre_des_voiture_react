import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "../../components/Wrappers";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Stat_produit from "./Stats/Stat_Produit"
import Stat_carnet from './Stats/Stat_carnet';
import Stat_client from './Stats/Stat_client';

export class Statistique extends Component {
    render() {
        return (
            <div align="center" >
<br></br>
                 <Grid item xs={12} sm={3}>
          <Paper>
          <br></br>
         
          <Typography  weight="bold" variant="h6" >
          <EqualizerIcon></EqualizerIcon> Statistique :
              </Typography>
              <br></br>
          </Paper>
        </Grid> 
        <br></br> <br></br> <br></br> <br></br>
    
        <Grid container spacing={3}>
        <Grid item xs>
          <Paper > <Stat_produit></Stat_produit>   </Paper>
        </Grid>
        <Grid item xs>
          <Paper ><Stat_carnet></Stat_carnet></Paper>
        </Grid>
        <Grid item xs>
          <Paper > <Stat_client></Stat_client></Paper>
        </Grid>
      </Grid>
    
      <br></br> <br></br>
      <Grid item xs={12}>
          <Paper >

          <iframe width="1000" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWE1OTkyNjAtYTEzNy00M2JiLWExODktN2VlODJkNGIyY2Y0IiwidCI6ImEyZDgzMzZlLWEyOTktNGQ1Mi04NjM2LWI3ZWY4YzExN2ExZCIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
          </Paper>
        </Grid>
          
           
          
            </div>
        )
    }
}

export default Statistique
