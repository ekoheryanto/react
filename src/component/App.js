import React, { Component } from 'react';
import Header from './Header';
//import Main from './Main'
import Top from './Top';
import Footer from './Footer';
import Test from './Test';
//import List from './List';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div>
        <Header list="Makanan terbaik" />
        <Top/>
        <Form/>

        {
          //<Main menuminuman={[{nama : "Juisce Alpukat",harga:10000},{nama:"Juice Pepaya",harga:15000},{nama : "Juice Mangga",harga : 15000}]}/>
          //<List />
        }
        <Footer name ="Makanan Khas Nusantara dari sabang s/d merauke" tahun ="2018"/>
        <Test/>
      </div>
    );
  }
}

export default App;
