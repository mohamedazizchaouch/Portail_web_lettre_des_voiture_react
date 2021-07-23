import React, { Component } from 'react'
import AdresseFForm from './AdresseFForm';
import AdresseLForm from './AdresseLForm';
import ClientForm1 from './ClientForm1';
import ClientForm2 from './ClientForm2';
import Confirm from './Confirm';

import RaisedButton from 'material-ui/RaisedButton'
import { Typography } from "../../../components/Wrappers";

export class ClientForm extends Component {
    state ={
        step:1,
        email :'', 
    login :'', 
    num_Fax:'',
    num_Telephone:'',
    adresse_facturation:'',
    adresse_livraison :'',
    code_client :''  ,
    personne_a_contacter :'', 
    raison_social:'',
    code_postal_adresse_facturation:'', 
    gouvernorat:'',
     rue_adresse_facturation:'', 
    ville_adresse_facturation:'',
    ville_adresse_facturation_liv :'', 
	 rue_adresse_facturation_liv :'',
	code_postal_adresse_liv :'',
	govvernorat_liv :''
    }

    nextstep=()=>{
        const {step} = this.state;
        this.setState({
            step :step+1
        });
    }
prevstep=()=>{
        const {step} = this.state;
        this.setState({
            step :step - 1
        });
    }

    // handle field change 
    handlechange = input => e=> {
        this.setState({[input]: e.target.value});
    }

    render() {
    
        const {step} =this.state;
        const {email,
            login,
            num_Fax,
            num_Telephone,
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
            govvernorat_liv } = this.state;

            const values = {email,
                login,
               
                num_Fax,
                num_Telephone,
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
                govvernorat_liv }

      switch(step){
          case 1 :
              return(

            <ClientForm1
            nextstep={this.nextstep}
            handlechange={this.handlechange}
            values ={values}
            ></ClientForm1>
              )
              case 2 :
                  return(<ClientForm2
                  nextstep={this.nextstep}
                  handlechange={this.handlechange}
                  values ={values}
                  prevstep={this.prevstep}
                  />)
                  case 3 :
                      return(<AdresseFForm
                        nextstep={this.nextstep}
                        handlechange={this.handlechange}
                        values ={values}
                        prevstep={this.prevstep}/>)
                        case 4 :
                            return(<AdresseLForm
                                nextstep={this.nextstep}
                                handlechange={this.handlechange}
                                values ={values}
                                prevstep={this.prevstep}/>)
                                case 5 :
                                    return(<Confirm
                                        nextstep={this.nextstep}
                                        
                                        values ={values}
                                        prevstep={this.prevstep}/>)
                                        case 6 :
                                            return( <div aling="center"> <Typography variant="h2" color="success" weight="bold">
                                            Compte Client ajouter avec succes
                                          </Typography>
                                         <br/> <br/>
                                          <Typography variant="h6"  weight="bold">
                                           client {values.code_client} ajouter au resaux de notre portail ,
                                           un mail de confirmation a éte envoyer pour activer son compte 
                                          </Typography>

                                         
                                          
                                          </div> )


      }
    }
 
    
}




export default ClientForm
