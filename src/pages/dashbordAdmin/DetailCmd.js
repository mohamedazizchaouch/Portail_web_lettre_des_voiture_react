import React, { Component } from 'react'
import axios from 'axios';
import { Avatar } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import { Typography } from "../../components/Wrappers";

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table_element from './AjouterCommande/Table_element';
import Commentaire from './AjouterCommande/Commentaire'
import SaveIcon from '@material-ui/icons/Save';
import Popup from 'reactjs-popup'
import './AjouterCommande/stylee.css'

import { TextareaAutosize, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ThreeSixty } from '@material-ui/icons';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import EuroIcon from '@material-ui/icons/Euro';


export class DetailCmd extends Component {
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
            quntite:0

        }
    }
//modif quntite
datac={
  quntite:0
}

handlechang_qunt =  e=> {
  this.setState({quntite: e.target.value},()=>{
      this.datac.quntite=this.state.quntite
      console.log(this.state.quntite)
  });
 
}

modifq =()=>{
  axios.put(`http://localhost:1919/api/commande/modifqunt/${this.props.match.params.id}`,this.datac)
  .then(response => {

     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
   console.log(response)
   
   
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")


})
.catch(error =>{
   console.log(error)
})
}


//modif text a repliquer
data={
  text_a_repliquer:''
}
//modif text
handlechangtext_r =  e=> {
  this.setState({text_a_repliquer: e.target.value},()=>{
      this.data.text_a_repliquer=this.state.text_a_repliquer
      console.log(this.state.text_a_repliquer)
  });
 
}
modif =()=>{
  axios.put(`http://localhost:1919/api/commande/modift/${this.props.match.params.id}`,this.data)
   .then(response => {

      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
    console.log(response)
    
    
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")


})
.catch(error =>{
    console.log(error)
})

}


