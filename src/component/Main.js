import React,{Component} from 'react';
const menuroti =[{nama:"Roti Tawar",harga:12000},{nama:"Roti Keju",harga:15000},{nama:"Roti Coklat",harga:2000}];

class Main extends Component{
constructor(props){
super(props);
this.state ={
data : "Menu Makanan",
data2 : "Menu Minuman",
inputvalue:"",
inputvalue2:"",
menumakanan :[{nama : "Ayam Goreng",harga:10000},{nama:"Ayam Bakar",harga:15000},{nama : "Ayam Sayur",harga : 15000}]
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
<h2>Menu Makanan</h2>
{this.state.menumakanan.map((value, index)=>{
return(
  <div key={index}>
  <p>No.{index + 1}</p>
 <p>Nama Makanan : {value.nama}</p>
 <p>Harga : {value.harga}</p>
  </div>
)
})}
<h2>Menu Minuman</h2>
{this.props.menuminuman.map((value, index)=>{
return(
  <div key={index}>
  <p>No.{index +1}</p>
  <p>Nama Minuman : {value.nama}</p>
  <p>Harga : {value.harga}</p>
  </div>
)
})}
<h2>Menu Roti</h2>
{menuroti.map((value, index)=>{
return(
<div key={index}>
<p>No.{index+1}</p>
<p>Jenis Roti : {value.nama}</p>
<p>Harga : {value.harga}</p>
</div>
)
})}

</div>
)
};



}

export default Main;
