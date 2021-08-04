import Table from './components/Table/Table';
import './App.css';
// import * as ReactBootStrap from 'react-bootstrap';

const App = () => {
  const players = [
    {catches: 8, touchdowns: 2, yards: 50}
  ]

  const renderTable = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.catches}</td>
        <td>{player.yards}</td>
        <td>{player.touchdowns}</td>
      </tr>
    );
  };

  return (
    <div className="App">
      <Table players={players} rows={renderTable}/>
    </div>
  );
};

export default App;
