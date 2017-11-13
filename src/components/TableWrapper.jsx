import React from 'react';
import {Element} from 'react-stylesheet';
import {Table} from './Table';


export class TableWrapper extends React.Component {
 
     render() {
   return (
       <Element className="TableWrapper"
             width="100%"
             height="100vh"
             border = "5px solid green">

                <Table />
                <Table />
                <Table />
                <Table />
 
       </Element>
   
   
   
        )
          }

}
