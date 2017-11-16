import React from 'react';

export class Drink extends React.Component{
	constructor() {
		super()
		this.addDrink = this.addDrink.bind(this)
	}
	
	addDrink() {
		console.log(this.props.naziv)
	}

	render(){
		return(
			<p className="drink" onClick={this.addDrink}>
				<img src={this.props.slika}/>
				<span>{this.props.naziv}</span> <span>{this.props.cena}</span>
			</p>
		)
	}
}