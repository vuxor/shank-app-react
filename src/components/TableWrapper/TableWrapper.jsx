import React from 'react';
import { Table } from './Table';
import './style.css';

export class TableWrapper extends React.Component {

  render() {
    let nizStolova = []
    for (let i=0; i < this.props.brojStolova; i++) {
      nizStolova.push(<Table key={i} brojStola={i + 1} />)
    }
    return (
      <div className="table-wrapper">
        {nizStolova}
      </div>
    )
  }

}
