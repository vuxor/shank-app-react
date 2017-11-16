import React from 'react';
import {Drink} from './Drink.jsx'
import pica from '../../../podaci/pica.json'
import './style.css';

export class DrinkMenu extends React.Component{

	render(){
		var pripremljenaPica = pica.map((pice, i) => {
			return <Drink key={i} naziv={pice.naziv} cena={pice.cena} slika={pice.slika} />
		})

		return(
			<div className="drink-menu">
				{pripremljenaPica}
			</div>

		)
	}
}
