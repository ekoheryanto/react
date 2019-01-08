import React,{Component} from 'react';

class Main extends Component{
constructor(props){
super(props);
this.state ={
data : "Menu Makanan",
data2 : "Menu Minuman",
inputvalue:"",
inputvalue2:""
};
this.handleklik = this.handleklik.bind(this);
this.handleonChange = this.handleonChange.bind(this);
}

// handleklik(){
// this.setState({data :"Silahkan Dipilih"});
// };

//setState yang dianjurkan
handleklik(){
this.setState((state, props)=>{
return{data:state.data2,
data2 :state.data}
});
};

handleonChange(value, e){
// console.log(e.target.value)
this.setState({[value]:e.target.value});
};

render(){
return(
<div>
<h3>{this.state.data}</h3>
<h3>{this.state.data2}</h3>
<button onClick={this.handleklik}>Rubah Data</button>
<br/>
<p>Negara</p>
<input type="text" placeholder="Nama" value={this.state.inputvalue} onChange={e=>this.handleonChange("inputvalue",e)}/>
<input type="text" placeholder="Kota" value={this.state.inputvalue2} onChange={e=>this.handleonChange("inputvalue2",e)}/>
</div>
)
};



}

export default Main;
