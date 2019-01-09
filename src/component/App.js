import React, { Component } from 'react';
import Header from './Header';
import Main from './Main'
import Top from './Top';
import Footer from './Footer';
import Test from './Test';
//import List from './List';


class App extends Component {
  render() {
    return (
      <div>
        <Header list="Makanan terbaik" />
        <Top/>
        <Main/>
        {
          //<List />
        }
        <Footer name ="Makanan Khas Nusantara dari sabang s/d merauke" tahun ="2018"/>
        <Test/>
      </div>
    );
  }
}

export default App;
