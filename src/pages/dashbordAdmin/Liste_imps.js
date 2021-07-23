import React, { Component } from 'react'
import './style.css'
import DeleteIcon from '@material-ui/icons/Delete';
import BlockIcon from '@material-ui/icons/Block';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
  } from "@material-ui/core";
  import Widget from "../../components/Widget/Widget"
  import PageTitle from "../../components/PageTitle";
  import { Typography } from "../../components/Wrappers";
  import MUIDataTable from "mui-datatables";
  //import { Button } from "../../components/Wrappers";
  import { Button } from '@material-ui/core';
  import 'reactjs-popup/dist/index.css';
  import SaveIcon from '@material-ui/icons/Save';
  import WorkIcon from '@material-ui/icons/Work';
  import { Paper } from '@material-ui/core';
  import PersonIcon from '@material-ui/icons/Person';
  import ButtonBase from '@material-ui/core/ButtonBase';
  import DetailsIcon from '@material-ui/icons/Details';

import axios from 'axios';
import Table from "./components/Table/Table";
import { CenterFocusStrong } from '@material-ui/icons';
import Popup from 'reactjs-popup';
import FormClient from './FormClient';
import ClientForm from './ajout_client/ClientForm';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import Ajout_imp from './Ajout_imp';


export class Liste_imps extends Component {
    constructor(props) {
        super(props) 
     
        this.state = {
           data :[],
          
           
        }
      }
      componentDidMount(){
        axios.get("http://localhost:1919/api/imprimeur")
        .then(response => {
         console.log(response)
         
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
  Liste des imprimeurs   :
      </Typography>
      <div >   <Popup 
    trigger={<Button color="primary" 
  variant="contained" disableElevation startIcon={<PersonAddIcon />} >Ajouter imprimeur</Button>}
    modal
    closeOnDocumentClick
    onClose={this.componentDidMount}
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> compte Imprimeur  </div>
        <div className="content">
          {" "}
    <Ajout_imp></Ajout_imp>
        </div>
      
      </div>
    )}
  
  </Popup></div>
 </div>
 
                 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>

{this.state.data.map(({ id, contact_imp,email,login ,num_Fax,num_Telephone,etat}) => (

<div  style={{  flexGrow: 1, }}>
<Paper  style={{   margin: 'auto',
    maxWidth: 750, }}>
  <Grid container spacing={2}>
          <Grid item>
            <ButtonBase  style={{    width: 128,
    height: 128, }}>
              <img  style={{    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%', }} alt="complex" src="http://localhost/Images/i1" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                   Societé  :   {contact_imp}*
                </Typography>
                <Typography variant="body2" gutterBottom>
                    E-mail :  {email} 
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Numero fax:   {num_Fax}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Numero telephone : {num_Telephone}
                </Typography>
              </Grid>
              <Grid item>
              <Button color="primary" size="small"
    component={Link}
    to={"/app/clientdtail/" + id}
  disableElevation startIcon={<DeleteIcon />} >
  Supprimer
</Button>
              </Grid>
            </Grid>
            <Grid item>
              
            <Typography variant="body2" gutterBottom>état imprimeur </Typography>
             <div align="center">  {etat==false ? (
              <BlockIcon></BlockIcon>
             ):<CheckCircleOutlineIcon ></CheckCircleOutlineIcon>}</div>
            </Grid>
          </Grid>
        </Grid>
</Paper>
<br></br><br></br>
             </div>

        
            
           
        ))}
        

            </div>
        )
    }
}

export default Liste_imps
