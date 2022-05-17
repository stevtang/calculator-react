import './App.css';
import {useState} from 'react';
import Operators from './Operators';
import Numbers from './Numbers';
import Display from './Display';

function App() {
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("0");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  function updateResults(){
    setResult(Number(firstNum) + Number(secondNum));
    setOperator(null);
    setFirstNum("0");
    setSecondNum("0");
  }

  function updateOperator(operation){
    setOperator(operation);
  }

  function updateNum(num) {
    let newFirstNum = firstNum.concat(num.toString());
    let newSecondNum = secondNum.concat(num.toString());
    if (operator === null) {
      setFirstNum(newFirstNum);    
    } else {
      setSecondNum(newSecondNum);
    }
  }
  
  return (
    <div className="App">
      <Operators updateOperator={updateOperator} updateResults={updateResults}/>
      <Numbers updateNum={updateNum} />
      <Display operator={operator} firstNum={firstNum} secondNum={secondNum} result={result}/>
    </div>
  );
}

export default App;
