import React, { Component } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'

import Table from "./components/Table/Table";
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";
import { Button } from '@material-ui/core';
import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
  } from "@material-ui/core";
  
  import { Paper } from '@material-ui/core';
import Table_clts from './components/Table/Table_clts';

export class ListeClient extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :[],
           
        }
      }
      componentDidMount(){
        axios.get("http://localhost:1919/api/imprimeur/clts/"+localStorage.getItem('id'))
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
  <PersonIcon></PersonIcon> Liste des clients :
      </Typography>
     </div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>
<Grid item xs={12}>
<Table_clts data={this.state.data}/>
</Grid>   

            </div>
        )
    }
}

export default ListeClient
