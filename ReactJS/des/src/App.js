
import './App.css';
import Greet from './components/g';
import Double from './components/g2';
import Display from './components/g3';

function App() {
  return (
    <div className="App">
    <Greet name="Raj" heroname="Ironman"/>
    <Double name="Raj" heroname="Spiderman"/>
    <Display/>
    </div>
  );
}

export default App;
