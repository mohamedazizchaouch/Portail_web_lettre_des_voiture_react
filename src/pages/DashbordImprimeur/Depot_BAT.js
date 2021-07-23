import React, { Component } from 'react'
import PersonIcon from '@material-ui/icons/Person';
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from 'axios'
import Popup from 'reactjs-popup'
import Table from "./components/Table/Table";
import WorkIcon from '@material-ui/icons/Work';
import { Typography } from "../../components/Wrappers";
import { Button } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import { TextareaAutosize, TextField } from '@material-ui/core';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
  } from "@material-ui/core";
  
  import { Paper } from '@material-ui/core';
  import '../dashbordAdmin/AjouterCommande/stylee.css'
import { Slider_BAT } from './Slider_BAT';
import Commentaire_BAT from './Commentaire_BAT';

export class Depot_BAT extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            commentaire:[],
            url_fichier_bat:'',
           data_bat:[],
           text_commentaire:'',
           id_f:0,
           etat:""

        }
    }

    Commentaire ={
        text_commentaire:''
    }
    handlechangecommentaire = e=> {
        this.setState({text_commentaire: e.target.value},() => {
          this.Commentaire.text_commentaire=this.state.text_commentaire;
          console.log(this.Commentaire)
        });}

        ajoutcommentaire=()=>{
            axios.post(`http://localhost:1919/api/comm_bat/ajout_comm_imprimeur/${localStorage.getItem('id')}/${this.state.id_f}`,this.Commentaire)
        .then (response => {
            console.log(response)
             //affiche  comm num 1 
           
             axios.get(`http://localhost:1919/api/comm_bat/${this.state.id_f}`)
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
      
       
      }
      
      delete =()=>{
        console.log(this.props.match.params.id)
        console.log(localStorage.getItem('id'))
        console.log(this.state.id_f)
        axios.delete(`http://localhost:1919//api/comm_bat/${this.state.id_f}`)
        .then (response => {
            console.log(response)
           
            
           

             axios.delete(`http://localhost:1919/api/fichier/${this.state.id_f}/${this.props.match.params.id}/${localStorage.getItem('id')}`)
        .then(response => {
         console.log(response)
       
         axios.get(`http://localhost:1919/api/fichier/${this.props.match.params.id}`)
         .then (response => {
             console.log(response)
              //affiche  comm num 1 
             
              this.setState({data_bat: response.data},()=>{
                 this.setState({data_bat: response.data})
              })
              this.setState({id_f: response.data[0].id},()=>{
                 this.setState({id_f: response.data[0].id})
                 console.log(this.state.id_f)
              })
              this.setState({commentaire: []})
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
      }

    componentDidMount(){

      axios.get('http://localhost:1919/api/commande/'+this.props.match.params.id)
      .then (response => {
          console.log("*******************************data to add")
          console.log(response)
          this.setState({etat:response.data.etat_commande},()=>{
console.log(this.state.etat)
          })
          
      })
      .catch(error => {
          console.log(error)
      });

        console.log(this.props.match.params.id)
        axios.get(`http://localhost:1919/api/fichier/${this.props.match.params.id}`)
        .then (response => {
            console.log(response)
             //affiche  comm num 1 
            
             this.setState({data_bat: response.data},()=>{
                this.setState({data_bat: response.data})
             })
             this.setState({id_f: response.data[0].id},()=>{
                this.setState({id_f: response.data[0].id})
                console.log(this.state.id_f)
             })

             axios.get(`http://localhost:1919/api/comm_bat/${this.state.id_f}`)
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

        //get commms
        
      
    }
Fichier_bat={
    url_fichier:''
}
    handlechangefichier = e=> {
        this.setState({url_fichier_bat: e.target.value},() => {
          this.Fichier_bat.url_fichier=this.state.url_fichier_bat.substring(12);
          console.log(this.Fichier_bat)
          axios.post(`http://localhost:1919/api/fichier/${localStorage.getItem('id')}/${this.props.match.params.id}`,this.Fichier_bat)
          .then (response => {
              console.log(response)
               //affiche  comm num 1 
               NotificationManager.success('Depot Fichier BAT', 'Fichier deposé avec succes', 3000);
               axios.get(`http://localhost:1919/api/fichier/${this.props.match.params.id}`)
               .then (response => {
                   console.log(response)
                    //affiche  comm num 1 
                   
                    this.setState({data_bat: response.data},()=>{
                       this.setState({data_bat: response.data})
                    })
                    this.setState({id_f: response.data[0].id},()=>{
                       this.setState({id_f: response.data[0].id})
                       console.log(this.state.id_f)
                    })
                  })
                  .catch(error => {
                      console.log(error)
                  });
        
          })
          .catch(error => {
              console.log(error)
          });
        
        });
       

       
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
  <DescriptionIcon></DescriptionIcon> Depot Fichier BAT :
      </Typography>

      <Typography  variant="body2" gutterBottom >
    Commande  :"{this.state.etat}"
      </Typography>
     </div>
 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>





<div className="flex6">
          <div className="flex-item6">
              <br/>
              <div className="flex1">
    <div className="flex-item1"><Typography size="sm"  weight="bold">
                Deposer Fichier BAT :
                  </Typography></div>
    <div className="flex-item1"> 
    <TextField
          
          id="filled-size-small"
        disabled={this.state.data_bat[0]!= null}
          size="small"
          type="file"
         value={this.state.url_fichier_bat}
          onChange={this.handlechangefichier}
        />
    
    </div>
</div>

                
    
    
    
    
   

          




          </div>

          <div className="flex-item6">
   <Slider_BAT data={this.state.data_bat}></Slider_BAT>
   <div align="center">
     {this.state.data_bat[0]!= null ? (
 <Button color="primary" size="small"
 onClick={this.delete}
 
 disabled={this.state.data_bat[0]== null}

disableElevation startIcon={<DeleteForeverIcon />} >Supprimer </Button>
     ):<p></p>}
  
   </div>
 
</div>
</div>
          <div align="center">
          <br/>
          <Typography size="sm" weight="bold">
                  
                  Commentaire  :
                </Typography>
              <Commentaire_BAT data={this.state.commentaire}></Commentaire_BAT>
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

          <NotificationContainer/>
            
            </div>
        )
    }
}

export default Depot_BAT
