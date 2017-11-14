import React from 'react';
import './table.css'

export class Table extends React.Component {

  render() {
    return (
      <div className="table">
        {this.props.broj + 1}
      </div>
    )
  }
}
