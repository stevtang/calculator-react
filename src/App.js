import './App.css';
import { useState } from 'react';
import Operators from './Operators';
import Numbers from './Numbers';
import Display from './Display';

function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);
  const [equalSign, setEqualSign] = useState(false);

  function updateResults() {
    let newResult = Number(firstNum) + Number(secondNum);
    setResult(newResult);
    setEqualSign(true);
    setOperator(null);
    console.log("result from app:", result);
    setFirstNum(newResult.toString());
    console.log("reset first num:", firstNum);
    setSecondNum("");
  }

  function updateOperator(operation) {
    if (firstNum === "") setFirstNum("0");
    setOperator(operation);
    setEqualSign(false);
  }

  function updateNum(num) {
    let newFirstNum = firstNum.concat(num.toString());
    let newSecondNum = secondNum.concat(num.toString());
    if (operator === null) {
      setFirstNum((+newFirstNum).toString());
    } else {
      setSecondNum((+newSecondNum).toString());
    }
  }

  return (
    <div className="App">
      <Operators updateOperator={updateOperator} updateResults={updateResults} />
      <Numbers updateNum={updateNum} />
      <Display
        operator={operator}
        firstNum={firstNum}
        secondNum={secondNum}
        result={result}
        equalSign={equalSign}
      />
    </div>
  );
}

export default App;
