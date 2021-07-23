class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase()

      if (lowercase.includes("bonjour")||lowercase.includes("salut")||lowercase.includes("bonsoir")){
          this.actionProvider.greet()
      }
      if(lowercase.includes("information")||lowercase.includes("present")){
        this.actionProvider.presentation()

      }
      if(lowercase.includes("inscri")){
        this.actionProvider.presentation()

      }
    }
  }

  export default MessageParser;