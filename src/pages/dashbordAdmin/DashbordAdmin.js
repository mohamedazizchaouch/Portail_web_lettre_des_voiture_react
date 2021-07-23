import React, { Component } from 'react'

import { faireRedirection} from "../../context/UserContext"
import './style.css'

import {
    Grid,
    LinearProgress,
    Select,
    OutlinedInput,
    MenuItem,
  } from "@material-ui/core";
  import Widget from "../../components/Widget/Widget"
  import PageTitle from "../../components/PageTitle";
  import { Typography } from "../../components/Wrappers";
  import MUIDataTable from "mui-datatables";
  //import { Button } from "../../components/Wrappers";
  import { Button } from '@material-ui/core';
  import 'reactjs-popup/dist/index.css';
  import SaveIcon from '@material-ui/icons/Save';
  import WorkIcon from '@material-ui/icons/Work';
  import { Paper } from '@material-ui/core';
  import PersonIcon from '@material-ui/icons/Person';
  import ButtonBase from '@material-ui/core/ButtonBase';
  import DetailsIcon from '@material-ui/icons/Details';
  import BlockIcon from '@material-ui/icons/Block';
  import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
  import { TablePagination } from '@material-ui/core';

import axios from 'axios';
import Table from "./components/Table/Table";
import { CenterFocusStrong } from '@material-ui/icons';
import Popup from 'reactjs-popup';
import FormClient from './FormClient';
import ClientForm from './ajout_client/ClientForm';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd'
 class DashbordAdmin extends Component {
    constructor(props) {
        super(props) 
     
        this.state = {
           data :[],
           tab :[],
           page:0,
           rowsPerPage:5,
           
        }
      }

      
      handleChangePage = (event, newPage) => {
        this.setState({page:newPage},()=>{
          console.log(this.state.page)
        })
      };

      handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage:+event.target.value},()=>{
          console.log(this.state.rowsPerPage)
        })
      this.setState({page:0},()=>{
        console.log(this.state.page)
      })
        
      };
      componentDidMount(){
      
        
         axios.get("http://localhost:1919//api/client")
         .then(response => {
          console.log(response)
          
          this.setState({data: response.data})
         
       
    
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
      <div >   <Popup 
    trigger={<Button color="primary" 
  variant="contained" disableElevation startIcon={<PersonAddIcon />} >Ajouter client</Button>}
    modal
    closeOnDocumentClick
    onClose={this.componentDidMount}
  > 
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> compte Client  </div>
        <div className="content">
          {" "}
    <ClientForm/>
        </div>
      
      </div>
    )}
  
  </Popup></div>
 </div>
 
                 
      <br></br>
  </Paper>
</Grid> 
<br></br><br></br>
</div>
             

              
             
               {this.state.data.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(({ id,etat, code_client, adresse_facturation,adresse_livraison ,code_postal_adresse_facturation,rue_adresse_facturation,ville_adresse_facturation}) => (

<div  style={{  flexGrow: 1, }}>
<Paper  style={{   margin: 'auto',
    maxWidth: 750, }}>
  <Grid container spacing={2}>
          <Grid item>
            <ButtonBase  style={{    width: 128,
    height: 128, }}>
              <img  style={{    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%', }} alt="complex" src="http://localhost/Images/i1" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                   Code Client :   {code_client}*
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Adresse_facturation :  {rue_adresse_facturation} | {ville_adresse_facturation} | {code_postal_adresse_facturation} | {adresse_facturation} *
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Adresse_livraison:   {rue_adresse_facturation} | {ville_adresse_facturation} |  {code_postal_adresse_facturation} | {adresse_livraison} *
                </Typography>
              
              </Grid>
              <Grid item>
              <Button color="primary" size="small"
              disabled={etat==false}
    component={Link}
    to={"/app/clientdtail/" + id}
  disableElevation startIcon={<DetailsIcon />} >
  Plus de details 
</Button>
              </Grid>
            </Grid>
            <Grid item>
              
            <Typography variant="body2" gutterBottom>état client </Typography>
             <div align="center">  {etat==false ? (
              <BlockIcon></BlockIcon>
             ):<CheckCircleOutlineIcon ></CheckCircleOutlineIcon>}</div>
              
            </Grid>
          </Grid>
        </Grid>
</Paper>
<br></br><br></br>

             </div>

        
            
           
        ))}
        
        <TablePagination rowsPerPageOptions={[5,10]}
        component="div"
        count={this.state.data.length}
        rowsPerPage={this.state.rowsPerPage}
        page={this.state.page}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />



    
    
     
        </div>
            
        )
    
    
    
    
    
    }

 }
 

 export default DashbordAdmin