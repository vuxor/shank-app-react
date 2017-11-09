import React from 'react';

export class Drink extends React.Component{
	render(){
		return(
			<div>
				<p>
					<img src={this.props.slika}/>
					<span>{this.props.naziv}</span>
					<span>{this.props.cena}</span>
				</p>
			</div>

		)
	}
}