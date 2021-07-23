import React, { Component } from 'react'

import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'
import '../../../node_modules/react-notifications/lib/notifications.css';


import Table from "./components/Table/Table";
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import './stylee.css'
import TextFieldsIcon from '@material-ui/icons/TextFields';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
} from "@material-ui/core";
import Tablee from './components/Table/Tablee';
import { Paper } from '@material-ui/core';


export class Commane_encours extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :[],
           
        }
      }

      createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Fichier expoter avec succes', '');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };

      export_PDF=()=>{

              
        axios.get("http://localhost:1919/api/imprimeur/expoter_txt_comm_encours/"+localStorage.getItem('id'), {
          headers: this.headers,
          responseType: 'blob', // had to add this one here
      })
        .then(response => {
          const content = response.headers['content-type'];
        
         console.log("***********************PDF donneee")
       
         
   
     })
     .catch(error =>{
         console.log(error)
     })
      }
      componentDidMount(){
      
        console.log(localStorage.getItem('a'))
         axios.get("http://localhost:1919/api/imprimeur/dossier_encours/"+localStorage.getItem('id'))
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
  <WorkIcon></WorkIcon> Dossier en cours  :
      </Typography>
     <div className="flexb"> 
     <div className="flex_itemb">
     <a download href={"http://localhost:1919/api/imprimeur/expoter_txt_comm_encours/"+localStorage.getItem('id')}><Button color="primary" size="small"
     onClick={this.createNotification('success')}
  disableElevation startIcon={<PictureAsPdfIcon />} >Exporter PDF</Button></a>


     </div>

     <div className="flex_itemb">


     <a download href={"http://localhost:1919/api/imprimeur/aaaa/"+localStorage.getItem('id')}><Button color="primary" size="small"
     onClick={this.createNotification('success')}
   disableElevation startIcon={<TextFieldsIcon />} >Exporter TXT</Button></a>
     </div>
      

 </div></div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>

<Grid item xs={12}>
<Tablee data={this.state.data}/>
</Grid>   
<NotificationContainer/>
            </div>
        )
    }
}

export default Commane_encours
