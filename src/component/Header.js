import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
  super(props);
  this.state = {
    data : "Daftar Makanan Nusantara",
    datalist : this.props.list,
    statusRendering : true

  };
  this.handleklik = this.handleklik.bind(this);
}

handleklik(value, e){
e.preventDefault();
alert(this.state.data);
alert(value);
};

/*componentDidMount akan jalan secara otomatis setelah rendering*/
componentDidMount (){
console.log("jalan : componentDidMount")

}

  render(){
    console.log("jalan : Render")
    /*penulisan kondisi rendering inline*/
    return(
      <div>
       {this.state.statusRendering === true ? (<h1>Selamat Datang</h1>):(<h1>Selamat Tinggal</h1>)}
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
