import React, {Component} from 'react';

class Form extends Component {
constructor(props){
super(props);
this.state= {value:""};
this.handleonChange = this.handleonChange.bind(this);
this.handleonSubmit = this.handleonSubmit.bind(this);
}

handleonChange(e){
this.setState({value:e.target.value});
};

handleonSubmit(e){
  e.preventDefault();
  alert("Nama Anda : "+ this.state.value)
}

render(){
return(
<div>
<form onSubmit={this.handleonSubmit}>
<input type="text" placeholder="Masukan Nama" value={this.state.value} onChange={this.handleonChange}/>
<input type="submit" value="Submit data"/>
</form>
</div>
    );
  }
}

export default Form;
