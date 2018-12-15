import React, { Component } from 'react';

class Header extends Component{
  constructor(props){
  super(props);
  this.state = {
    data : "Daftar Makanan Nusantara",
    datalist : this.props.list
  };
  this.handleklik = this.handleklik.bind(this);
}

handleklik(value, e){
e.preventDefault();
alert(this.state.data);
alert(value);
};

  render(){
    return(
      <div>
      <h1>Makanan Nusantara</h1>
      <p>{this.state.data}</p>
      <p>{this.state.datalist}</p>
      <a href="/" onClick={e=>this.handleklik("Pesan Dari Header",e)}>Header</a>
      </div>
    );
  }
}

export default Header;
