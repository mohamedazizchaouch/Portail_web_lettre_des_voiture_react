import React, { Component } from 'react'
import  './Stl.css'
import Chatbot from 'react-chatbot-kit'
import Config from './Config'
import ActionProvider from './ActionProvider'
import MessageParser from './MessageParser'
import bot from './robot.svg'
import { ConditionallyRender } from "react-util-kit";




export class Chattbot extends Component {

    constructor(props) {
        super(props) 
      
        this.state = {
            showChatbot:false
           
        }
      }

      aziz=()=>{
          if(this.state.showChatbot==false){
            this.setState({showChatbot: true},()=>{
                console.log(this.state.showChatbot)
                this.setState({showChatbot: true})
            })
          }else{
            this.setState({showChatbot: false},()=>{
                console.log(this.state.showChatbot)
                this.setState({showChatbot: false})
            })
          }
         
      }

    render() {
        return (
            <div className="app">
                <div style={{maxWidth: "300px"}}>
                   
                <ConditionallyRender
            ifTrue={this.state.showChatbot}
            show={
                <Chatbot
                config={Config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
                
                >
                   


                </Chatbot>
            }
          />
                

                </div>
                <button
          className="app-chatbot-button"
          onClick={this.aziz
            }
        >
          <img src={bot} alt="bot" />
        
        </button>
            </div>
        )
    }
}

export default Chattbot
