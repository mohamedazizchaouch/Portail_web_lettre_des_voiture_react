import React, { Component } from 'react'
import Grid_cmd from './Grid_cmd'
import axios from 'axios'
import '../../../../node_modules/react-notifications/lib/notifications.css';
import DetailsIcon from '@material-ui/icons/Details';
import { Link } from 'react-router-dom';
import { TextareaAutosize, TextField } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../../components/Wrappers";
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
import Commentaire from './Commentaire';
import Element from './Element';
import './stylee.css'


export class Commande_encours extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :{},
           commentaire:[],
           text_commentaire:'',
           open : false,
           refuse:0,
           count:0
        }
      }
     
produit ={}
Fichier={}
date=""
nbr =0

//refuser
refuse=()=>{
  this.setState({refuse: 1},()=>{
    console.log(this.state.refuse)
    
      this.setState({refuse:1})
  })

  axios.get(`http://localhost:1919/api/client//refuser_bat/${this.state.data.num_commande}`)
  .then(response => {
   console.log(response)
 
   axios.get("http://localhost:1919/api/client/com_encours/"+localStorage.getItem('id'))
   .then(response => {
     this.setState({data: response.data},()=>{
       console.log(this.state.data)
       this.produit=response.data.produit
       this.Fichier=response.data.fichier_BAT
       console.log(this.Fichier)
       
       this.date=response.data.date_creation_dossier.substring(0,10)
         this.setState({data:response.data})
     })
    console.log(response)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  
   
console.log("***************************data")
console.log(this.state.data.date_creation_dossier.substring(0,12))
//this.date=this.state.data.date_creation_dossier.substring(0,10)
console.log(this.date)
console.log(this.produit.nom_produit)
console.log("***************************data")
})
.catch(error =>{
    console.log(error)
})
  

})
.catch(error =>{
   console.log(error)
})
  NotificationManager.error('Attention', 'vous devez laisser un commentaire pour expliquer les motifs de refus', 5000, () => {
    alert('callback');
  });
}

accepter=()=>{
  this.setState({refuse: 1},()=>{
    console.log(this.state.refuse)
    
      this.setState({refuse:1})
  })

  axios.get(`http://localhost:1919/api/client/accepter_bat/${this.state.data.num_commande}`)
  .then(response => {
   console.log(response)
 
   axios.get("http://localhost:1919/api/client/com_encours/"+localStorage.getItem('id'))
   .then(response => {
     this.setState({data: response.data},()=>{
       console.log(this.state.data)
       this.produit=response.data.produit
       this.Fichier=response.data.fichier_BAT
       console.log(this.Fichier)
       
      // this.date=response.data.date_creation_dossier.substring(0,10)
         this.setState({data:response.data})
     })
    console.log(response)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  
   
console.log("***************************data")
console.log(this.state.data.date_creation_dossier.substring(0,12))
//this.date=this.state.data.date_creation_dossier.substring(0,10)
console.log(this.date)
console.log(this.produit.nom_produit)
console.log("***************************data")
})
.catch(error =>{
    console.log(error)
})
  

})
.catch(error =>{
   console.log(error)
})
NotificationManager.success('Felicitation', 'le fichier BAT commande N°: '+this.state.data.num_commande+' a été validé avec succes');
}

