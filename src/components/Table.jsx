import React from 'react';
import {Element} from 'react-stylesheet'

export class Table extends React.Component {

  render() {
    return (
     <div>
     	<Element id="table-1"
     		fontSize="23"
     		fontSizeOnHover="27"
     		width="100px"
     		height="100px"
     		background="#999"
     		backgroundOnHover="#000"
  			color="#000"
     		colorOnHover="#999"
     		cursorOnHover="pointer"
  			padding={10}>
  			Table 1
		</Element>
      </div>
    );
  }
}
    