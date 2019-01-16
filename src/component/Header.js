import React, { Component } from 'react';
import "./header.css";
const cssjudul = {color : "orange"};
class Header extends Component{
  constructor(props){
  super(props);
  this.state = {
    data : "Daftar Makanan Nusantara",
    datalist : this.props.list,
    statusRendering : false

  };
  this.handleklik = this.handleklik.bind(this);
  this.handleElement = this.handleElement.bind(this);
}

handleklik(value, e){
e.preventDefault();
alert(this.state.data);
alert(value);
};

handleElement(){
  this.setState((state, props)=>{
    return{statusRendering : !state.statusRendering }
  });
};

/*componentDidMount akan jalan secara otomatis setelah rendering*/
componentDidMount (){
console.log("jalan : componentDidMount")

}

  render(){
    console.log("jalan : Render")
    /*penulisan kondisi rendering inline
    1.Apabila dalam kondisi rendering lebih dari satu element maka harus memakai pembungkus <div>*/
    return(
      <div>
       {this.state.statusRendering === true ? (
         <div>
         <h1 style={{color:"white", backgroundColor:"green"}}>Selamat Datang</h1>
         <h2 style={cssjudul}>Silahkan Pilih Menu</h2>
         </div>
       ):(
         <div>
         <h1 id="judulnya">Terima Kasih Atas Kunjungan Anda</h1>
         <h2 className="judulkedua">Silahkan Datang Kembali</h2>
         </div>
       )}
       <button onClick={this.handleElement}>Rubah</button>
      </div>
    );
    // return(
    //   <div>
    //   <h1>Makanan Nusantara</h1>
    //   <p>{this.state.data}</p>
    //   <p>{this.state.datalist}</p>
    //   <a href="/" onClick={e=>this.handleklik("Pesan Dari Header",e)}>Header</a>
    //   </div>
    // );
  }
}

export default Header;