plusdetail=()=>{
  this.setState({nbr: 1},()=>{
    console.log(this.state.nbr)
    
      this.setState({nbr:1})
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
//ajouter commentaire 
Commentaire ={
  text_commentaire:''
}
handlechangecommentaire = e=> {
  this.setState({text_commentaire: e.target.value},() => {
    this.Commentaire.text_commentaire=this.state.text_commentaire;
    console.log(this.Commentaire)
  });}

  ajoutcommentaire=()=>{
    axios.post(`http://localhost:1919/api/comm_bat/ajout_comm_client/${localStorage.getItem('id')}/${this.Fichier.id}`,this.Commentaire)
.then (response => {
    console.log(response)
     //affiche  comm num 1 
   
     axios.get(`http://localhost:1919/api/comm_bat/${this.Fichier.id}`)
     .then(response => {
      console.log(response)
    //  console.log(response.data[0].date_heure_commentaire)
     
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
     
      
     // console.log(response.data[0].image)
     this.setState({commentaire: response.data})

  })
  .catch(error =>{
      console.log(error)
  })

})
.catch(error => {
    console.log(error)
});
this.setState({open: false},()=>{
  console.log(this.state.open)
  
    this.setState({open: false})
})

}


      componentDidMount(){
          console.log(localStorage.getItem('id'))
          axios.get("http://localhost:1919/api/client/count/"+localStorage.getItem('id'))
          .then(response => {
            console.log("***************************************count")
           console.log(response.data)
           this.setState({count: response.data},()=>{
            console.log(this.state.count)
            if (this.state.count==1){
              axios.get("http://localhost:1919/api/client/com_encours/"+localStorage.getItem('id'))
              .then(response => {
                this.setState({data: response.data},()=>{
                  console.log(this.state.data)
                  this.produit=response.data.produit
                  this.Fichier=response.data.fichier_BAT
                  console.log(this.Fichier)
                  axios.get("http://localhost:1919/api/comm_bat/"+this.Fichier.id)
                  .then(response => {
                   console.log(response)
                 //  console.log(response.data[0].date_heure_commentaire)
                  
                   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
                  
                   
                  // console.log(response.data[0].image)
                  this.setState({commentaire: response.data})
                  console.log(this.state.commentaire)
             
               })
               .catch(error =>{
                   console.log(error)
               })
               if(response.data.date_creation_dossier!= null){
                this.date=response.data.date_creation_dossier.substring(0,10)
               }
                 
                    this.setState({data:response.data})
                })
               console.log(response)
               console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
             
              
            console.log("***************************data")
            console.log(this.state.data.date_creation_dossier.substring(0,12))
            //this.date=this.state.data.date_creation_dossier.substring(0,10)
            console.log(this.date)
            console.log(this.produit.nom_produit)
            console.log("***************************data")
            })
            .catch(error =>{
               console.log(error)
            })
            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
            console.log(this.Fichier)
            //get commentaire 
            
            }
              this.setState({count:response.data})
          })
        
           console.log(this.state.count)
           console.log("***************************************count")
         if (this.state.count ==0){
          NotificationManager.info('Commande en cours ','il n y a pas aucune commande en cours ');
         }
      
       })
       .catch(error =>{
           console.log(error)
       })

         
     
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
    </div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>
<br></br>
{this.state.count===0 ?(
  <div align="center">
    <img src="http://localhost/Images/404"></img>
  </div>
):
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
     onClick={this.plusdetail}
     disabled={this.state.nbr===1 || this.date===""}
  disableElevation startIcon={<DetailsIcon />} >
    Consulter Fichier BAT</Button>
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

             </div>

}
         
             <br></br><br></br><br></br>
             {this.state.nbr===1 ?(

               <div align="center">
                 <div className="flex"> 
  <div className="flex-item">
    
  <Paper style={{    margin: 'auto',
    maxWidth: 450, }}>
                 <Element data={this.Fichier}></Element>
                 <br></br>
                 <Button color="primary" size="small"
     onClick={this.accepter}
     disabled={this.state.data.etat_commande==="Bat_refuser"||this.state.data.etat_commande==="BAT_accepter"}
  disableElevation startIcon={<AssignmentTurnedInIcon  />} >
   Accepter Fichier</Button>

   <Button color="primary" size="small"
     onClick={this.refuse}
   disabled={this.state.data.etat_commande==="Bat_refuser"||this.state.data.etat_commande==="BAT_accepter"}
  disableElevation startIcon={<AssignmentLateIcon />} >
   Refuser Fichier</Button>

                 </Paper>
  </div>
  <div className="flex-item">
  <Paper style={{    margin: 'auto',
    maxWidth: 650, }}>

<Typography size="sm" weight="bold">
                  
                  Commentaire  :
                </Typography>
                    <Commentaire data={this.state.commentaire}></Commentaire>

                    <TextareaAutosize className="margg"
  rowsMax={4}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  
      style={{  width: '400px',height:'80px' }}
     value={this.state.text_commentaire}
      onChange={this.handlechangecommentaire}
/> <br></br>
<Button color="primary" size="small"
     onClick={this.handleClickOpen}
     disabled={this.state.refuse===0||this.state.data.etat_commande==="BAT_accepter"}
  disableElevation startIcon={<CommentIcon  />} >
   Ajouter commentaire</Button>

   <Dialog
        open={this.state.open}
        onClose={()=>this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Suppression"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            vous etes sur d'ajouter le commentaire ? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Annuler
          </Button>
          <Button 
       onClick={this.ajoutcommentaire} 
          color="primary" autoFocus>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
  
                 </Paper>
  </div>
</div>
                 <br></br><br></br>
                
              
               </div>
             ):
             <div></div>
            }
            <NotificationContainer></NotificationContainer>
            </div>
        )
    }
}

export default Commande_encours
