import Table from './components/Table';
import './App.css';
// import * as ReactBootStrap from 'react-bootstrap';

const App = () => {
  const players = [
    {catches: "", touchdowns: ""}
  ]

  const renderTable = (player, index) => {
    return (
      <tr key={index}>
        <td>{player.catches}</td>
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
