import React, { Component } from 'react'
import './style.css'
import DeleteIcon from '@material-ui/icons/Delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UpdateIcon from '@material-ui/icons/Update';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import TextField from 'material-ui/TextField'

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


export class change_password extends Component {
  regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  constructor(props) {
    super(props) 
 
    this.state = {
       newmdp :'',
       confirmdp:''
      
       
    }
  }
  handleChangemdp = (event) => {
    this.setState({newmdp:event.target.value},()=>{
      console.log(this.state.newmdp)
    })
  };

  handleChangemdpconfirm = (event) => {
    this.setState({confirmdp:event.target.value},()=>{
      console.log(this.state.confirmdp)
    })
  };
  modif=()=>{
    axios.get('http://localhost:1919/api/utilisateur/mdp/'+localStorage.getItem('id')+'/'+this.state.newmdp)
          .then (response => {
              console.log("*******************************data to add")
              console.log(response)
              
          })
          .catch(error => {
              console.log(error)
          });
         
          
          NotificationManager.success('Votre mot de passe a été modifier avec sucess', 'Modification du mot de passe ');
  }
  componentDidMount(){
    console.log("azizzzzzzzzzzzzzzzzzzzzzzzzzzz")
    console.log(localStorage.getItem('id'))
  }
    render() {
        return (
            <div>
                  <React.Fragment >
                    <MuiThemeProvider>
                   <div align="center">

<Grid item xs={12} sm={3}>
  <Paper>
  <br></br>
 <div>
 <Typography  weight="bold" variant="h6" >
 <VpnKeyIcon></VpnKeyIcon> Modifier mot de passe   :
      </Typography>

 </div>
 
                 
      <br></br>
  </Paper >
</Grid> 
<br></br><br></br>
</div>
<div align="center">
    <Paper style={{ width: 600}}>
<div align="center">
<TextField
                hintText="entrer le noveau mot de passe "
                floatingLabelText="mot de passe"
                onChange={this.handleChangemdp}
               Value={this.state.newmdp}
                type="password"
                />
                <br></br>
                 {(!this.regex.test(this.state.newmdp))&&(this.state.newmdp.length > 0 )? (
                   <div>
                      <span style={{ color: "red" , fontSize :10, }}> Contenir au moins 8 caractères </span><br></br>
                  <span style={{ color: "red" , fontSize :10, }}>contiennent au moins un numéro</span><br></br>
                  <span style={{ color: "red" , fontSize :10, }}>contiennent au moins un caractère de base</span><br></br>
                  <span style={{ color: "red" , fontSize :10, }}>Icontiennent au moins un caractère majuscule </span>
                   </div>
                 
                  

                ) 
                : (
                  <span></span>
                )}
</div>
    <div align="center"> <TextField
                hintText="confirmer mot de passe "
                floatingLabelText="mot de passe"
                onChange={this.handleChangemdpconfirm}
               Value={this.state.confirmdp}
                type="password"
                />
                 <br></br>
                 {(this.state.newmdp!= this.state.confirmdp ) || this.state.confirmdp!=''? (
                   <div>
                      <span style={{ color: "red" , fontSize :10, }}> votre mot de passe est incorecct </span>
                  
                   </div>
                 
                  

                ) 
                : (
                  <span></span>
                )}</div>

                <br></br>

                <Button color="primary" size="small"
         
         disabled={this.state.newmdp!= this.state.confirmdp || this.state.newmdp=='' || this.state.confirmdp==''}
onClick={this.modif}
disableElevation startIcon={<UpdateIcon  />} >
Changer mot de passe
</Button>
<br></br>     
    </Paper>

</div>
</MuiThemeProvider>
</React.Fragment>
<NotificationContainer/>
            </div>
        )
    }
}

export default change_password
