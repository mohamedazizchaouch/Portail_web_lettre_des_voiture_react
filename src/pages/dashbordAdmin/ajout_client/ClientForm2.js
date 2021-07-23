import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../../components/Widget/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Steper1 from './Steper1';

export class ClientForm2 extends Component {
    regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
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
                            <Steper1></Steper1>
                            <div align="center"><TextField
                hintText="Entrer le raison social"
                floatingLabelText="Raison social"
                onChange={handlechange('raison_social')}
                defaultValue={values.raison_social}
                />
                 <br/>
                {(values.raison_social.length < 5 )&&(values.raison_social.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>raison social doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}</div>
                            <div align="center">
                            <TextField
                hintText="entrer l'adresse mail"
                floatingLabelText="Adresse mail"
                onChange={handlechange('email')}
                defaultValue={values.email}
                
                /> <br/>
                {
              (!this.regex.test(values.email))&&(values.email.length > 0 )? (
                  <span style={{ color: "red" , fontSize :10, }}>introduire une addresse valide</span>
                ) 
                : (
                  <span></span>
                )}
                            </div>
                            <div align="center"> <TextField
                hintText="Entrer le numero de telephone"
                floatingLabelText="Numero Telephone"
                onChange={handlechange('num_Telephone')}
                defaultValue={values.num_telephone}
                />
                 <br/>
                {(values.num_Telephone.length < 8 )&&(values.num_Telephone.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>numero doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}</div>
                            <div align="center">
                            <TextField
                hintText="Entrer le numero fax"
                floatingLabelText="Numero fax"
                onChange={handlechange('num_Fax')}
                defaultValue={values.num_Fax}
                />
                 <br/>
                {(values.num_Fax.length < 8 )&&(values.num_Fax.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>fax doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
                            </div>
                
             
               
                

                
                
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

export default ClientForm2
