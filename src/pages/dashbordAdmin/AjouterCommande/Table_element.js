
import React, { useState, useEffect,useCallback } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './stylee.css'
import Popup from 'reactjs-popup'
import axios from 'axios'
import { Typography } from "../../../components/Wrappers";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import OuvElement from './OuvElement';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);




const useStyles = makeStyles({
  table: {
    Width: 100,
    Height:200,
  },
});

 
export default function Table_element({data}) {
  const [open, setOpen] = React.useState( false);
  const [open1, setOpen1] = React.useState( false);
  const [tab, settab] = React.useState([]);
 const[a,seta]=React.useState(0);
  useEffect(() => {

    
    // Met à jour le titre du document via l’API du navigateur
    settab(data)
    console.log(tab)
   
  },);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const  supp = (id) => {
  seta(a+1)
 
   
 
  const index = 0;
    axios.delete(`http://localhost:1919//api/element/delete/${id}`)
     .then(response => {
      console.log(response)
  
      for(var a in tab){
        console.log(tab[a].id)
        console.log(tab.indexOf(tab[a]))
        if (tab[a].id==id){
          console.log(tab.indexOf(tab[a]))
          tab.splice(tab.indexOf(tab[a]),1)
        }
      }
    

 console.log("*********************index element suprimer")
 console.log(index)
 console.log("*********************index element suprimer")
     // console.log(response.data[0].image)
     
  
  })
  .catch(error =>{
      console.log(error)
  })
  
  };

  const handleClose = (id) => {
    setOpen(false);
   
  
      
    };
    const handleClose1 = (id) => {
      setOpen1(false);
     
    
        
      };
 


  
  const classes = useStyles();
  

  return (
  <div style={{  width: '550px' ,Height:'44400px'}}>

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nom Fichier</StyledTableCell>
            <StyledTableCell align="right">Ouvrir</StyledTableCell>
            <StyledTableCell align="right">Supprimer</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tab.map(({id,url_element_graphique}) => (
            <StyledTableRow key={id} >
              <StyledTableCell >
                {url_element_graphique.substring(12)} 
              </StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="outlined" 
    style={{  width: '150px' }}
    onClick={handleClickOpen1}

   >Ouvrir </Button>
              <Dialog
        open={open1}
        onClose={()=>handleClose1(id)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <OuvElement data={url_element_graphique.substring(12)}  ></OuvElement>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="primary">
            retour
          </Button>
          
        </DialogActions>
      </Dialog>
                



              </StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="outlined" 
    style={{  width: '150px' }}
    onClick={handleClickOpen}

   >Supprimer </Button>
   <Dialog
        open={open}
        onClose={()=>handleClose(id)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Suppression"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            vous etes sur de supprimer l'element {url_element_graphique.substring(12)} 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button 
         onClick={()=>supp(id)} 
          color="primary" autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
                
                
               </StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>
      );
}

