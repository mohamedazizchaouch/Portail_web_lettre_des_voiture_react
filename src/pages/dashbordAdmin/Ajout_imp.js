import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export class Ajout_imp extends Component {
    regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    constructor(props) {
        super(props) 
     
        this.state = {
           data :[],
           login:'',
           num_Fax:0,
           num_Telephone:0,
           email:'',
           contact_imp:''
          
           
        }
      }
      ajout=()=>{
          let imp={
            login:this.state.login,
            num_Fax:this.state.num_Fax,
            num_Telephone:this.state.num_Telephone,
            email:this.state.email,
            contact_imp:this.state.contact_imp
          }
          console.log(imp)
          axios.post('http://localhost:1919/api/imprimeur',imp)
          .then (response => {
              console.log("*******************************data to add")
              console.log(response)
              
          })
          .catch(error => {
              console.log(error)
          });
      }
      handlechange_tell=(e)=>{
        this.setState({ num_Telephone:e.target.value},()=>{
          console.log(this.state.num_Telephone)
          
        })
       
    }
    handlechange_fax=(e)=>{
        this.setState({ num_Fax:e.target.value},()=>{
          console.log(this.state.num_Fax)
          
        })
       
    }
      handlechange_login=(e)=>{
          this.setState({login:e.target.value},()=>{
            console.log(this.state.login)
            
          })
         
      }
      handlechange_email=(e)=>{
        this.setState({email:e.target.value},()=>{
          console.log(this.state.email)
          
        })
       
       
    }

    handlechange_societe=(e)=>{
        this.setState({contact_imp:e.target.value},()=>{
          console.log(this.state.contact_imp)
          
        })}
    render() {
        
        return (
            <div>
                 <React.Fragment >
                    <MuiThemeProvider>
                        
                    <div align='center'> 
               <TextField
                hintText="entrer le nom du societe"
                floatingLabelText="nom societe"
                onChange={this.handlechange_societe}
                defaultValue={this.state.contact_imp}
                type="text"
                />
               <br></br>
                {(this.state.contact_imp.length < 5 )&&(this.state.contact_imp.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>le nom du societe doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
              
              
               </div>

                    <div align='center'> 
               <TextField
                hintText="entrer votre E-mail"
                floatingLabelText="E-mail"
                onChange={this.handlechange_email}
                defaultValue={this.state.email}
                type="text"
                />
               <br></br>
                {(!this.regex.test(this.state.email))&&(this.state.email.length > 0 )? (
                  <span style={{ color: "red" , fontSize :10, }}>Introduire une adresse valide</span>
                ) 
                : (
                  <span></span>
                )}
              
              
               </div>
               <div align='center'> 
               <TextField
                hintText="entrer votre Login"
                floatingLabelText="login"
                onChange={this.handlechange_login}
                defaultValue={this.state.login}
                type="text"
                />
               <br></br>
                {(this.state.login.length < 5 )&&(this.state.login.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Login doit contenir au moins 5 carac</span>
                ) 
                : (
                  <span></span>
                )}
              
              
               </div>
               <div align='center'> 
               <TextField
                hintText="entrer numero telephone"
                floatingLabelText="Num telephone"
                onChange={this.handlechange_tell}
                defaultValue={this.state.num_Telephone}
                type="number"
                />
               <br></br>
                {(this.state.num_Telephone.length < 8 )&&(this.state.num_Telephone.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}> un Numero doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
              
              
               </div>
               <div align='center'> 
               <TextField
                hintText="entrer numero fax"
                floatingLabelText="Numero fax"
                onChange={this.handlechange_fax}
                defaultValue={this.state.num_Fax}
                type="number"
                />
               <br></br>
                {(this.state.num_Fax.length < 8 )&&(this.state.num_Fax.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>Un numero doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
              
              
               </div>    

               <div align="center">
               <RaisedButton
              label="Ajouter"
              primary={true}
              style={stylesq.button}
            onClick={this.ajout}
            
              />
              <RaisedButton
              label="Annuler"
              primary={false}
              style={stylesq.button}
            //  onClick={this.retour}
              />

               </div>
                        
                        </MuiThemeProvider></React.Fragment>
            </div>
        )
    }
}
const stylesq= {
    button: {
        margin :15,
       
    }
}
export default Ajout_imp
