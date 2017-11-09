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











//
//export class Table extends React.Component {
//
//  render() {
//    return (
//     <div>
//     	<Element id="table-1"
//     		fontSize="23"
//     		fontSizeOnHover="27"
//     		width="100px"
//     		height="100px"
//     		background="#999"
//     		backgroundOnHover="#000"
//  			color="#000"
//     		colorOnHover="#999"
//     		cursorOnHover="pointer"
//  			padding={10}>
//  			Table 1
//		</Element>
//      </div>
//    );
//  }
//}
//    
//
//






