import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {TableWrapper} from './TableWrapper/TableWrapper';
import {DrinkMenu} from './DrinkMenu/DrinkMenu';

export default class App extends React.Component {
  render() {
    return (<div>
      <Header/>
      <TableWrapper brojStolova="12"/>
      <DrinkMenu/>
      <Footer/>
    </div>)
  }
}
