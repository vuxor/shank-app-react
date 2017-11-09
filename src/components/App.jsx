import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Table} from './Table';
import {DrinkMenu} from './DrinkMenu';

export default class App extends React.Component {
  render() {
    return (

     <div>
        <Header />
        <h1>Shank App</h1>
        <Table />
        <DrinkMenu />
        <Footer />
      </div>

  );
  }
}
