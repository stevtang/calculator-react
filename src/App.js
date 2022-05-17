import './App.css';
import {useState} from 'react';
import Operators from './Operators';

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  function updateResults(){
    setResult(firstNum + secondNum);
  }

  function updateOperator(operation){
    setOperator(operation);
  }
  return (
    <div className="App">
      <Operators updateOperator={updateOperator} updateResults={updateResults}/>
    </div>
  );
}

export default App;
