import React, { Component } from 'react'
import axios from 'axios';
import { Avatar } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import { Typography } from "../../components/Wrappers";
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DetailsIcon from '@material-ui/icons/Details';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DoneIcon from '@material-ui/icons/Done';

import EqualizerIcon from '@material-ui/icons/Equalizer';



import SaveIcon from '@material-ui/icons/Save';
import Popup from 'reactjs-popup'
import '../dashbordAdmin/AjouterCommande/stylee.css'

import { TextareaAutosize, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ThreeSixty } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import EuroIcon from '@material-ui/icons/Euro';
import Slider_elements from './Slider_elements';
import Commentaire from './Commentaire';


export class Detail_cmd_imp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cmd:{},
            commentaire:[],
            url_element_graphique:'',
            tab_element:[],
            text_commentaire:'',
            open: false,
            text_a_repliquer:'',
            quntite:0,
            data_commentaire:[],
            date_creation:new Date(),

        }
    }
    client={
       
    }
    produit={}
    imprimeur={}











    componentDidMount(){

      
      
        console.log("***************************************id")
        console.log(this.props.match.params.id)
 console.log("***************************************id")
        axios.get("http://localhost:1919//api/commande/"+this.props.match.params.id)
        .then(response => {
         console.log(response)
         
         
         this.setState({cmd: response.data},()=> {
            console.log(this.state.cmd)
            this.setState({cmd: response.data});
            this.client=response.data.client;
            this.produit=response.data.produit;
            if(this.state.cmd.date_creation_dossier!=null){
              NotificationManager.info('vous avez deja ajouter une date vous pouvez deposer le fichier bat de cette commande','Date estimé de la commande ');
            }
           // this.imprimeur=
            console.log(this.client)
         })
   
     })
     .catch(error =>{
         console.log(error)
     })
     //getelement
     




//get commentaire
axios.get(`http://localhost:1919/api/commentaire_com/${this.props.match.params.id}`)
.then(response => {
 console.log(response)
 console.log(response.data[0].date_heure_commentaire)

 console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")

 
// console.log(response.data[0].image)
this.setState({data_commentaire: response.data})

})
.catch(error =>{
 console.log(error)
})
  

    }


    //ajout commentaire
    handlechangecommentaire = e=> {
      this.setState({text_commentaire: e.target.value},() => {
        this.Commentaire.text_commentaire=this.state.text_commentaire;
        console.log(this.Commentaire)
      });
     
    }
    Commentaire={
      text_commentaire:''
     }
    
    ajoutcommentaire =()=>{
      axios.post(`http://localhost:1919/api/commentaire_com/ajouter_com_imp/${localStorage.getItem('id')}/${this.props.match.params.id}`,this.Commentaire)
      .then (response => {
          console.log(response)
           //affiche  comm num 1 
          axios.get(`http://localhost:1919/api/commentaire_com/${this.props.match.params.id}`)
         .then(response => {
          console.log(response)
          console.log(response.data[0].date_heure_commentaire)
         
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
         
          
         // console.log(response.data[0].image)
         this.setState({data_commentaire: response.data})
    
      })
      .catch(error =>{
          console.log(error)
      })
    
      })
      .catch(error => {
          console.log(error)
      });
    
     
      
    }
    Commande={
      date_creation_dossier: new Date()
     }
    handlechangedate = e=> {
      this.setState({date_creation: e.target.value},() => {
       this.Commande.date_creation_dossier=this.state.date_creation;
        console.log(this.Commande)
      });
     
    }
    accepter_cmd =()=>{
      axios.put(`http://localhost:1919/api/commande/modifdate/${this.props.match.params.id}`,this.Commande)
  .then(response => {

     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
   console.log(response)
   
   NotificationManager.success('La commande a été accepter avec succes vous pouvez deposer le fichier bat', 'Félicitation commande accepter');
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")


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
          <DetailsIcon></DetailsIcon> Details commande :
              </Typography>
              <br></br>
              <div align="center">
             
            <Button color="primary" size="small"
            //  disabled={etat==false}
            disabled={this.state.cmd.date_creation_dossier!=null}
              onClick={this.accepter_cmd}
  //  component={Link}
 //   to={"/app/clientdtail/" + id}
  disableElevation startIcon={<DoneIcon />} >
  Accepter Commande
</Button>
</div>
              <br></br>
          </Paper>
        </Grid> 
              </div>
              <br/><br/><br/>
                <div className="flex">
<div className="flex-item"> 
<MuiThemeProvider>
    
    <div className="flex1">
    <Avatar src="http://localhost/Images/lc" style={{ height: '70px', width: '70px' }} className="flex-item1"></Avatar>
    <div className="flex-item1">
        <div className="flex2">
            <div className="flex-item2">
            <Typography size="sm">
               Code Client :
              </Typography>

              <Typography size="sm">
               Personne a contacter :
              </Typography>

              <Typography size="sm">
               Telephone :
              </Typography>

            </div>
            <div className="flex-item2">
            <Typography size="sm" weight="bold">
                {this.client.code_client}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.client.personne_a_contacter}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.num_Telephone}
              </Typography>
            </div>
        
        </div>
   


    </div>


    </div>
    


</MuiThemeProvider>


<div className="flex3">
    <div className="flex-item3">

    <form>
        <fieldset>

<legend><Typography weight="bold"  size="md">
                FACTURATION
              </Typography></legend>

              <div className="flex2">
            <div className="flex-item2">
            <Typography size="sm">
            Adresse facturation :
              </Typography>
              <Typography size="sm">
              Pays :
              </Typography>
              <Typography size="sm">
              Gouvernorat :
              </Typography>
              <Typography size="sm">
              Ville:
              </Typography>
              <Typography size="sm">
              Rue :
              </Typography>
              <Typography size="sm">
              Code postal:
              </Typography>
            </div>
            <div className="flex-item2">
            <Typography size="sm" weight="bold">
                {this.client.adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.client.pays_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.client.gouvernorat}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.ville_adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.rue_adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.code_postal_adresse_facturation}
              </Typography>
            </div>
        
        </div>

        </fieldset>
