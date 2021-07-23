import React, { useState } from "react";
import {
    Grid,
    CircularProgress,
    Typography,
    Button,
    Tabs,
    Tab,
    TextField,
    Fade,
  } from "@material-ui/core";
  import Widget from "../../components/Widget/Widget"

  import { withRouter } from "react-router-dom";
import classnames from "classnames";
import './style.css'

// styles
import useStyles from "./styles";




function FormClient(props) {
    var classes = useStyles();

    var userDispatch = useUserDispatch();

    var [isLoading, setIsLoading] = useState(false);
    var [error, setError] = useState(null);
    var [activeTabId, setActiveTabId] = useState(0);
    var [emailValue, setemailValue] = useState("");
    var [loginValue, setloginValue] = useState("");
    var [mdpValue, setmdpValue] = useState("");
    var [num_faxValue, setnum_faxValue] = useState("");
    var [num_telephoneValue, setnum_telephoneValue] = useState("");
    var [adresse_facturationValue, setadresse_facturationValue] = useState("");
    var [adresse_livraisonValue, setadresse_livraisonValue] = useState("");
    var [code_clientValue, setcode_clientValue] = useState("");
    var [personne_a_contacterValue, setpersonne_a_contacterValue] = useState("");
    var [raison_socialValue, setraison_socialValue] = useState("");
    var [code_postal_adresse_facturationValue, setcode_postal_adresse_facturationtValue] = useState("");
    var [gouvernoratValue, setgouvernoratValue] = useState("");
    var [rue_adresse_facturationValue, setrue_adresse_facturationValue] = useState("");
    var [ville_adresse_facturationValue, setville_adresse_facturationValue] = useState("");
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

    return (

        <React.Fragment>
              <Typography variant="h1" className={classes.greeting}>
               
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
              creation compte client
              </Typography>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Consulter votre boite mail pour activer votre compte !!!
                </Typography>
              </Fade>
              <div className=".flex-container">
                <div>  <TextField
                id="code client"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={code_clientValue}
                onChange={e => setcode_clientValue(e.target.value)}
                margin="normal"
                placeholder="code client"
                type="text"
                
              />
                {(code_clientValue.length < 4 )&&(code_clientValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>code client doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}
               <TextField
                id="raison social"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={raison_socialValue}
                onChange={e => setraison_socialValue(e.target.value)}
                margin="normal"
                placeholder="raison social"
                type="text"
                
              />
               {(raison_socialValue.length < 4 )&&(raison_socialValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>le raison social doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}
               <TextField
                id="personne a contacter"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={personne_a_contacterValue}
                onChange={e => setpersonne_a_contacterValue(e.target.value)}
                margin="normal"
                placeholder="personne a contacter"
                type="text"
              
              />
               {(personne_a_contacterValue.length < 4 )&&(personne_a_contacterValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>nom du personne a contacter  doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}

<TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={emailValue}
                onChange={e => setemailValue(e.target.value)}
                margin="normal"
                placeholder="adresse mail"
                type="email"
                
              />
               {
              (!regex.test(emailValue))&&(emailValue.length > 0 )? (
                  <span style={{ color: "red" , fontSize :10, }}>introduire une addresse valide</span>
                ) 
                : (
                  <span></span>
                )}
             
           
           </div>
           <div>

           <TextField
                id="login"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setloginValue(e.target.value)}
                margin="normal"
                placeholder="Login"
                type="text"
                
              /> 
                  {(loginValue.length < 5 )&&(loginValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>login doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}

<TextField
                id="mdp"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={mdpValue}
                onChange={e => setmdpValue(e.target.value)}
                margin="normal"
                placeholder="mot de passe"
                type="password"
                
              /> 
                  {(mdpValue.length < 8 )&&(mdpValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>mot de passe doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
                
              <TextField
                id="num_telephone"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={num_telephoneValue}
                onChange={e => setnum_telephoneValue(e.target.value)}
                margin="normal"
                placeholder="numero de telephone"
                type="text"
                
              /> 
                  {(num_telephoneValue.length < 8 )&&(num_telephoneValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>numero de telephone doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
                
                  <TextField
                id="num_fax"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={num_faxValue}
                onChange={e => setnum_faxValue(e.target.value)}
                margin="normal"
                placeholder="numero fax"
                type="text"
                
              /> 
                  {(num_faxValue.length < 8 )&&(num_faxValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>numero de fax doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}

              
           
           </div>
              </div>
              
            


             
                
              <TextField
                id="addresse_facture"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                 
                }}
               
                value={adresse_facturationValue}
                onChange={e => setadresse_facturationValue(e.target.value)}
                margin="normal"
                placeholder="adresse de facturation"
                type="text"
                
              />
               {(adresse_facturationValue.length < 4 )&&(adresse_facturationValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>adresse  doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
                  <TextField
                id="adresse_facturattion_ville"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={ville_adresse_facturationValue}
                onChange={e => setville_adresse_facturationValue(e.target.value)}
                margin="normal"
                placeholder="ville facturation"
                type="text"
                
              /> 
                  {(ville_adresse_facturationValue.length < 4 )&&(ville_adresse_facturationValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>ville doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}
                  <TextField
                id="governorat"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={gouvernoratValue}
                onChange={e => setgouvernoratValue(e.target.value)}
                margin="normal"
                placeholder="gouvernorat"
                type="text"
                
              /> 
                  {(gouvernoratValue.length < 8 )&&(gouvernoratValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>gouvernorat doit contenir au moins 8 carac</span>
                ) 
                : (
                  <span></span>
                )}
                  <TextField
                id="rue"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={rue_adresse_facturationValue}
                onChange={e => setrue_adresse_facturationValue(e.target.value)}
                margin="normal"
                placeholder="Rue de facturation"
                type="text"
                
              /> 
                  {(rue_adresse_facturationValue.length < 5 )&&(rue_adresse_facturationValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>rue de facturation doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}

<TextField
                id="code postal"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={code_postal_adresse_facturationValue}
                onChange={e => setcode_postal_adresse_facturationtValue(e.target.value)}
                margin="normal"
                placeholder="code postal"
                type="text"
               
              /> 
                  {(code_postal_adresse_facturationValue.length < 5 )&&(code_postal_adresse_facturationValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>code postale doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}
                  <TextField 
                id="addresse livraison"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={adresse_livraisonValue}
                onChange={e => setadresse_livraisonValue(e.target.value)}
                margin="normal"
                placeholder="adresse livraison"
                type="text"
                
              /> 
                  {(adresse_livraisonValue.length < 4 )&&(adresse_livraisonValue.length>= 1  )? (
                  <span style={{ color: "red" , fontSize :10, }}>adresse livraison doit contenir au moins 4 carac</span>
                ) 
                : (
                  <span></span>
                )}
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                
                    disabled={
                      loginValue.length === 0 ||
                      mdpValue.length === 0 
                    
                      
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    demandez-vous votre compte
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              
            </React.Fragment>
    )

}



export default withRouter(FormClient);

