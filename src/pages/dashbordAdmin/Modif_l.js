import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../components/Widget/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlacesAutocomplete from 'react-places-autocomplete';
import { Typography } from "../../components/Wrappers";
import axios from 'axios';

export class Modif_l extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
            adresse_livraison:this.props.data.adresse_livraison,
            govvernorat_liv:this.props.data.govvernorat_liv,
            rue_adresse_facturation_liv:this.props.data.rue_adresse_facturation_liv,
            ville_adresse_facturation_liv:this.props.data.ville_adresse_facturation_liv,
            code_postal_adresse_liv:this.props.data.code_postal_adresse_liv
          
          
           
        }
      }

      dataa={
        adresse_livraison:this.props.data.adresse_livraison,
        govvernorat_liv:this.props.data.govvernorat_liv,
        rue_adresse_facturation_liv:this.props.data.rue_adresse_facturation_liv,
        ville_adresse_facturation_liv:this.props.data.ville_adresse_facturation_liv,
        code_postal_adresse_liv:this.props.data.code_postal_adresse_liv
      }

    modif =()=>{
        axios.put(`http://localhost:1919//api/client/liv/${this.props.data.id}`,this.dataa)
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
        this.setState({adresse_livraison: e.target.value},()=>{
            this.dataa.adresse_livraison=this.state.adresse_livraison
            console.log(this.state.adresse_livraison)
        });
       
    }
    handlechangeg =  e=> {
        this.setState({ govvernorat_liv: e.target.value},()=>{
            this.dataa.govvernorat_liv=this.state.govvernorat_liv
        }
        );
       
       
    }
    handlechangev =  e=> {
        this.setState({ ville_adresse_facturation_liv: e.target.value},()=>{
            this.dataa.ville_adresse_facturation_liv=this.state.ville_adresse_facturation_liv
        }
        );
        
    }
    handlechanger =  e=> {
        this.setState({ rue_adresse_facturation_liv: e.target.value},()=>{
            this.dataa.rue_adresse_facturation_liv=this.state.rue_adresse_facturation_liv
        });
        
    }
    handlechangec =  e=> {
        this.setState({  code_postal_adresse_liv: e.target.value},()=>{
            this.dataa.code_postal_adresse_liv=this.state.code_postal_adresse_liv
            console.log(this.dataa)
        });
     
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                     
                     <Typography  weight="bold">
                 Adresse Livraison :
               </Typography>
                         <div align='center'>
                 <TextField
                 hintText="Entrer adresse de facturation"
                 floatingLabelText="adresse facturation"
                 onChange={ this.handlechange}
                 defaultValue={this.dataa.adresse_livraison}
                 /><br/>
               <TextField
                 hintText="entrer govvernorat_liv"
                 floatingLabelText="govvernorat_liv"
                 onChange={this.handlechangeg}
                 defaultValue={this.dataa.govvernorat_liv}
                 
                 /><br/>
                 <TextField
                 hintText="Entrer la ville"
                 floatingLabelText="ville"
             onChange={this.handlechangev}
                 defaultValue={this.dataa.ville_adresse_facturation_liv}
                 /><br/> 
 
                 
                  <TextField
                 hintText="Entrer le rue"
                 floatingLabelText="Rue"
             onChange={this.handlechanger}
                defaultValue={this.dataa.rue_adresse_facturation_liv}
                 /><br/>
                 <TextField
                 hintText="Entrer code postal"
                 floatingLabelText="code postal"
                
         onChange={this.handlechangec}
                defaultValue={this.dataa.code_postal_adresse_liv}
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
export default Modif_l
