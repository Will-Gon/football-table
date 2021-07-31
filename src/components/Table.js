import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

const Table = (props) => {

    return (
        <div>
          <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Touchdowns</th>
            <th>Catches</th>
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