import React, { Component } from 'react'
import { ColumnChart } from '@opd/g2plot-react'
import axios from 'axios';


export class Stat_Produit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataa:[]
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:1919/api/stat/stat_refproduit`)
    .then(response => {
     console.log(response)
     
     this.setState({dataa: response.data})
     console.log("notree dataa ", this.state.dataa)

 })
 .catch(error =>{
     console.log(error)
 })
    }
    
    render() {

        const config = {title: {
            visible: true,
            text: '',
          },
          description: {
            visible: true,
            text: "Commande / Produit"
          },
          forceFit: true,
          data:this.state.dataa,
          padding: 'auto',
          xField: 'nom_produit',
          yField: 'count',
          meta: {
            _id: {
              alias: 'couleur',
            },
            count: {
              alias: 'nbr commande',
            },
          },
          }
        return (
            <div>
               <ColumnChart {...config} />   
            </div>
        )
    }
}

export default Stat_Produit