</form>
<br/> <br/> <br/>

<div className="flex4">
    <div className="flex-item4">
    <Typography size="sm">
                 Ref article  :
              </Typography>
     
              <Typography size="sm">
              Désignation :
              </Typography>

    </div>
    <div className="flex-item4">
  
   
        
     
    <Typography size="sm" weight="bold">
              {this.produit.nom_produit}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.code_postal_adresse_facturation}
              </Typography>
              
              

    </div>
</div>
    </div>
    
</div>


</div>



<div className="flex-item"> 
<MuiThemeProvider>
    
    <div className="flex1">
        <div className="flex-item1"></div>
    
    <div className="flex-item1">
        <div className="flex2">
            <div className="flex-item2">
                <br></br>
            <Typography size="sm">
               Email :
              </Typography>

              <Typography size="sm">
               Date du commande
              </Typography>

             

            </div>
            <div className="flex-item2">
            <FormControl >
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
            
          }
         // placeholder="mohamed aziz chaouch"
          value={this.client.email}
        style={{  width: '280px' }}
        disabled={true}
        />
      </FormControl>
     
      <TextField
    id="date"
    style={{  width: '280px' }}
    type="date"
    defaultValue={this.state.cmd.date_commande}
  //  onChange={this.handlechange}
   // value={this.state.Commande_date} autooo 

    InputLabelProps={{
      shrink: true,
    }}
  />
             
            </div>
        
        </div>
   


    </div>


    </div>
    


</MuiThemeProvider>

<div className="flex3">
    <div className="flex-item3">

    <form>
        <fieldset>

