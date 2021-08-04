import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Table = (props) => {

    return (
        <div>
          <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Catches</th>
            <th>Yards</th>
            <th>Touchdowns</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map(props.rows)}
        </tbody>
      </ReactBootStrap.Table>  
        </div>
    )
};

export default Table;