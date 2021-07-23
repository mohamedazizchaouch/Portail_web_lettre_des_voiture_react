import React, { Component } from 'react'

import Input from '@material-ui/core/Input';
import './AjouterCommande/stylee.css'
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import SaveIcon from '@material-ui/icons/Save';
import Popup from 'reactjs-popup'
import { Paper } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,TextareaAutosize, TextField
  } from "@material-ui/core";
  import Widget from "../../components/Widget/Widget"
  import PageTitle from "../../components/PageTitle";
  import { Typography } from "../../components/Wrappers";
  import MUIDataTable from "mui-datatables";
  //import { Button } from "../../components/Wrappers";
  import { Button } from '@material-ui/core';
  import { Avatar } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
 

import axios from 'axios';
import Table from "./components/Table/Table";
import { CenterFocusStrong } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Modif_f from './Modif_f';
import Modif_l from './Modif_l';
 class clientdetail extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
          data:{},
          nbr_cmd:1 
         
        }
      }

      onclose =()=>{
        axios.get(`http://localhost:1919//api/client/${this.props.match.params.id}`)
         .then(response => {
          console.log(response)
          
          this.setState({data: response.data})
         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
       console.log(this.state.data)
    
      })
      .catch(error =>{
          console.log(error)
      })
 

      }

      componentDidMount(){
          console.log(localStorage.getItem('aziz'))
      
        
         axios.get(`http://localhost:1919//api/client/${this.props.match.params.id}`)
         .then(response => {
          console.log(response)
          
          this.setState({data: response.data})
         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
       console.log(this.state.data)
    
      })
      .catch(error =>{
          console.log(error)
      })
 
      axios.get(`http://localhost:1919/api/client/acmd/${this.props.match.params.id}`)
      .then(response => {
        console.log("************************cmd_encrous")
       console.log(response)
       console.log("************************cmd_encrous")
       this.setState({nbr_cmd: response.data})
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
      console.log("************************cmd_encrous")
    console.log(this.state.nbr_cmd)
    console.log("************************cmd_encrous")
 
   })
   .catch(error =>{
       console.log(error)
   })

       }
       



    render() {

        
        return (
           

    
    
     
     <div>
       
      <div align="center">
      <Grid item xs={12} sm={3}>
  <Paper>
  <br></br>
 <div>
 <Typography  weight="bold" variant="h6" >
  Liste des clients   :
      </Typography>
      <div > 
      <Button color="primary" size="small"  
  variant="contained"
               disabled={this.state.nbr_cmd!=1}
    component={Link}
    to={"/app/ajoutcommande/" + this.state.data.id}
  disableElevation startIcon={<AddCircleIcon />} >
  Passer nouvelle commande 
</Button>
        
        
          </div>
 </div>
 
                 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br><br></br>
      </div>
         
<Grid item xs={12} >
            <Widget
             // title="Liste des client "
              upperTitle
              noBodyPadding
              //bodyClass={classes.tableWidget}
            >
              <div align ="center" className="marges">
             
              </div>
              <br></br> <br></br>
                <div className="flex">
                 
<div className="flex-item"> 
<MuiThemeProvider>
    
    <div className="flex1">
    <Avatar src="http://localhost/Images/i1" style={{ height: '70px', width: '70px' }} className="flex-item1"></Avatar>
    <div className="flex-item1">
        <div className="flex2">
            <div className="flex-item2">
            <Typography size="sm">
               Code Client :
              </Typography>

              <Typography size="sm">
               Personne a contacter :
              </Typography>

              <Typography size="sm">
               Telephone :
              </Typography>

            </div>
            <div className="flex-item2">
            <Typography size="sm" weight="bold">
                {this.state.data.code_client}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.state.data.personne_a_contacter}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.num_Telephone}
              </Typography>
            </div>
        
        </div>
   


    </div>


    </div>
    


</MuiThemeProvider>


<div className="flex3">
    <div className="flex-item3">

    <form>
        <fieldset>

