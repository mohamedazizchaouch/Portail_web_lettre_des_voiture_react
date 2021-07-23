class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }


    presentation=()=>{

     
        const message = this.createChatBotMessage(`une portail web qui va assurer une communication instantanée entre le client et l’imprimeur sur les détails de la commande ou on va assurer l’intervention du client pour avoir un produit convenable a ses besoins, cette communication va être assuré par l’intermédiaire d’un administrateur de vente. 😊😊 .`
        )
        const message2 = this.createChatBotMessage(`Notre  web  composé de trois partie (Admin de vente, Imprimeur, Client) 😊😊 .`
        )
        this.addMessageToState(message2);
        this.addMessageToState(message);
    };
 
    demande=()=>{

     
        const message = this.createChatBotMessage(`votre demande a été envoyer au administrateur.       
         Votre demande est en cours d'exécution 😊😊 .`
        )
        this.addMessageToState(message);
    };

    Inscrir=()=>{
        const message = this.createChatBotMessage("msg inscription",{
            widget: "Inscrir",
        }
        )
        this.addMessageToState(message);
    };
    greet=()=>{
const message= this.createChatBotMessage("Hello friend .",{
    widget: "Options",
})
this.addMessageToState(message);
    };
   
    
    addMessageToState =(message) =>{
        this.setState((prevState) =>({
            ...prevState,
            messages:[...prevState.messages,message],
        }));
    
    };
  }
  
  export default ActionProvider;