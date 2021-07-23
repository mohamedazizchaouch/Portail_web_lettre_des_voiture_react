import React,{ useState, useEffect,useCallback } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import MailIcon from '@material-ui/icons/Mail';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import UpdateIcon from '@material-ui/icons/Update'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { Typography } from "../../../components/Wrappers";




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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];





const useStyles = makeStyles({
  table: {
    Width: 300,
  },
});

export default function Table_liv({data}) {
    
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [date, setdate] = React.useState(new Date());
  const [open, setOpen] = React.useState( false);
  const [tab, settab] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:1919/api/imprimeur/dossier_a_livrer/"+localStorage.getItem('id'))
    .then(response => {
     console.log(response)
     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
   
     settab(response.data)
   console.log(tab)

 })
 .catch(error =>{
     console.log(error)
 })
   
    // Met à jour le titre du document via l’API du navigateur
    
  },[]);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);}



  const  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Fichier expoter avec succes', '');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 let Commande={
    date_creation_dossier: new Date()
   }
 const handlechangedate = e=> {
    let d = e.target.value
    setdate(d)
    
   
  }
  Commande.date_creation_dossier=date
  console.log(date)
  console.log(Commande)
  const update_cmd =(id)=>{
    axios.put(`http://localhost:1919/api/commande/modifdate_etat/${id}`,Commande)
.then(response => {

   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")
   console.log(Commande)
 console.log(response)
 axios.get("http://localhost:1919/api/imprimeur/dossier_a_livrer/"+localStorage.getItem('id'))
 .then(response => {
  console.log(response)
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")

 settab(response.data)

})
.catch(error =>{
  console.log(error)
})
 
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$aaaa")


})
.catch(error =>{
 console.log(error)
})
setOpen(false);
NotificationManager.success('MAJ date ', 'date mis a jour, commande en production');
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N° commande</StyledTableCell>
            <StyledTableCell >Date commande</StyledTableCell>
            <StyledTableCell >Date estimé</StyledTableCell>
            <StyledTableCell >quantité</StyledTableCell>
            <StyledTableCell >Produit</StyledTableCell>
            <StyledTableCell >Code Client</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ></StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {tab.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, quntite, date_commande,date_creation_dossier ,num_commande,text_a_repliquer,prix_vente_HT,client,produit}) => (
            <StyledTableRow key={id}>
             
              <StyledTableCell>{num_commande}</StyledTableCell>
              <StyledTableCell >{date_commande.substring(0,10)}{" | "}{date_commande.substring(11,19)}</StyledTableCell>
              <StyledTableCell >{date_creation_dossier.substring(0,10)}{" | "}</StyledTableCell>
              <StyledTableCell >{quntite}</StyledTableCell>
              <StyledTableCell >{produit.nom_produit}</StyledTableCell>
              <StyledTableCell >{client.code_client}</StyledTableCell>
              <StyledTableCell > 
              <a download href={"http://localhost:1919/api/imprimeur/pdf_liv/"+num_commande}><Button color="primary" size="small"
     onClick={createNotification('success')}
  disableElevation startIcon={<PictureAsPdfIcon />} >Bon de livraison</Button></a>
             </StyledTableCell>
             <StyledTableCell > 
              <Button color="primary" size="small"
           onClick={handleClickOpen}
           
     
  disableElevation startIcon={<UpdateIcon />} >MAJ date livraison</Button>
             </StyledTableCell>
             
             <Dialog
        open={open}
        onClose={()=>handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Maj Date de livraison'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Veuillez choisir une nouvelle date de livraison 
          <br></br><br></br>
          <div align="center">
          <Typography >
              Date de livraison :
              </Typography>
              <TextField
    id="date"
    style={{  width: '200px' }}
    type="date"
   // defaultValue="2017-05-24"
   
    onChange={handlechangedate}
    value={date}
   disabled={false}
    InputLabelProps={{
      shrink: true,
    }}
  />
   
          </div>
         
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            retour
          </Button>
          <Button 
      onClick={()=>update_cmd(num_commande)} 
          color="primary" autoFocus>
         Confirmer
          </Button>
        </DialogActions>
      </Dialog>




            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination rowsPerPageOptions={[5,10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <NotificationContainer/>
    </TableContainer>
  );
}
