import React,{Component} from 'react';

class CustomInput extends Component{
constructor(props){
super(props);
this.state={
  value:"input pertama"
  }
this.handleInput = this.handleInput.bind(this);
this.textInput = React.createRef();
this.handleonChange = this.handleonChange.bind(this);
}

handleonChange(e){
this.setState({value: e.target.value})

}

handleInput(){
this.setState({value:""})
this.textInput.current.focus();
}

render(){
return(
  <div>
  <input type="text" value={this.state.value} onChange={this.handleonChange} ref={this.textInput}/>
  <button onClick={this.handleInput}>Kirim</button>
  </div>
  )
 }
}

export default CustomInput;
