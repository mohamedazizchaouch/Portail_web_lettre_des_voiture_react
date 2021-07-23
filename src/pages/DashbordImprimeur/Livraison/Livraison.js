import React, { Component } from 'react'
import EventIcon from '@material-ui/icons/Event';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "../../../components/Wrappers";
import ListAltIcon from '@material-ui/icons/ListAlt';
import axios from 'axios'
import Table_liv from './Table_liv'

export class Livraison extends Component {
    constructor() {
   
        super(...arguments);
        //this.data =extend([], this.dataa, null, true) 
      
    
      this.state ={
        data: []
      }
    }

    componentDidMount(){
        axios.get("http://localhost:1919/api/imprimeur/dossier_a_livrer/"+localStorage.getItem('id'))
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
            <div align="center">
                <Grid item xs={12} sm={3}>
          <Paper>
          <br></br>
         
          <Typography  weight="bold" variant="h6" >
          <ListAltIcon></ListAltIcon> Dossier prêt à livrer:
              </Typography>
              <br></br>
          </Paper>
        </Grid> 

        <br></br><br></br><br></br>
        <Table_liv data={this.state.data}></Table_liv>
            </div>
        )
    }
}

export default Livraison
