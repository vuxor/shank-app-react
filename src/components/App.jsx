import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {TableWrapper} from './TableWrapper/TableWrapper';
import {DrinkMenu} from './DrinkMenu/DrinkMenu';

export default class App extends React.Component {
  render() {
    return (

     <div>
        <Header />
        <h1>Shank App</h1>

        <TableWrapper brojStolova="6" />
        <DrinkMenu />
        <Footer />
      </div>

  );
  }
}
