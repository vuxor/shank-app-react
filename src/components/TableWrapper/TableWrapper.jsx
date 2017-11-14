import React from 'react';
import {Table} from './Table';
import './table.css'

export class TableWrapper extends React.Component {

  render() {
    let stolovi = []
    for (var i = 0; i < this.props.brojStolova; i++) {
      stolovi.push(<Table broj={i} key={i} />)
    }
    return (
      <div className="table-wrapper">
        {stolovi}
      </div>
    )
  }

}
