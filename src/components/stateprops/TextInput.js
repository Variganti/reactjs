import React, { Component } from 'react'

import TextDisplay from './TextDisplay'

//controlled comp vss uncontrolled
//synthetic event
//validation based on state and dynamically load comp

export default class TextInput extends Component {

    state={ inputText:'Krishna'}
handleChange(event)
{
    this.setState({inputText:event.target.value})
}

  render() {
    return ( 
      <div>
        Company : <input type="text" id="txt" /> <br/> <br/>
        Email : <input type="email" value="support@jpmc.com" /> <br/> <br/>
        Username : <input type="text" value={this.state.inputText} 
        onChange={(event)=> this.handleChange(event)} /> 

        {this.state.inputText?console.log('valid'):console.log('invalid data')}

        {this.state.inputText
            ?<TextDisplay textProp={this.state.inputText}/>
            :<TextDisplay textProp='enter username please' /> }
        
        

      </div>
    )
  }
}
