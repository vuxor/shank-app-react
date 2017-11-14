import React from 'react';
import {Drink} from './Drink.jsx'
import pica from '../../../podaci/pica.json'

export class DrinkMenu extends React.Component{
	render(){
		const DOMelementi = pica.map((pice, i) =>
			<Drink naziv={pice.naziv} cena={pice.cena} slika={pice.slika} key={i} />
		)
		return(
			<div>
        {DOMelementi}
			</div>
		)
	}
}
