import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../components/Widget/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlacesAutocomplete from 'react-places-autocomplete';
import { Typography } from "../../components/Wrappers";
import axios from 'axios';

export class Modif_f extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
            adresse_facturation:this.props.data.adresse_facturation,
            gouvernorat:this.props.data.gouvernorat,
            rue_adresse_facturation:this.props.data.rue_adresse_facturation,
            ville_adresse_facturation:this.props.data.ville_adresse_facturation,
            code_postal_adresse_facturation:this.props.data.code_postal_adresse_facturation
          
          
           
        }
      }

      dataa={
        adresse_facturation:this.props.data.adresse_facturation,
        gouvernorat:this.props.data.gouvernorat,
        rue_adresse_facturation:this.props.data.rue_adresse_facturation,
        ville_adresse_facturation:this.props.data.ville_adresse_facturation,
        code_postal_adresse_facturation:this.props.data.code_postal_adresse_facturation
      }

    modif =()=>{
        axios.put(`http://localhost:1919//api/client/${this.props.data.id}`,this.dataa)
         .then(response => {

            console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
          console.log(response)
          
          
         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
      
    
      })
      .catch(error =>{
          console.log(error)
      })
 
    }
    componentDidMount(){
        console.log(this.props.data.id)
    }
    handlechange =  e=> {
        this.setState({adresse_facturation: e.target.value},()=>{
            this.dataa.adresse_facturation=this.state.adresse_facturation
            console.log(this.state.adresse_facturation)
        });
       
    }
    handlechangeg =  e=> {
        this.setState({ gouvernorat: e.target.value},()=>{
            this.dataa.gouvernorat=this.state.gouvernorat
        }
        );
       
       
    }
    handlechangev =  e=> {
        this.setState({ ville_adresse_facturation: e.target.value},()=>{
            this.dataa.ville_adresse_facturation=this.state.ville_adresse_facturation
        }
        );
        
    }
    handlechanger =  e=> {
        this.setState({ rue_adresse_facturation: e.target.value},()=>{
            this.dataa.rue_adresse_facturation=this.state.rue_adresse_facturation
        });
        
    }
    handlechangec =  e=> {
        this.setState({  code_postal_adresse_facturation: e.target.value},()=>{
            this.dataa.code_postal_adresse_facturation=this.state.code_postal_adresse_facturation
            console.log(this.dataa)
        });
     
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                     
                     <Typography  weight="bold">
                 Adresse facturation :
               </Typography>
                         <div align='center'>
                 <TextField
                 hintText="Entrer adresse de facturation"
                 floatingLabelText="adresse facturation"
                 onChange={ this.handlechange}
                 defaultValue={this.dataa.adresse_facturation}
                 /><br/>
               <TextField
                 hintText="entrer gouvernorat"
                 floatingLabelText="gouvernorat"
                 onChange={this.handlechangeg}
                 defaultValue={this.dataa.gouvernorat}
                 
                 /><br/>
                 <TextField
                 hintText="Entrer la ville"
                 floatingLabelText="ville"
             onChange={this.handlechangev}
                 defaultValue={this.dataa.ville_adresse_facturation}
                 /><br/> 
 
                 
                  <TextField
                 hintText="Entrer le rue"
                 floatingLabelText="Rue"
             onChange={this.handlechanger}
                defaultValue={this.dataa.rue_adresse_facturation}
                 /><br/>
                 <TextField
                 hintText="Entrer code postal"
                 floatingLabelText="code postal"
                
         onChange={this.handlechangec}
                defaultValue={this.dataa.code_postal_adresse_facturation}
                 /><br/>
               
               <RaisedButton
              label="Appliquer"
              primary={true}
              style={stylesq.button}
              onClick={this.modif}
              />
              <RaisedButton
              label="retour"
              primary={false}
              style={stylesq.button}
              //onClick={this.retour}
              />
               
               </div>
               </MuiThemeProvider>
            </div>
        )
    }
}

const stylesq= {
    button: {
        margin :15,
       
    }
}
export default Modif_f
