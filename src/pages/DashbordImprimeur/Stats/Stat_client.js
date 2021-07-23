import React, { Component } from 'react'
import { BarChart } from '@opd/g2plot-react'
import axios from 'axios';

export class Stat_client extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           dataa: []
        }
      }
      componentDidMount(){
        axios.get(`http://localhost:1919/api/stat/stat_nbrclient`)
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
            text: ' ',
          },
           
          description: {
            visible: true,
            text: "Commande / Client"
          },
          forceFit: true,
          data:this.state.dataa,
          padding: 'auto',
          xField: 'count',
          yField: 'nom',
          meta: {
            nom: {
              alias: 'client',
            },
            count: {
              alias: 'Nombre Commande',
            },
          },
          }
        return (
            <div>
              <BarChart {...config} />  
            </div>
        )
    }
}

export default Stat_client
