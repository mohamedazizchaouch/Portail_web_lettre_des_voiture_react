import React, { Component } from 'react'
import axios from 'axios'

import DetailsIcon from '@material-ui/icons/Details';
import { Link } from 'react-router-dom';
import { TextareaAutosize, TextField } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";
import { Button } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import ButtonBase from '@material-ui/core/ButtonBase';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'

import TextFieldsIcon from '@material-ui/icons/TextFields';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
  } from "@material-ui/core";
  
  import { Paper } from '@material-ui/core';
  

export class Suiv_cmd extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :{},
         count:0,
           open : false,
           qun:0,
           
        }
      }
     
produit ={}
Fichier={}
date=""
handleChangequn = event => {

 this.setState({qun: event.target.value},()=>{
  console.log(this.state.qun)
  
   // this.setState({qun: event.target.value})
})
}
handleClickOpen = () => {
  this.setState({open: true},()=>{
    console.log(this.state.open)
    
      this.setState({open: true})
  })
};
 handleClose = () => {
  this.setState({open: false},()=>{
    console.log(this.state.open)
    
      this.setState({open: false})
  })
 }
 AjoutCommande=()=>{
   console.log(this.state.data.num_commande)
   axios.get("http://localhost:1919/api/commande/"+this.state.data.num_commande)
    .then(response => {
     console.log(response)
     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
     let cmd={
        date_commande : new Date(),
        etat_commande : 'Encours_BAT',
        frais_transport_achat_HT	: response.data.frais_transport_achat_HT,
        prix_achat_HT:response.data.prix_achat_HT,
        prix_vente_HT: response.data.prix_vente_HT,
        quntite: this.state.qun,
        ref_commercial:response.data.ref_commercial,
        text_a_repliquer:response.data.text_a_repliquer
     }

     axios.post(`http://localhost:1919/api/commande/${response.data.admin_vente.id}`,cmd)
  .then (rr => {
    //afecter client
    console.log("******************** fich")
    console.log(response.data)
   let fich={
      url_fichier:response.data.fichier_BAT.url_fichier
    }
    console.log(fich)
    
      console.log(rr)
      //afecter produit
      axios.get(`http://localhost:1919/api/commande/aff_p_to_c/${response.data.produit.id_produit}/${rr.data.num_commande}`)
      .then (r=> {
          console.log(r)
          axios.get(`http://localhost:1919/api/commande/aff_c_to_com/${rr.data.num_commande}/${localStorage.getItem('id')}`)
          .then (r=> {
              console.log(r)
              //affecter imprimeur 

              axios.get("http://localhost:1919/api/commande/aff_i_to_c/"+response.data.imprimeur.id+"/"+rr.data.num_commande)
              .then(rrr => {
               console.log(rrr)
              
               axios.post(`http://localhost:1919/api/fichier/${response.data.imprimeur.id}/${rr.data.num_commande}`,fich)
               .then (L => {
                   console.log(L)
                    //affiche  comm num 1 
                   // NotificationManager.success('Depot Fichier BAT', 'Fichier deposé avec succes', 3000);
                   
                   axios.get("http://localhost:1919/api/client/count/"+localStorage.getItem('id'))
                   .then(response => {
                     console.log("***************************************count")
                    console.log(response.data)
                    this.setState({count: response.data},()=>{
                     console.log(this.state.count)
                     
                       this.setState({count:response.data})
                   })
                    console.log(this.state.count)
                    console.log("***************************************count")
                  if (this.state.count !=0){
                   NotificationManager.info('Renouveler commande','vous ne pouvez pas renouveler une commande car deja vous avez une autre commande encours');
                  }
                 
                 })
                 .catch(error =>{
                    console.log(error)
                 })
               })
               .catch(error => {
                   console.log(error)
               });
           })
           .catch(error =>{
               console.log(error)
           })
             
          })
          .catch(error => {
              console.log(error)
          });
         
      })
      .catch(error => {
          console.log(error)
      });
  })
  .catch(error => {
      console.log(error)
  });

     console.log(cmd)
   //  this.setState({data: response.data})
   let c =response.data.admin_vente.id
   console.log(c+"aaaaaaaaaaaaaaaaaaaa")
   let z =response.data.imprimeur.id


 })
 .catch(error =>{
     console.log(error)
 })

 this.setState({open: false},()=>{
  console.log(this.state.open)
  
    this.setState({open: false})
})
    NotificationManager.success('Renouveler commande','Commande renouveler avec succes ');
 }
componentDidMount(){
  axios.get("http://localhost:1919/api/client/count/"+localStorage.getItem('id'))
  .then(response => {
    console.log("***************************************count")
   console.log(response.data)
   this.setState({count: response.data},()=>{
    console.log(this.state.count)
    
      this.setState({count:response.data})
  })
   console.log(this.state.count)
   console.log("***************************************count")
 if (this.state.count !=0){
  NotificationManager.info('Renouveler commande','vous ne pouvez pas renouveler une commande car deja vous avez une autre commande encours');
 }

})
.catch(error =>{
   console.log(error)
})
    axios.get("http://localhost:1919/api/client/last/"+localStorage.getItem('id'))
    .then(response => {
     console.log(response)
     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
   
     this.setState({data: response.data},()=>{
        console.log(this.state.data)
        this.produit=response.data.produit
        if(response.data.date_creation_dossier!= null){
            this.date=response.data.date_creation_dossier.substring(0,10)
            console.log(this.date)
           }
           this.setState({data:response.data})
     })

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
  <WorkIcon></WorkIcon> Suivi commande   :
      </Typography>
    </div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>
 <br></br> <br></br>
 <div  style={{  flexGrow: 1, }}>

 <Paper  style={{   margin: 'auto',
    maxWidth: 650, }}>
  <Grid container spacing={2}>
          <Grid item>
            <ButtonBase  style={{    width: 128,
    height: 128, }}>
              <img  style={{    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%', }} alt="complex" src="http://localhost/Images/lc" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Commande en cours  N°:  {this.state.data.num_commande}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Reference Produit : {this.produit.nom_produit}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 Quantité : {this.state.data.quntite}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Etat actuel : {this.state.data.etat_commande}
                </Typography>
              </Grid>
              <Grid item>
              <Button color="primary" size="small"
     onClick={this.handleClickOpen}
     disabled={ this.state.count==1}
  disableElevation startIcon={<DetailsIcon />} >
    Renouveler commande</Button>
    <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Renouveler commande'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Vous est sur de renouveler cette commande ?
          <br></br><br></br>
          <div align="center">
          <Typography >
              Quantité :
              </Typography>
              <TextField
    id="date"
    style={{  width: '200px' }}
    type="number"
    onChange={this.handleChangequn}
    value={this.state.qun}
  // defaultValue={this.state.cmd.quntite}
  
    InputLabelProps={{
      shrink: true,
    }}
  />
          </div>
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            retour
          </Button>
          <Button 
      onClick={this.AjoutCommande} 
          color="primary" autoFocus>
         Renouveler commande
          </Button>
        </DialogActions>
      </Dialog>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Date d’expédition estimé  </Typography>
              <div align="center">
              <Typography variant="body2" color="textSecondary">
              {this.date}
                </Typography>
              </div>
            
              
            </Grid>
          </Grid>
        </Grid>
</Paper>
<NotificationContainer></NotificationContainer>
             </div>

 


            </div>
        )
    }
}

export default Suiv_cmd
