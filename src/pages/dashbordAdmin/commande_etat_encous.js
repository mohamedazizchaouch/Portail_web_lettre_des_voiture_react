import React, { Component } from 'react'


import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'

import Table from "./components/Table/Table";
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";


import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import Tablee from './components/Table/Tablee';
import { Paper } from '@material-ui/core';

export class commande_etat_encours extends Component {
  constructor(props) {
    super(props) 
  
    this.state = {
       data :[],
       
    }
  }
  componentDidMount(){
      
    console.log(localStorage.getItem('a'))
     axios.get("http://localhost:1919/api/commande")
     .then(response => {
      console.log(response)
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log(response.data[0].client.code_client)
     // console.log(response.data[0].image)
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
         
          <Typography  weight="bold" variant="h6" >
          <WorkIcon></WorkIcon> Liste des  Commandes   :
              </Typography>
              <br></br>
          </Paper>
        </Grid> 
        <br></br><br></br>
        </div>

<Grid item xs={12}>
<Tablee data={this.state.data}/>
        </Grid>

      </div>
    )



  }
}
export default commande_etat_encours