<legend><Typography weight="bold"  size="md">
                FACTURATION
              </Typography>
              </legend>
            
              
    
             

              <div className="flex2">
            <div className="flex-item2">
            <Typography size="sm">
            Adresse facturation :
              </Typography>
              <Typography size="sm">
              Pays :
              </Typography>
              <Typography size="sm">
              Gouvernorat :
              </Typography>
              <Typography size="sm">
              Ville:
              </Typography>
              <Typography size="sm">
              Rue :
              </Typography>
              <Typography size="sm">
              Code postal:
              </Typography>
            </div>
            <div className="flex-item2">
            <Typography size="sm" weight="bold">
                {this.state.data.adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.state.data.pays_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
               {this.state.data.gouvernorat}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.ville_adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.rue_adresse_facturation}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.code_postal_adresse_facturation}
              </Typography>
              
                    </div>
          

        </div>
        <div className="popp"> 
              <Popup 
    trigger={<Button variant="outlined" 
    style={{  width: '100px',height:"20px" }}
    onClick={this.ajoutcommentaire}
    disabled={this.aziz==0}
    
    >Modifer </Button>}
    onClose={this.onclose}
    modal
    closeOnDocumentClick
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Client  </div>
        <div className="content" align="center">
          
        
          {" "}
<br></br>
         <Modif_f data={this.state.data}></Modif_f>
                  <br></br>
    
        </div>
      
      </div>
    )}
  
  </Popup>
              </div>
        </fieldset>
</form>
<br/> <br/> <br/>


    </div>
    
</div>


</div>



<div className="flex-item"> 
<MuiThemeProvider>
    
    <div className="flex1">
        <div className="flex-item1"></div>
    
    <div className="flex-item1">
        <div className="flex2">
            <div className="flex-item2">
                <br></br>
            <Typography size="sm">
               Email :
              </Typography>

              <Typography size="sm">
               Numero Fax :
              </Typography>

             

            </div>
            <div className="flex-item2">
            <FormControl >
        
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
            
          }
         // placeholder="mohamed aziz chaouch"
          value={this.state.data.email}
        style={{  width: '240px' }}
        disabled={true}
        />
      </FormControl>
     
      <TextField
    id="date"
    style={{  width: '240px' }}
    type="text"
    //defaultValue="2017-05-24"
  //  onChange={this.handlechange}
   // value={this.state.Commande_date} autooo 
defaultValue={this.state.data.num_Fax}
value={this.state.data.num_Fax}
size="small"
    InputLabelProps={{
      shrink: true,
    }}
  />
             
            </div>
        
        </div>
   


    </div>


    </div>
    


</MuiThemeProvider>

<div className="flex3">
    <div className="flex-item3">

    <form>
        <fieldset>

<legend><Typography weight="bold"  size="md">
                LIVRAISON
              </Typography></legend>

              <div className="flex2">
            <div className="flex-item2">
            <Typography size="sm">
            Adresse livraison :
              </Typography>
              <Typography size="sm">
              Pays :
              </Typography>
              <Typography size="sm">
              Gouvernorat :
              </Typography>
              <Typography size="sm">
              Ville:
              </Typography>
              <Typography size="sm">
              Rue :
              </Typography>
              <Typography size="sm">
              Code postal:
              </Typography>
            </div>
            <div className="flex-item2">
            <Typography size="sm" weight="bold">
               {this.state.data.adresse_livraison}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.pays_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.govvernorat_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.ville_adresse_facturation_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.rue_adresse_facturation_liv}
              </Typography>
              <Typography size="sm" weight="bold">
              {this.state.data.code_postal_adresse_liv}
              </Typography>
            </div>
        
        </div>
        <div className="popp"> 
              <Popup 
    trigger={<Button variant="outlined" 
    style={{  width: '100px',height:"20px" }}
    onClick={this.ajoutcommentaire}
    disabled={this.aziz==0}
    
    >Modifer </Button>}
    onClose={this.onclose}
    modal
    closeOnDocumentClick
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Client  </div>
        <div className="content" align="center">
          
        
          {" "}
<br></br>
         <Modif_l data={this.state.data}></Modif_l>
                  <br></br>
    
        </div>
      
      </div>
    )}
  
  </Popup>
              </div>
        </fieldset>
</form>
<br/> <br/> <br/>








    </div>
    
</div>


</div>


                </div>




            </Widget>
            </Grid>

     </div>
            
        )
    
    
    
    
    
    }

 }
 

 export default clientdetail