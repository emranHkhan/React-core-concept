// import logo from './logo.svg';
import './App.css';

const Actors = ['Tom cruise', 'Brad Pitt', 'Leonardo Dicaprio', 'Tom Hanks', 'Sylvester Stalone'];

function App() {
  const style = {
    backgroundColor: 'cyan',
    opacity: 0.8,
    padding: '10px',
    color: 'black'
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

       

        {
          info.map(person => <Greetings data={person}></Greetings>)
        }

        <ul style={{padding: '10px'}}>
          {
            Actors.map(actor => <li>{actor}</li>)
          }
        </ul>


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

export default App;
