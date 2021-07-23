import React, { Component } from 'react'

import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'

import ArchiveIcon from '@material-ui/icons/Archive';

import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import TextFieldsIcon from '@material-ui/icons/TextFields';


import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";

import { Paper } from '@material-ui/core';
import Table_historique from './Table_historique';


export class Historique extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :[],
           
        }
      }


      
      componentDidMount(){
      
        console.log(localStorage.getItem('a'))
         axios.get("http://localhost:1919/api/client/historique/"+localStorage.getItem('id'))
         .then(response => {
          console.log(response)
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        
          this.setState({data: response.data})
    
      })
      .catch(error =>{
          console.log(error)
      })
    
      
       }
    
    render() {
        return (
            <div>
               <div align="center">

<Grid item xs={12} sm={3}>
  <Paper>
  <br></br>
 <div>
 <Typography  weight="bold" variant="h6" >
  <WorkIcon></WorkIcon> Historique Commande  :
      </Typography>
    </div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>

<Grid item xs={12}>
<Table_historique data={this.state.data}></Table_historique>
</Grid>   
            </div>
        )
    }
}

export default Historique
