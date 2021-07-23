import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../../components/Widget/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlacesAutocomplete from 'react-places-autocomplete';
import { Typography } from "../../../components/Wrappers";
import Steper3 from './Steper3';

export class AdresseLForm extends Component {

    constructor(props) {
        super(props);
        this.state = { address: '' };
      }
     
      handleChange = address => {
        this.setState({ address });
      };


    continue = e => {
    e.preventDefault();
    this.props.nextstep();
    console.log("***********************values")
    console.log(this.props.values)
    }

    retour = e => {
        e.preventDefault();
        this.props.prevstep();
        console.log("***********************values")
        console.log(this.props.values)
        }
    render() {
        const {values,handlechange}=this.props;
        return (
            
            
                <React.Fragment >
                   






                    <MuiThemeProvider>
                     
                   
                        <div align='center'>
                           <Steper3></Steper3>
                           <div align="center">
                           <TextField
                hintText="Entrer adresse livraison"
                floatingLabelText="adresse livraison"
                onChange={handlechange('adresse_livraison')}
                defaultValue={values.adresse_livraison}
                /><br></br>
                {(values.adresse_livraison.length < 5)&&(values.adresse_livraison.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Champ doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
                           </div>
                           <div align="center">
                           <TextField
                hintText="entrer gouvernorat"
                floatingLabelText="gouvernorat"
                onChange={handlechange('govvernorat_liv')}
                defaultValue={values.govvernorat_liv}
                
                />
                <br></br>
                {(values.govvernorat_liv.length < 5)&&(values.govvernorat_liv.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Champ doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
                           </div>
                           <div align="center">
                           <TextField
                hintText="Entrer la ville"
                floatingLabelText="ville"
                onChange={handlechange('ville_adresse_facturation_liv')}
                defaultValue={values.ville_adresse_facturation_liv}
                />
                 <br></br>
                {(values.ville_adresse_facturation_liv.length < 5)&&(values.ville_adresse_facturation_liv.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Champ doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
                           </div>
                           <div align="center">
                           <TextField
                hintText="Entrer le rue"
                floatingLabelText="Rue"
                onChange={handlechange('rue_adresse_facturation_liv')}
                defaultValue={values.rue_adresse_facturation_liv}
                />
                 <br></br>
                {(values.rue_adresse_facturation_liv.length < 5)&&(values.rue_adresse_facturation_liv.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Champ doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
                           </div>
                           <div align="center"><TextField
                hintText="Entrer code postal"
                floatingLabelText="code postal"
                onChange={handlechange('code_postal_adresse_liv')}
                defaultValue={values.code_postal_adresse_liv}
                />
                  <br></br>
                {(values.code_postal_adresse_liv.length < 4 )&&(values.code_postal_adresse_liv.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Champ doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}</div>
                
               
              <RaisedButton
              label="continue"
              primary={true}
              style={stylesq.button}
              onClick={this.continue}
              />
              <RaisedButton
              label="retour"
              primary={false}
              style={stylesq.button}
              onClick={this.retour}
              />
              
              
              </div>
              </MuiThemeProvider>
                </React.Fragment>
               
        )
    }
}

const stylesq= {
    button: {
        margin :15,
       
    }
}

export default AdresseLForm
