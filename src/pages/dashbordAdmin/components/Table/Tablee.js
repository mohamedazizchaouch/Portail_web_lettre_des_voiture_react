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
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from "../../../../components/Wrappers";
import DetailsIcon from '@material-ui/icons/Details';


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

export default function Tablee({data}) {
    
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [serch, setSerch] = React.useState("");

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
  console.log(serch)


  return (
    <TableContainer component={Paper}>
      <br></br>
      <div align="center">
      <Typography size="sm"  weight="bold">
               Rechercher :
              </Typography>
<SearchIcon></SearchIcon> 
      <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
         // value={age}
        //  onChange={handleChange}
       // placeholder="Rechercher"
        style={{  width: '190px' }}
       onChange={handleChangeserch}
        value={serch}
       
        >
          <MenuItem value="Encours_BAT">
         Fichier en cours 
          </MenuItem>
          <MenuItem value="Attente_validation">
          Fichier en Attente de validation
          </MenuItem>
          <MenuItem value="Modification_BAT">
          Fichier en modification
          </MenuItem>
          <MenuItem value="Bat_refuser">
          Fichier refuser
          </MenuItem>
          <MenuItem value="BAT_accepter">
          Fichier accepter
          </MenuItem>
          <MenuItem value="Impression">
          Commande en impression 
          </MenuItem>
          <MenuItem value="Livraison">
          Historique Commande
          </MenuItem>
          
        </Select>
      </div>
     
        <br></br>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>N° commande</StyledTableCell>
            <StyledTableCell >Date commande</StyledTableCell>
            <StyledTableCell >quantité</StyledTableCell>
            <StyledTableCell >Produit</StyledTableCell>
            <StyledTableCell >Client</StyledTableCell>
            <StyledTableCell >Etat</StyledTableCell>
            <StyledTableCell ></StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((val)=>{
            return val.etat_commande.includes(serch)
          }).
          slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((val) => (
            <StyledTableRow key={val.id}>
             
              <StyledTableCell>{val.num_commande}</StyledTableCell>
              <StyledTableCell >{val.date_commande.substring(0,10)}{" | "}{val.date_commande.substring(11,19)}</StyledTableCell>
              <StyledTableCell >{val.quntite}</StyledTableCell>
              <StyledTableCell >{val.produit.nom_produit}</StyledTableCell>
              <StyledTableCell >{val.client.code_client}</StyledTableCell>
              <StyledTableCell >{val.etat_commande}</StyledTableCell>
              
              <StyledTableCell > 
              <Button color="primary" size="small"
    component={Link}
    to={"/app/detailCmd/"+ val.num_commande}
  disableElevation startIcon={<DetailsIcon />} >
  Plus de details 
</Button>
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
    </TableContainer>
  );
}
