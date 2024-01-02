
import './App.css';
import One from './Components/simple';
import Display from './Components/multipleasO';
import Two from './Components/destruct';

function App() {
  return (
    <div className="App">
      <One name="Raj" lastname="Jani" age="23"/>
      <Display/>  
      <Two name="John" age="5"/>
      

    
    </div>
  );
}

export default App;