//popupp
    handleClickOpen = () => {
      this.setState({open:true})
     
    };

    handleClose = () => {
      this.setState({open:false})
      axios.get("http://localhost:1919//api/commande/"+this.props.match.params.id)
      .then(response => {
       console.log(response)
       
       this.setState({cmd: response.data},()=> {
          console.log(this.state.cmd)
          this.setState({cmd: response.data});
          this.client=response.data.client;
          this.produit=response.data.produit;
          
         // this.imprimeur=
          console.log(this.client)
       })
 
   })
   .catch(error =>{
       console.log(error)
   })
      }

    client={
       
    }
    produit={}
    imprimeur={}

    //ajouter commentaire

    Commentaire={
      text_commentaire:''
     }
    
     handlechangecommentaire = e=> {
      this.setState({text_commentaire: e.target.value},() => {
        this.Commentaire.text_commentaire=this.state.text_commentaire;
        console.log(this.Commentaire)
      });
     
    }
    ajoutcommentaire =()=>{
      axios.post(`http://localhost:1919/api/commentaire_com/ajouter_com_admin/${localStorage.getItem('id')}/${this.props.match.params.id}`,this.Commentaire)
      .then (response => {
          console.log(response)
           //affiche  comm
          axios.get(`http://localhost:1919/api/commentaire_com/${this.props.match.params.id}`)
         .then(response => {
          console.log(response)
          console.log(response.data[0].date_heure_commentaire)
         
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
    
     
      
    }
    



    /*************************************** */
   
//ajoutelement graphique
element_graph={
  url_element_graphique:''
}
handlechangeelement = e=> {
  this.setState({url_element_graphique: e.target.value},() => {
    this.element_graph.url_element_graphique=this.state.url_element_graphique;
    console.log(this.element_graph)
  });
 
}
ajouter_element=()=>{
  axios.post(`http://localhost:1919//api/element/${this.props.match.params.id}`,this.element_graph)
  .then (response => {
      console.log(response)
      //affiche element num1 
      axios.get(`http://localhost:1919/api/element/bycomm/${this.props.match.params.id}`)
      .then(response => {

        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
       console.log(response)
       this.setState({tab_elementt: response.data},()=>{
        this.setState({tab_element: response.data})
      });
       console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      
       
      // console.log(response.data[0].image)
  
    
  
   })
   .catch(error =>{
       console.log(error)
   })
   
      
  })
  .catch(error => {
      console.log(error)
  });
}



    componentDidMount(){
        console.log(this.props.match.params.id)

        axios.get("http://localhost:1919//api/commande/"+this.props.match.params.id)
        .then(response => {
         console.log(response)
         
         this.setState({cmd: response.data},()=> {
            console.log(this.state.cmd)
            this.setState({cmd: response.data});
            this.client=response.data.client;
            this.produit=response.data.produit;
            
           // this.imprimeur=
            console.log(this.client)
         })
   
     })
     .catch(error =>{
         console.log(error)
     })
     //getelement
     axios.get(`http://localhost:1919/api/element/bycomm/${this.props.match.params.id}`)
     .then(response => {

       console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log(response)
      this.setState({tab_element: response.data},()=>{
        this.setState({tab_element: response.data})
      });
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
     
      
     // console.log(response.data[0].image)
 
     //console.log(data)
 
  })
  .catch(error =>{
      console.log(error)
  })
  




//get commentaire
     axios.get("http://localhost:1919/api/commentaire_com/"+this.props.match.params.id)
     .then(response => {
      console.log(response)
      
      this.setState({commentaire: response.data},()=> {
          console.log("***************************commmentaire**********************")
         console.log(this.state.commentaire)
         console.log("***************************commmentaire**********************")
         this.setState({Commentaire: response.data});
       
      })

  })
  .catch(error =>{
      console.log(error)
  })
  

    }
    render() {
        return (
            <div>
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
                {this.state.cmd.quntite}  <Button variant="outlined" 
            style={{  width: '140px' }}
            onClick={this.handleClickOpen}
            >Modifer  </Button>
            <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Modification du quntité "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography size="sm">
              Quantité :
              </Typography>
              <TextField
    id="date"
    style={{  width: '200px' }}
    type="number"
    value={this.state.quntite}
   defaultValue={this.state.cmd.quntite}
   onChange={this.handlechang_qunt}
    InputLabelProps={{
      shrink: true,
    }}
  />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Annuler
          </Button>
          <Button 
        onClick={this.modifq} 
          color="primary" autoFocus>
            Modifier
          </Button>
        </DialogActions>
      </Dialog>
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
    style={{  width: '280px' }}
    type="date"
    defaultValue="2017-05-24"
   disabled={true}
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
<div className="flex1">
    <div className="flex-item1"><Typography size="sm">
                Upload element graphique  :
                  </Typography></div>
    <div className="flex-item1"> 
    <TextField
          
          id="filled-size-small"
        
          size="small"
          type="file"
          value={this.state.url_element_graphique}
          onChange={this.handlechangeelement}
         // value={this.state.url_element_graphique}
         // onChange={this.handlechangeelement}
        />
    
    </div>
</div>
          




          </div>
          <div className="flex-item6" style={{Height:'200px'}}>

          <Table_element  data={this.state.tab_element } 
          
       />
          </div>


            </div>
            <div align="center">


            <Popup 
    trigger={<Button variant="outlined" 
    style={{  width: '280px' }}
    
   
    
    >ajouter element graphique </Button>}
    onClose={this.ajouter_element}
    modal
    closeOnDocumentClick
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Element graphique  </div>
        <div className="content" align="center">
          {" "}
<br></br>
          <Typography size="sm" weight="bold"  variant="h4" color="success">
          Element graphique ajouter avec succes
                  </Typography>
                  <br></br>
    
        </div>
      
      </div>
    )}
  
  </Popup>
            </div>


            <hr></hr>
<br/>

            <div style={{  height:"80px" }}
>
              <div className="margt">  <Typography size="sm" >
                Text a repliquer  :
                  </Typography></div>
           

                  <TextareaAutosize className="marg"
  rowsMax={4}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
 // defaultValue={this.state.cmd.text_a_repliquer}
 value={this.state.text_a_repliquer}
 onChange={this.handlechangtext_r}
 
      style={{  width: '700px',height:'80px' }}
/>
<div className="margbutton"> <Button variant="outlined" 
            style={{  width: '150px' }}
            onClick={this.modif}
            >Modifer text </Button></div>


              </div>
              <hr></hr>

              <div>
<div align="center">
<Typography size="sm" weight="bold">
                    commentaires commande:
                  </Typography>
</div>
<div align="center">
<Commentaire data={this.state.commentaire}></Commentaire>



</div>
<div align="center">

<TextareaAutosize className="margg"
  rowsMax={4}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"
  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
      style={{  width: '700px',height:'80px' }}
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

        )
    }
}

export default DetailCmd
