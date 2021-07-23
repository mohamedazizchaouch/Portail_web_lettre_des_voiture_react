
import React, { Component } from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import Inscrir from './Inscrir/Inscrir';
import Options from './Options/Options';


const config = {
    botName:"brag",
  initialMessages: [
      createChatBotMessage(`Bonjour, comment je peut vous aider ? 😊😊`,{
      widget:"Options",
  }),
],
  widgets:[
    {
        widgetName: "Options",
        widgetFunc: (props) => <Options{...props} />,
       // mapStateToProps: ["gist"],
      },
      {
        widgetName: "Inscrir",
        widgetFunc: (props) => <Inscrir{...props} />,
       // mapStateToProps: ["gist"],
      },
  ]
}

export default config