import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Button } from '@material-ui/core';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import "../Options/Options.css";
import axios from 'axios'


export class Inscrir extends Component {
    constructor(props) {
        
        super(props) 
      
        this.state = {
         nom:'',
         prenom:'',
         adr:'',
         mail:'',
         num_tel:0,
         num_fax:0,
         rs:''
           
        }
      }
      componentDidMount(){
          console.log(this.props)
      }

      handlechange_nom=(e)=>{
          this.setState({nom:e.target.value},()=>{
              console.log(this.state.nom)
          
          })
      }
      handlechange_rs=(e)=>{
        this.setState({rs:e.target.value},()=>{
            console.log(this.state.rs)
        
        })
    }
      handlechange_prenom=(e)=>{
        this.setState({prenom:e.target.value},()=>{
            console.log(this.state.prenom)
        
        })
    }
    handlechange_adr=(e)=>{
        this.setState({adr:e.target.value},()=>{
            console.log(this.state.adr)
        
        })
    }
    handlechange_mail=(e)=>{
        this.setState({mail:e.target.value},()=>{
            console.log(this.state.mail)
        
        })
    }
    handlechange_tel=(e)=>{
        this.setState({num_tel:e.target.value},()=>{
            console.log(this.state.num_tel)
        
        })
    }
    handlechange_fax=(e)=>{
        this.setState({num_fax:e.target.value},()=>{
            console.log(this.state.num_fax)
        
        })
    }
    envoyer_demande=()=>{
      
        axios.get("http://localhost:1919/api/client/mail/"+this.state.nom+"/"+this.state.prenom+"/"+this.state.rs+"/"+this.state.mail+"/"+this.state.adr+"/"+
        this.state.num_tel+"/"+this.state.num_fax)
        .then(response => {
         console.log(response)
         
   
     })
     .catch(error =>{
         console.log(error)
     })
   
     
    }
   

    render() {
        



        return (
            <React.Fragment >
            <MuiThemeProvider>
               
            <TextField   
                hintText="Nom"
                floatingLabelText="Nom"
               onChange={this.handlechange_nom}
                defaultValue={this.state.nom}
              
                />
                 <TextField
                hintText="Prenom"
                floatingLabelText="Prenom"
                onChange={this.handlechange_prenom}
                defaultValue={this.state.prenom}
              
                />
                 <TextField
                hintText="Raison social"
                floatingLabelText="Raison_social"
                onChange={this.handlechange_rs}
                defaultValue={this.state.rs}
              
                />
                 <TextField
                hintText="e-mail"
                floatingLabelText="e-mail"
                onChange={this.handlechange_mail}
                defaultValue={this.state.mail}
              
                />
 <TextField
                hintText="Adresse"
                floatingLabelText="Adresse"
                onChange={this.handlechange_adr}
                defaultValue={this.state.adr}
              
                />
                 <TextField
                hintText="Numero telephone"
                floatingLabelText="Numero telephone"
                onChange={this.handlechange_tel}
                defaultValue={this.state.num_tel}
              
                />
                 <TextField
                hintText="Numero FAX"
                floatingLabelText="Numero FAX"
                onChange={this.handlechange_fax}
                defaultValue={this.state.num_fax}
              
                />
<div align="center">
<Button color="primary" size="small"   className="learning-option-button"
          onClick={this.envoyer_demande
        }
      onMouseUp={this.props.actionProvider.demande}
       
        //   disabled={count!= 0}
     
  disableElevation startIcon={<NewReleasesIcon />} >Demande D'inscription </Button>
</div>

                </MuiThemeProvider>
                </React.Fragment>
        )
    }
}

export default Inscrir
