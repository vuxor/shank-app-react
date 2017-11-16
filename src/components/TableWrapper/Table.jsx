import React from 'react';

export class Table extends React.Component {
	constructor() {
		super()
		this.openMenu = this.openMenu.bind(this)
	}

	openMenu() {
		console.log('openMenu', this)
	}

  render() {
    return (
     <div className="table" onClick={this.openMenu}>
			 {this.props.brojStola}
      </div>
    );
  }
}
    