import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "../../../components/Wrappers";
import EqualizerIcon from '@material-ui/icons/Equalizer';

export class Stat extends Component {
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
        </Grid> <br></br>
                <br></br> 
<Grid item xs={12}>
          <Paper >

          <iframe width="1000" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMWE1OTkyNjAtYTEzNy00M2JiLWExODktN2VlODJkNGIyY2Y0IiwidCI6ImEyZDgzMzZlLWEyOTktNGQ1Mi04NjM2LWI3ZWY4YzExN2ExZCIsImMiOjh9" frameborder="0" allowFullScreen="true"></iframe>
          </Paper>
        </Grid>

            </div>
        )
    }
}

export default Stat
