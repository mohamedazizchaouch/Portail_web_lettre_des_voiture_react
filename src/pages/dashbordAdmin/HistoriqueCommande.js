import React, { Component } from 'react'


import PageTitle from "../../components/PageTitle";
import axios from 'axios'

import Table from "./components/Table/Table";


import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";

export class HistoriqueCommande extends Component {
  constructor(props) {
    super(props) 
  
    this.state = {
       data :[],
       
    }
  }
  componentDidMount(){
      
    console.log(localStorage.getItem('a'))
     axios.get("http://localhost:1919/api/commande/historique")
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
<PageTitle title="Historiques des commandes " />
<Grid item xs={12}>
<Table data={this.state.data}/>
        </Grid>

      </div>
    )



  }
}
export default HistoriqueCommande