import React from 'react';
import  './Menu.css';
import CustomData  from '../../podaci/pica.json' //nije potrebna instalacija nikakvih modula samo se navede path

export class Menu extends React.Component{
	render(){
		var kartaPica=CustomData;
		//pravimo kopiju JSONa i pristupamo vrednostima objekta
		kartaPica=kartaPica.map(function(item,index){
			return(
				<tr key={index}>
						<td>{item.naziv}</td>
          	<td>{item.vrsta}</td>
						<td>{item.kolicina}</td>
						<td>{item.cena}</td>
						<td>{item.slika}</td>
				</tr>


			);
		});
		return(
			<div>
				<table className="tabela">
      			<caption>"NASA MALA KAFANA-CENOVNIK"</caption>
      				<tbody>
          			<tr>
              			<th>Pice:</th>
                  			<th>Vrsta:</th>
                      			<th>Kolicina:</th>
															<th>Cena:</th>
																<th>Slika</th>

                          </tr>
														{kartaPica}
													</tbody>
													</table>


			</div>

		)
	}
}
