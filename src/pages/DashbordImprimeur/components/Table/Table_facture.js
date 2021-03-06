import React from 'react';
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

export default function Table_facture({data}) {
    
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


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

  const envoyer_mail =(id)=>{
   console.log(id)
   axios.get("http://localhost:1919/api/imprimeur/envoie_mail_pdf/"+id)
  .then(response => {
   console.log(response)
  
   console.log("*********************** envoye PDF donneee")
 
   NotificationManager.success('Un mail contient la facture sous forme PDF a ??t?? envoyer avec success','', 3000);

})
.catch(error =>{
   console.log(error)
})
 
  }
  


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N?? commande</StyledTableCell>
            <StyledTableCell >Date commande</StyledTableCell>
            <StyledTableCell >Date estim??</StyledTableCell>
            <StyledTableCell >quantit??</StyledTableCell>
            <StyledTableCell >Produit</StyledTableCell>
            <StyledTableCell >Code Client</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
            <StyledTableCell ></StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ id, quntite, date_commande,date_creation_dossier ,num_commande,text_a_repliquer,prix_vente_HT,client,produit}) => (
            <StyledTableRow key={id}>
             
              <StyledTableCell>{num_commande}</StyledTableCell>
              <StyledTableCell >{date_commande.substring(0,10)}{" | "}{date_commande.substring(11,19)}</StyledTableCell>
              <StyledTableCell >{date_creation_dossier.substring(0,10)}</StyledTableCell>
              <StyledTableCell >{quntite}</StyledTableCell>
              <StyledTableCell >{produit.nom_produit}</StyledTableCell>
              <StyledTableCell >{client.code_client}</StyledTableCell>
              <StyledTableCell > 
              <a download href={"http://localhost:1919/api/imprimeur/pdf_facture/"+num_commande}><Button color="primary" size="small"
     onClick={createNotification('success')}
  disableElevation startIcon={<PictureAsPdfIcon />} >Exporter PDF</Button></a>
             </StyledTableCell>
             <StyledTableCell > 
              <Button color="primary" size="small"
           onClick={()=>envoyer_mail(num_commande)}
           
     
  disableElevation startIcon={<MailIcon />} >Envoyer</Button>
             </StyledTableCell>
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
