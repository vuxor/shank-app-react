import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Table} from './Table';
import {DrinkMenu} from './DrinkMenu';
import {Menu} from './Menu';

export default class App extends React.Component {
  render() {
    return (

     <div>
        <Header />
        <h1>Shank App</h1>
        <Table />
        <Menu/>
        <DrinkMenu />
        <Footer />
      </div>

  );
  }
}
