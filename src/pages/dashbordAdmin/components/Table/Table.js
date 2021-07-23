import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

// components
import { Button } from "../../../../components/Wrappers";


const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
         
            <TableCell ><strong>Numero commande</strong></TableCell>
            <TableCell ><strong>date creation</strong></TableCell>
            <TableCell ><strong>date commande</strong></TableCell>
            <TableCell ><strong>quantité</strong></TableCell>
            <TableCell ><strong>produit</strong></TableCell>
            
            <TableCell ><strong>text a repliquer</strong></TableCell>
            <TableCell ><strong>prix vente HT</strong></TableCell>
            <TableCell ><strong>client</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, quntite, date_commande,date_creation_dossier ,num_commande,text_a_repliquer,prix_vente_HT,client,produit}) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{num_commande}</TableCell>
            <TableCell className="pl-3 fw-normal">{date_creation_dossier}</TableCell>
            <TableCell className="pl-3 fw-normal">{date_commande}</TableCell>
           
            <TableCell className="pl-3 fw-normal">{quntite}</TableCell>
            <TableCell className="pl-3 fw-normal">{produit.nom_produit}</TableCell>
            <TableCell className="pl-3 fw-normal">{text_a_repliquer}</TableCell>
            <TableCell className="pl-3 fw-normal">{prix_vente_HT}</TableCell>
            <TableCell className="pl-3 fw-normal">{client.code_client}</TableCell>
            
             
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
