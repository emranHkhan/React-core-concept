// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const Actors = ['Tom cruise', 'Brad Pitt', 'Leonardo Dicaprio', 'Tom Hanks', 'Sylvester Stalone'];

function App() {
  const style = {
    opacity: 0.8,
    padding: '10px',
    color: '#fff'
  }

  const info = [
    {
      age: 31,
      spouse: 'Mr. X',
      destination: 'Hollywood'

    },

    {
      age: 30,
      spouse: 'Mrs. Y',
      destination: 'Hollywood'
    },

    {
      age: 32,
      spouse: 'unknown',
      destination: 'Hollywood'
    }

  ];


  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>offer</li>
          </ul>
        </nav>
        <p style={style}>I am creating something new with REACT. I hope it will be fun!</p>

        <CountHandler></CountHandler>
         
        {
          info.map(person => <Greetings data={person}></Greetings>)
        }

        <ul style={{ padding: '10px' }}>
          {
            Actors.map(actor => <li>{actor}</li>)
          }
        </ul>

        <Users></Users>


      </header>

    </div>
  );
}


function Greetings(props) {

  const style = { border: '2px solid limegreen', padding: "10px", margin: "10px" };
  const { age, spouse, destination } = props.data;
  return (

    <div style={style}>
      <p>Age: {age}</p>
      <p>Spouse: {spouse}</p>
      <p>Destination: {destination}</p>
    </div>

  );
}

function CountHandler() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDeacrease = () => count <= 0 ? setCount(0) : setCount (count - 1);
 

  return (
    <div className="counter">
      <h1>Count: {count}</h1>
      <button className="btn" onClick={handleDeacrease}>Decrease</button>
      <button className="btn" onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}

export default App;
