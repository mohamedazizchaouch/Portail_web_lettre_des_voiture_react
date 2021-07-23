
import React from "react";

import "./Options.css";

const Options = (props) => {
    const options = [
      { text: "Qui sommes nous ?", handler:  props.actionProvider.presentation, id: 1 },
      { text: "S'inscrire a notre reseaux ?",  handler: props.actionProvider.Inscrir, id: 2 },
   
    ];
  
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}>
        {option.text}
      </button>
      
      
    ));
   
    return <div className="learning-options-container">{optionsMarkup} </div>;
  };
  
  export default Options;