import './App.css';
//Import components
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {
  //Write javascript here
  // const name = 'jfdcDevops'
  // const age = 39
  
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="home">
      <Nav />
      <Tweets  />
      </div>
      
    </div>
  );
}

export default App;
