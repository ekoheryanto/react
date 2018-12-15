import React,{Component} from 'react';

class Main extends Component{
constructor(props){
super(props);
this.state ={
data : "Menu Makanan",
data2 : "Menu Minuman"
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

handleonChange(){
console.log('jalan')

};

render(){
return(
<div>
<h3>{this.state.data}</h3>
<h3>{this.state.data2}</h3>
<button onClick={this.handleklik}>Rubah Data</button>
<br/>
<br/>
<input type="text" placeholder=" nama anda" onChange={this.handleonChange}/>
</div>
)
};



}

export default Main;
