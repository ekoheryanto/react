import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import List from './List';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <List />
        <Footer name ="Makanan Khas Nusantara dari sabang s/d merauke" tahun ="2018"/>
      </div>
    );
  }
}

export default App;
