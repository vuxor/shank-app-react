import React from 'react';
import './table.css'

export class Table extends React.Component {

  openDrinkMenu() {
    console.log('openDrinkMenu')
  }

  render() {
    return (
      <div className="table" onClick={this.openDrinkMenu}>
        {this.props.broj + 1}
      </div>
    )
  }
}
