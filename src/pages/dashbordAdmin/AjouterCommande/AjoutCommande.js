import { Avatar } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import React, { Component } from 'react'
import { Typography } from "../../../components/Wrappers";
import './stylee.css'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table_element from './Table_element';
import Commentaire from './Commentaire'
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios'
import Popup from 'reactjs-popup'

import { TextareaAutosize, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ThreeSixty } from '@material-ui/icons';

export class AjoutCommande extends Component {
  constructor(props) {
    super(props) 
  
    this.state = {
       data :[],
       data_imp:[],
       data_produit:[],
       id_produit: 0 ,
       id_imp:0,
       produit:[],
       element_graph:[],
       Commande_date:'',
       comm_prix:0,
       comm_qun:0,
       com_text:'',
       test:0,
       text_commentaire:'',
       data_commentaire:[],
       data_element:[],
       url_element_graphique:'',
      
      
       
    }
  }
  nb =0;
  com ={
   
    prix_vente_HT:'',
    quntite:'',
    text_a_repliquer:'',
    prix_achat_HT: '',
    frais_transport_achat_HT:''

 }
 aziz=0;
 //supprimer element

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
  axios.post(`http://localhost:1919//api/element/${this.state.test}`,this.element_graph)
  .then (response => {
      console.log(response)
      //affiche element num1 
      axios.get(`http://localhost:1919/api/element/bycomm/${this.state.test}`)
      .then(response => {

        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
       console.log(response)
       
       this.setState({data_element: response.data});
       console.log(this.state.data_element)
       console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      
       
      // console.log(response.data[0].image)
  
      console.log(data)
  
   })
   .catch(error =>{
       console.log(error)
   })
   
      
  })
  .catch(error => {
      console.log(error)
  });
}

 //ajoutt commentaire
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
  axios.post(`http://localhost:1919/api/commentaire_com/ajouter_com_admin/${localStorage.getItem('id')}/${this.state.test}`,this.Commentaire)
  .then (response => {
      console.log(response)
       //affiche  comm num 1 
      axios.get(`http://localhost:1919/api/commentaire_com/${this.state.test}`)
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

  ajout_commande= ()=>{
    this.aziz=this.aziz+1
    console.log(this.aziz)
   
    console.log( this.state.test)

   console.log(this.com)
  axios.post(`http://localhost:1919/api/commande/${localStorage.getItem('id')}`,this.com)
  .then (response => {
    //afecter client
   this.state.test=response.data.num_commande
   console.log(this.state.test)
      console.log(response)
      //afecter produit
      axios.get(`http://localhost:1919/api/commande/aff_p_to_c/${this.state.id_produit}/${response.data.num_commande}`)
      .then (r=> {
          console.log(r)
          axios.get(`http://localhost:1919/api/commande/aff_c_to_com/${response.data.num_commande}/${this.props.match.params.id}`)
          .then (r=> {
              console.log(r)
              //affecter imprimeur 

              axios.get("http://localhost:1919/api/commande/aff_i_to_c/"+this.state.id_imp+"/"+response.data.num_commande)
              .then(rr => {
               console.log(rr)
              
         
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
   console.log("test1")

 }

  handlechange = e=> {
    this.setState({Commande_date: e.target.value},() => {
      this.com.date_commande=this.state.Commande_date;
      
    });
   
}
handlechangep = e=> {
  this.setState({comm_prix: e.target.value},() => {
    this.com.prix_vente_HT=this.state.comm_prix;
   
  });
 
}
handlechangeq = e=> {
  this.setState({comm_qun: e.target.value},() => {
    this.com.quntite=this.state.comm_qun;
   
  });
 
}
handlechanget = e=> {
  this.setState({com_text: e.target.value},() => {
    this.com.text_a_repliquer=this.state.com_text;
    console.log(this.com)
    console.log(localStorage.getItem('id'))
  
  });
 
}
  
 
 

   componentDidMount(){

    axios.get(`http://localhost:1919/api/element/bycomm/${this.state.test}`)
    .then(response => {
     console.log(response)
     
    
     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    
     
    // console.log(response.data[0].image)
    this.setState({data_element: response.data})
    console.log(this.state.data_element[0].url_element_graphique)

 })
 .catch(error =>{
     console.log(error)
 })
      
   // console.log(localStorage.getItem('a'))
     axios.get(`http://localhost:1919/api/client/${this.props.match.params.id}`)
     .then(response => {
      console.log(response)
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log(response.data.code_client)
      
     // console.log(response.data[0].image)
     this.setState({data: response.data})

  })
  .catch(error =>{
      console.log(error)
  })
console.log("blandndndndndnndndndndnndndndn")
  console.log(this.state.data)

  axios.get("http://localhost:1919/api/imprimeur/")
  .then(response => {
   console.log(response)
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
   console.log(response.data)
   
  // console.log(response.data[0].image)
  this.setState({data_imp: response.data})

})
.catch(error =>{
   console.log(error)
})
console.log("********************************* list impr")
console.log(this.state.data_imp)
console.log("********************************* list impr")
console.log("blandndndndndnndndndndnndndndn")


  axios.get("http://localhost:1919/api/produit")
  .then(response => {
   console.log(response)
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
   console.log(response.data)
   
  // console.log(response.data[0].image)
  this.setState({data_produit: response.data})

})
.catch(error =>{
   console.log(error)
})

console.log("********************************* list impr")
console.log(this.state.data_produit)
console.log("********************************* list impr")
console.log("blandndndndndnndndndndnndndndn")



   }
   //get produit
   getproduit(){
    axios.get(`http://localhost:1919/api/produit/${this.state.id_produit}`)
    .then(response => {
     console.log(response)
     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
     console.log(response.data)
     
    // console.log(response.data[0].image)
    this.setState({produit: response.data},()=>{
      this.com.prix_achat_HT = this.state.produit.prix_unitaire_HT,
      this.com.frais_transport_achat_HT =this.state.produit.frais_port
    })
  
  })
  .catch(error =>{
     console.log(error)
  })
  console.log("***********************************_produit")
    console.log("id _ produit",this.state.produit)
    console.log("***********************************_produit")
   }



   //change produit
 handlechid_produit= (event)=>{
     console.log("ttttttttttttttttttttttttttttttttt")
     console.log(event.target.value)
     this.setState({
        
      id_produit:event.target.value
  }, () => {
    this.getproduit()
    this.setState({ id_produit:event.target.value })
  })
  console.log("***********************************id_produit")
  console.log("id _ produit",this.state.id_produit)
  console.log("***********************************id_produit")

//  this.aziz();
    
}
handlechid_desst= (event)=>{
  this.setState({
      
      id_imp:event.target.value
  }, () => {
   
    this.setState({ id_imp:event.target.value })
  })
  console.log("***********************************id_imp")
  console.log("id _ imp",this.state.id_imp)
  console.log("***********************************id_imp")

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
                {this.state.data.code_client}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.state.data.personne_a_contacter}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.num_Telephone}
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
                {this.state.data.adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.state.data.pays_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.state.data.gouvernorat}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.ville_adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.rue_adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.code_postal_adresse_facturation}
              </Typography>
            </div>
        
        </div>

        </fieldset>
</form>
<br/> <br/> <br/>

<div className="flex4">
    <div className="flex-item4"><br></br>
    <Typography size="sm">
            Ref article  :
              </Typography>
     
              <Typography size="sm">
              Désignation :
              </Typography>

    </div>
    <div className="flex-item4">
  
   
        <Select  onChange={this.handlechid_produit}
       //   labelId="demo-simple-select-helper-label"
         // id="demo-simple-select-helper"
         // value={age}
        //  onChange={handleChange}
        style={{  width: '190px' }}
        value={this.state.id_produit}
        >
          
          {this.state.data_produit.map(({ id_produit,nom_produit}) => (
           <MenuItem  value={id_produit}>{nom_produit}</MenuItem>
          ))}
        </Select>
     
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
         // value={age}
        //  onChange={handleChange}
        style={{  width: '190px' }}
       onChange={this.handlechid_desst}
        value={this.state.id_imp}
        >
          <MenuItem value="">
           
          </MenuItem>
          {this.state.data_imp.map(({ id,contact_imp }) => (
           <MenuItem value={id}>{contact_imp}</MenuItem>
          ))}
         
          
        </Select>
              
              

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
          value={this.state.data.email}
        style={{  width: '280px' }}
        disabled={true}
        />
      </FormControl>
     
      <TextField
    id="date"
    style={{  width: '280px' }}
    type="date"
    //defaultValue="2017-05-24"
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
               {this.state.data.adresse_livraison}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.pays_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.govvernorat_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.ville_adresse_facturation_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.rue_adresse_facturation_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.code_postal_adresse_liv}
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
                {this.state.data.raison_social}
              </Typography>
              
              <TextField id="standard-size-small" defaultValue="0" size="small"
              onChange={this.handlechangeq}
              value={this.state.comm_qun}
              />

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
          
          <Input
            id="standard-adornment-amount"
           // value={values.amount}
           // onChange={handleChange('amount')}
           value= {this.state.produit.prix_unitaire_HT}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            disabled={true}
          />
        </FormControl>
              
                  </div>
                  <div className="flex-item5" align ="center">
                  <br/> 
                      
                      <Typography size="sm">
                Frait de port HT :
                  </Typography>
                  <FormControl >
          
          <Input
            id="standard-adornment-amount"
           // value={values.amount}
           // onChange={handleChange('amount')}
           value= {this.state.produit.frais_port}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            disabled={true}
          />
        </FormControl>
                  
                  </div>




                  <div className="flex-item5" align="center">
                  <br/> 
                      
                      <Typography size="sm">
                Prix de vente HT :
                  </Typography>
                  <FormControl >
          
          <Input
            id="standard-adornment-amount"
           // value={values.amount}
           // onChange={handleChange('amount')}
           type="number"
           onChange={this.handlechangep}
           value={this.state.comm_prix}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
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
        />
    
    </div>
</div>
          




          </div>
          <div className="flex-item6">

          <Table_element  data={this.state.data_element} 
          
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
 value={this.state.com_text}
 onChange={this.handlechanget}
      style={{  width: '700px',height:'80px' }}
/>
<div className="margbutton"> <Button variant="outlined" 
style={{  width: '150px' }}

>Ajouter text </Button></div>


              </div>
              <hr></hr>

              <div>
<div align="center">
<Typography size="sm" weight="bold">
                    commentaires commande:
                  </Typography>
</div>
<div align="center">
<Commentaire data={this.state.data_commentaire}></Commentaire>


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
    onClick={this.ajoutcommentaire}
    disabled={this.aziz==0}
    
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

 
<div align="center" className="final">
<Popup 
    trigger={<Button variant="outlined" 
    style={{  width: '350px' }}
    startIcon={<SaveIcon />}
    color="primary"
    onClick={this.ajout_commande}
    >Créer la commande </Button>}
    onClose={this.ajout_commande}
    modal
    closeOnDocumentClick
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Commande  </div>
        <div className="content" align="center">
          {" "}
<br></br>
          <Typography size="sm" weight="bold"  variant="h4" color="success">
          commande ajouter avec succes
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

export default AjoutCommande
