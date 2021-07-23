import React, { Component } from 'react'

import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'

import Table from "./components/Table/Table";
import Table_facture from "./components/Table/Table_facture";
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import './stylee.css'
import TextFieldsIcon from '@material-ui/icons/TextFields';


import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import Tablee from './components/Table/Tablee';
import { Paper } from '@material-ui/core';


export class Commane_facture extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :[],
           
        }
      }


      
      componentDidMount(){
      
       
         axios.get("http://localhost:1919/api/imprimeur/dossier_a_facturer/"+localStorage.getItem('id'))
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
  <WorkIcon></WorkIcon> Dossier Prêt a facturer  :
      </Typography>
    </div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>

<Grid item xs={12}>
<Table_facture data={this.state.data}/>
</Grid>   
            </div>
        )
    }
}

export default Commane_facture
