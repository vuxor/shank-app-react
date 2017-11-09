import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';
import {Table} from './Table';
import {Drink} from './Drink';

export default class App extends React.Component {
  render() {
    return (
      
     <div>
        <Header />
        <h1>Shank App</h1>
        <Table />
        <Drink />
        <Footer />
      </div>
    
  );
  }
}
