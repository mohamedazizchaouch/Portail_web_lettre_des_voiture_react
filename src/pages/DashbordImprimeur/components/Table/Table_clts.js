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
import { TextareaAutosize, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';


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

export default function Table_vals({data}) {
    
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const  [serch, setSerch] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeserch = (event) => {
    let value =event.target.value;
    setSerch(value)
    
  };
  console.log(serch)
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div>
      <div align="center">
      <Paper>
 <TextField id="standard-size-small" defaultValue="0" 
              onChange={handleChangeserch}
              value={serch}
              placeholder="Rechercher"
              style={{  width: '190px' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon></SearchIcon></InputAdornment>,
              }}
              /> </Paper></div>

    <TableContainer component={Paper}>
     
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell ></StyledTableCell>
            <StyledTableCell>Code Client</StyledTableCell>
            <StyledTableCell>Raison social</StyledTableCell>
            <StyledTableCell >Adresse Livraison</StyledTableCell>
            <StyledTableCell >Gouvernorat</StyledTableCell>
            <StyledTableCell >Ville </StyledTableCell>
            <StyledTableCell >Rue </StyledTableCell>
            <StyledTableCell >Code postal</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((val)=>{
            return val.code_client.includes(serch)
          })
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((val) => (
            <StyledTableRow key={val.id}>
                 <StyledTableCell> <img src={`http://localhost/Images/i1`} style={{ height: '70px', width: '70px' }}/></StyledTableCell>
             
              <StyledTableCell>{val.code_client}</StyledTableCell>
              <StyledTableCell >{val.raison_social}</StyledTableCell>
              <StyledTableCell >{val.adresse_livraison}</StyledTableCell>
              <StyledTableCell >{val.govvernorat_liv}</StyledTableCell>
              <StyledTableCell >{val.ville_adresse_facturation_liv}</StyledTableCell>
              <StyledTableCell > {val.rue_adresse_facturation_liv}</StyledTableCell>
              <StyledTableCell > {val.code_postal_adresse_liv}</StyledTableCell>
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
    </TableContainer></div>
  );
}
