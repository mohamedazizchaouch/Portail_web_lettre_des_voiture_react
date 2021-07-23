import React, { Component } from 'react'
import Slider from "react-slick";
import Grid_element from './Grid_element';
import Grid_BAT from './Grid_BAT';
import axios from 'axios'
import "../../../node_modules/slick-carousel/slick/slick.css";

import "../../../node_modules/slick-carousel/slick/slick-theme.css";

export class Slider_BAT extends Component {
    constructor(props) {
        super(props) 
      
        this.state = {
           data :[],
           
        }
      }


    componentDidMount(){
        console.log("slider element ********************************")
        console.log(this.props.data)
        this.setState({data:this.props.data},()=>{
          this.setState({data:this.props.data})
          console.log(this.state.data)
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
                 
                 
          <div> 
            { this.props.data[0]!= null?(
              <div><Slider {...settings}>
              {this.props.data.map(({id,url_fichier}) => (
      <div>
      
        <Grid_BAT dataa={url_fichier}
     
        ></Grid_BAT>
      </div>
      ))}
                
               
      </Slider> </div>
            )
            :<div>
            
              </div>
              
              
              }
          </div>



            </div>
        )
    }
}

export default Slider_BAT
