import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Table} from './Table';
import {Drink} from './Drink';
import {TableWrapper} from './TableWrapper';


export default class App extends React.Component {
  render() {
    return (
      
     <div>
        <Header />
        <h1>Shank App</h1>
        

        <TableWrapper />
        <Drink />
        <Footer />
      </div>
    
  );
  }
}