<legend><Typography weight="bold"  size="md">
                LIVRAISON
              </Typography></legend>

              <div className="flex2">
            <div className="flex-item2">
            <Typography size="sm">
            Adresse livraison :
              </Typography>
              <Typography size="sm">
              Pays :
              </Typography>
              <Typography size="sm">
              Gouvernorat :
              </Typography>
              <Typography size="sm">
              Ville:
              </Typography>
              <Typography size="sm">
              Rue :
              </Typography>
              <Typography size="sm">
              Code postal:
              </Typography>
            </div>
            <div className="flex-item2">
            <Typography size="sm" weight="bold">
               {this.client.adresse_livraison}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.pays_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.govvernorat_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.ville_adresse_facturation_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.rue_adresse_facturation_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.client.code_postal_adresse_liv}
              </Typography>
            </div>
        
        </div>

        </fieldset>
</form>
<br/> <br/> <br/>

<div className="flex4">
    <div className="flex-item4">
    <Typography size="sm">
            Raison social :
              </Typography>
        
              <Typography size="sm">
              Quantité :
              </Typography>

    </div>
    <div className="flex-item4">
    <Typography size="sm" weight="bold">
                {this.client.raison_social}
              </Typography>
              
               <Typography size="sm" weight="bold">
                {this.state.cmd.quntite}  
    
              </Typography>

    </div>
</div>






    </div>
    
</div>


</div>


                </div>
                
                <hr></hr>

                <div className="flex5">
                  <div className="flex-item5" align="center">
                      <br/> 
                      
                  <Typography size="sm">
            Prix Achat HT :
              </Typography>
              <FormControl >
          
              <Typography size="sm" weight="bold">
                {this.state.cmd.prix_achat_HT} DT
              </Typography>
        </FormControl>
              
                  </div>
                  <div className="flex-item5" align ="center">
                  <br/> 
                      
                      <Typography size="sm">
                Frait de port HT :
                  </Typography>
                  <FormControl >
          
                  <Typography size="sm" weight="bold">
                {this.state.cmd.frais_transport_achat_HT} DT
              </Typography>
        </FormControl>
                  
                  </div>




                  <div className="flex-item5" align="center">
                  <br/> 
                      
                      <Typography size="sm">
                Prix de vente HT :
                  </Typography>
                  <FormControl >
          
                  <Typography size="sm" weight="bold">
                {this.state.cmd.prix_vente_HT} DT
              </Typography>
        </FormControl>
                  </div>
                  <div className="flex-item5" align="center">
 <br/>
                  <Typography size="sm">
                Date creation du dossier  :
                  </Typography>

                  <TextField
    id="date"
    style={{  width: '200px' }}
    type="date"
   // defaultValue="2017-05-24"
    onChange={this.handlechangedate}
    value={this.state.date_creation}
   disabled={false}
    InputLabelProps={{
      shrink: true,
    }}
  />

                  </div>

                </div>
                <hr></hr>
 
            <div className="flex6">
          <div className="flex-item6">
              <br/>

                  <Typography size="sm" weight="bold">
                  
                    Element graphique :
                  </Typography>
    
    <Slider_elements 
         id_cmd={this.props.match.params.id}
        ></Slider_elements>
    
    

          




          </div>
          <div className="flex-item6">
          <br/>
          <Typography size="sm" weight="bold">
                  
                  Commentaire  :
                </Typography>
                <Commentaire data={this.state.data_commentaire}></Commentaire>
  
                <div align="center">

<TextareaAutosize className="margg"
  rowsMax={4}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
      style={{  width: '400px',height:'80px' }}
      value={this.state.text_commentaire}
      onChange={this.handlechangecommentaire}
/>


</div>
<div align="center" className="ff">
<Popup 
    trigger={<Button variant="outlined" 
    style={{  width: '250px' }}
    //onClick={this.ajoutcommentaire}
    //disabled={this.aziz==0}
    
    >Envoyer commentaire </Button>}
    onClose={this.ajoutcommentaire}
    modal
    closeOnDocumentClick
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Commentaire  </div>
        <div className="content" align="center">
          {" "}
<br></br>
          <Typography size="sm" weight="bold"  variant="h4" color="success">
          commentaire ajouter avec succes
                  </Typography>
                  <br></br>
    
        </div>
      
      </div>
    )}
  
  </Popup>

</div>
          </div>


            </div>
         

            

           
              <div>




 

              </div>

              <NotificationContainer/>
        </div>

        )
    }
}

export default Detail_cmd_imp
