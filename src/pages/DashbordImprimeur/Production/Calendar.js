import React, { Component } from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject,EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import '../../../../node_modules/@syncfusion/ej2-base/styles/material.css'
import axios from 'axios'
import "../../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import EventIcon from '@material-ui/icons/Event';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "../../../components/Wrappers";


import { DataManager ,WebApiAdaptor } from '@syncfusion/ej2-data';
//import { defaultData } from './datasource';
import { extend } from '@syncfusion/ej2-base';


export class Demo extends Component {
  constructor() {
   
    super(...arguments);
    //this.data =extend([], this.dataa, null, true) 
  

  this.state ={
    data: []
  }
}

componentDidMount(){
   var dataa = [];


  axios.get("http://localhost:1919/api/commande/zzzz")
  .then(response => {
  
   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
  for(var a in response.data){
   var x={
      Id : response.data[a].id,
	Subject : response.data[a].subject,
	StartTime : new Date(response.data[a].startDate),
	EndTime : new Date(response.data[a].endDate),
	IsAllDay : response.data[a].isAllDay
    }
  dataa.push(x);

 }
 this.setState({data: dataa})
 
 console.log("******************************tabs")
 console.log(this.state.data)
 console.log(response.data)
})
.catch(error =>{
   console.log(error)
})

}



  render() {
    return (
      <div align="center">
         <Grid item xs={12} sm={3}>
          <Paper>
          <br></br>
         
          <Typography  weight="bold" variant="h6" >
          <EventIcon></EventIcon>Production:
              </Typography>
              <br></br>
          </Paper>
        </Grid> 
        <br></br> <br></br> <br></br> <br></br>
    
         <ScheduleComponent currentView="Month" eventSettings={{ dataSource: this.state.data }}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
</ScheduleComponent>
      </div>
    )
  }
}

export default Demo
