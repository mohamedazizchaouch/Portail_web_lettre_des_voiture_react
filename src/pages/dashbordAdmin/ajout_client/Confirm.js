import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../../components/Widget/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { List, ListItem } from 'material-ui';
import { loginUser } from '../../../context/UserContext';
import '../style.css'
import { Typography } from "../../../components/Wrappers";
import axios from 'axios'

export class Confirm extends Component {
    continue = e => {
    e.preventDefault();
    this.props.nextstep();
    console.log("***********************values")
    console.log(this.props.values)

    axios.post('http://localhost:1919/api/client',this.props.values)
    .then (response => {
        console.log("*******************************data to add")
        console.log(response)
        
    })
    .catch(error => {
        console.log(error)
    });
   

    }

    retour = e => {
        e.preventDefault();
        this.props.prevstep();
        console.log("***********************values")
        console.log(this.props.values)
        }
    render() {
        
        const {values : {email,
            login,
            mdp,
            num_fax,
            num_telephone,
            adresse_facturation,
            adresse_livraison ,
            code_client,
            personne_a_contacter ,
            raison_social,
            code_postal_adresse_facturation,
            gouvernorat,
             rue_adresse_facturation,
            ville_adresse_facturation,
            ville_adresse_facturation_liv, 
             rue_adresse_facturation_liv,
            code_postal_adresse_liv,
            govvernorat_liv }} = this.props
            const flexContainer = {
                display: 'flex',
                flexDirection: 'row',
                padding: 0,
               align : 'center',
              };

          
        return (
           
                <React.Fragment >
                    <MuiThemeProvider>
                        <div align='center'>
                        <Typography  weight="bold">
                Information personelle :
              </Typography>
                            <List className="list-horizontal-display"  >
                          <ListItem 
                          primaryText="Login"
                          secondaryText={login} 
                          />
                          <ListItem 
                          primaryText="Code client"
                          secondaryText={code_client}
                          />
                          <ListItem 
                          primaryText="personne a contacter"
                          secondaryText={personne_a_contacter}
                          />
                            </List><br/>
                            
                            <List className="list-horizontal-display" >
                          <ListItem 
                          primaryText="raison social"
                          secondaryText={raison_social} 
                          />
                          <ListItem 
                          primaryText="Email"
                          secondaryText={email}
                          />
                           <ListItem 
                          primaryText="numero telephone"
                          secondaryText={num_telephone}
                          />
                           <ListItem 
                          primaryText="numero fax"
                          secondaryText={num_fax}
                          />
                            </List>
                            <Typography  weight="bold">
                Adresse facturation :
              </Typography>
                            <List className="list-horizontal-display" >
                          <ListItem 
                          primaryText="Adresse facturation"
                          secondaryText={adresse_facturation} 
                          />
                          <ListItem 
                          primaryText="Gouvernorat"
                          secondaryText={gouvernorat}
                          />
                           <ListItem 
                          primaryText="Ville"
                          secondaryText={ville_adresse_facturation}
                          />
                           <ListItem 
                          primaryText="Rue"
                          secondaryText={rue_adresse_facturation}
                          />
                          <ListItem 
                          primaryText="code postal"
                          secondaryText={code_postal_adresse_facturation}
                          />
                            </List>

                            <Typography  weight="bold">
                Adresse livraison :
              </Typography>
                            <List className="list-horizontal-display" >
                          <ListItem 
                          primaryText="Adresse Livraison"
                          secondaryText={adresse_livraison} 
                          />
                          <ListItem 
                          primaryText="Gouvernorat"
                          secondaryText={govvernorat_liv}
                          />
                           <ListItem 
                          primaryText="Ville"
                          secondaryText={ville_adresse_facturation_liv}
                          />
                           <ListItem 
                          primaryText="Rue"
                          secondaryText={rue_adresse_facturation_liv}
                          />
                          <ListItem 
                          primaryText="code postal"
                          secondaryText={code_postal_adresse_liv}
                          />
                            </List>
                
                
                
              <RaisedButton
              label="confimer et ajouter client"
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

export default Confirm
