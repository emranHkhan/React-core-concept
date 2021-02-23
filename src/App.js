// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person hero="rubel" heroine="brie larson" ></Person>
        <Person hero="mashrafee" heroine="natalie portman"></Person>
        <p style={{backgroundColor: 'cyan', padding: '10px', textTransform: 'uppercase', color: 'black'}}>hello React</p>
      </header>
     
    </div>
  );
}

//It is a component
function Person(props){
  return (<div style={{border: '2px solid black', padding:'10px', margin: '10px'}}>  
     <h1>hello {props.hero}</h1>
     <h2>hi {props.heroine}</h2>
  </div>
  );
} 

export default App;
