import React, { Component } from 'react'
import { PieChart } from '@opd/g2plot-react'
import axios from 'axios';


export class Stat_carnet extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           dataa: []
        }
      }
      componentDidMount(){
        axios.get(`http://localhost:1919/api/stat/stat_nbrcarnet`)
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
        const config = {
            forceFit: true,
            title: {
              visible: true,
              text: '',
            },
            description: {
              visible: true,
              text:
                'Produit / carnet ',
            },
            radius: 0.8,
            data:this.state.dataa,
              
            angleField: 'nbr_carnet',
            colorField: 'nom_produit',
            label: {
              visible: true,
              type: 'inner',
            },
          }
        return (
            <div>
                  <PieChart {...config} />
            </div>
        )
    }
}

export default Stat_carnet
