import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from '../../../components/Widget/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DiscreteSlider from './DiscreteSlider';
import Steper from './Steper';

export class ClientForm1 extends Component {
    continue = e => {
    e.preventDefault();
    this.props.nextstep();
    console.log("***********************values")
    console.log(this.props.values)
    }
    render() {
        const {values,handlechange}=this.props;
        return (
            
            
                <React.Fragment >
                    <MuiThemeProvider>
                        <div align='center'>
                        <Steper></Steper>
                        <div align='center'>
                        <TextField
                hintText="entrer ton login"
                floatingLabelText="login"
                onChange={handlechange('login')}
                defaultValue={values.login}
                />
                <br></br>
                {(values.login.length < 5 )&&(values.login.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>login doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
                
                        </div>
               
               <div align="center">
               <TextField
                hintText="entrer le  code du client"
                floatingLabelText="code client"
                onChange={handlechange('code_client')}
                defaultValue={values.code_client}
                /> <br/>
                {(values.code_client.length < 5 )&&(values.code_client.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>code client doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
                

               </div>
                <div align="center">

                <TextField
                hintText="nom du personne a contacter"
                floatingLabelText="personne a contacter"
                onChange={handlechange('personne_a_contacter')}
                defaultValue={values.personne_a_contacter}
                />
                 <br/>
                {(values.personne_a_contacter.length < 5 )&&(values.personne_a_contacter.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>doit contenir au moins 5 carac</span>
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

export default ClientForm1
