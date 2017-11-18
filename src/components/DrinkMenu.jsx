import React from 'react';

import {Drink} from './Drink.jsx'

export class DrinkMenu extends React.Component {
  render() {
    return (
      <div>
        <Drink naziv="lasko" cena="300" slika="img/limunada.png" />
      </div>
    );
  }
}
