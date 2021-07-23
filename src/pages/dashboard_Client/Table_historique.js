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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { Typography } from "../../components/Wrappers";
import { TextareaAutosize, TextField } from '@material-ui/core';
import AjoutCommande from '../dashbordAdmin/AjouterCommande/AjoutCommande';
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
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

export default function Table_historique({data}) {
    
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [serch, setSerch] = React.useState("");
  const [qun, setQun] = React.useState(0);
  const [ida, setIda] = React.useState(0);
  const [idi, setidi] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [open, setOpen] = React.useState( false);


  useEffect(() => {

    axios.get("http://localhost:1919/api/client/count/"+localStorage.getItem('id'))
    .then(response => {
      console.log("***************************************count")
     console.log(response.data)
     setCount(response.data)
     console.log(count)
     console.log("***************************************count")
   if (count !=0){
    NotificationManager.info('Renouveler commande','vous ne pouvez pas renouveler une commande car deja vous avez une autre commande encours');
   }

 })
 .catch(error =>{
     console.log(error)
 })
    // Met à jour le titre du document via l’API du navigateur
    
  },);

  const AjoutCommande = (id) =>{
    console.log(id);
    axios.get("http://localhost:1919/api/commande/"+id)
    .then(response => {
     console.log(response)
     console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
     let cmd={
        date_commande : new Date(),
        etat_commande : 'Encours_BAT',
        frais_transport_achat_HT	: response.data.frais_transport_achat_HT,
        prix_achat_HT:response.data.prix_achat_HT,
        prix_vente_HT: response.data.prix_vente_HT,
        quntite: qun,
        ref_commercial:response.data.ref_commercial,
        text_a_repliquer:response.data.text_a_repliquer
     }

     axios.post(`http://localhost:1919/api/commande/${response.data.admin_vente.id}`,cmd)
  .then (rr => {
    //afecter client
    console.log("******************** fich")
    console.log(response.data)
   let fich={
      url_fichier:response.data.fichier_BAT.url_fichier
    }
    console.log(fich)
    
      console.log(rr)
      //afecter produit
      axios.get(`http://localhost:1919/api/commande/aff_p_to_c/${response.data.produit.id_produit}/${rr.data.num_commande}`)
      .then (r=> {
          console.log(r)
          axios.get(`http://localhost:1919/api/commande/aff_c_to_com/${rr.data.num_commande}/${localStorage.getItem('id')}`)
          .then (r=> {
              console.log(r)
              //affecter imprimeur 

              axios.get("http://localhost:1919/api/commande/aff_i_to_c/"+response.data.imprimeur.id+"/"+rr.data.num_commande)
              .then(rrr => {
               console.log(rrr)
              
               axios.post(`http://localhost:1919/api/fichier/${response.data.imprimeur.id}/${rr.data.num_commande}`,fich)
               .then (L => {
                   console.log(L)
                    //affiche  comm num 1 
                    NotificationManager.success('Depot Fichier BAT', 'Fichier deposé avec succes', 3000);
                   
             
               })
               .catch(error => {
                   console.log(error)
               });
           })
           .catch(error =>{
               console.log(error)
           })
             
          })
          .catch(error => {
              console.log(error)
          });
         
      })
      .catch(error => {
          console.log(error)
      });
  })
  .catch(error => {
      console.log(error)
  });

     console.log(cmd)
   //  this.setState({data: response.data})
   let c =response.data.admin_vente.id
   console.log(c+"aaaaaaaaaaaaaaaaaaaa")
   let z =response.data.imprimeur.id


 })
 .catch(error =>{
     console.log(error)
 })

    setOpen(false);
    NotificationManager.success('Renouveler commande','Commande renouveler avec succes ');
}
console.log("ida"+ida)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);}

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleChangeserch = (event) => {
    let value =event.target.value;
   setSerch(value);
  
  }
  const handleChangequn = (event) => {
    let value =event.target.value;
   setQun(value)
  
  }
  console.log(qun)

  return (
    
    <TableContainer component={Paper}>
      <br></br>
    
     
        <br></br>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N° commande</StyledTableCell>
            <StyledTableCell >Date commande</StyledTableCell>
            <StyledTableCell >Date_creation_dossier</StyledTableCell>
            <StyledTableCell >quantité</StyledTableCell>
            <StyledTableCell >Produit</StyledTableCell>
            <StyledTableCell >Imprimeur</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((val) => (
            <StyledTableRow key={val.id}>
             
              <StyledTableCell>{val.num_commande}</StyledTableCell>
              <StyledTableCell >{val.date_commande.substring(0,10)}{" | "}{val.date_commande.substring(11,19)}</StyledTableCell>
              <StyledTableCell >{val.date_creation_dossier.substring(0,10)}</StyledTableCell>
              <StyledTableCell >{val.quntite}</StyledTableCell>
              <StyledTableCell >{val.produit.nom_produit}</StyledTableCell>
              <StyledTableCell >{val.imprimeur.contact_imp}</StyledTableCell>
              <StyledTableCell >
              <Button color="primary" size="small"
           onClick={handleClickOpen}
           disabled={count!= 0}
     
  disableElevation startIcon={<NewReleasesIcon />} >renouveler commande </Button>
              </StyledTableCell>
              
              <Dialog
        open={open}
        onClose={()=>handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Renouveler commande'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Vous est sur de renouveler cette commande ?
          <br></br><br></br>
          <div align="center">
          <Typography >
              Quantité :
              </Typography>
              <TextField
    id="date"
    style={{  width: '200px' }}
    type="number"
    value={qun}
  // defaultValue={this.state.cmd.quntite}
   onChange={handleChangequn}
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
      onClick={()=>AjoutCommande(val.num_commande)} 
          color="primary" autoFocus>
         Renouveler commande
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
        <NotificationContainer></NotificationContainer>
    </TableContainer>
  );
}
