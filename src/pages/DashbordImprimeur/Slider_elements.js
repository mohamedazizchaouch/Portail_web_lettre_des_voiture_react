import React, { Component } from 'react'
import Slider from "react-slick";
import Grid_element from './Grid_element';
import axios from 'axios'
import "../../../node_modules/slick-carousel/slick/slick.css";

import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export class Slider_elements extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :[],
           
        }
      }


    componentDidMount(){
        console.log("slider element ********************************")
        console.log(this.props.id_cmd)
        axios.get(`http://localhost:1919/api/element/bycomm/${this.props.id_cmd}`)
        .then(response => {
  
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
         console.log(response)
         
         this.setState({data: response.data});
         console.log(this.state.data)
         console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$")
        console.log(this.state.data[0].url_element_graphique.substring(12))
         
        // console.log(response.data[0].image)
    
        
    
     })
     .catch(error =>{
         console.log(error)
     })
    }
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div>
                 
        <Slider {...settings}>
        {this.state.data.map(({id,url_element_graphique}) => (
            <div key={id}>
           <Grid_element dataa={url_element_graphique}></Grid_element>
          </div>
))}
          
         
        </Slider>
            </div>
        )
    }
}

export default Slider_elements
