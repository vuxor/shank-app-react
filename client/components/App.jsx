import React from 'react';
import {Header} from './Header';
import {Footer} from './Footer';

export default class App extends React.Component {
  render() {
    return (
     <div>
        <Header />
        <h1>Zdravo React</h1>
        <Footer />
      </div>);
  }
}
