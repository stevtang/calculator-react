import './App.css';
import {useState} from 'react';
import Operators from './Operators';

function App() {
  const [firstNum, setFirstNum] = useState("0");
  const [secondNum, setSecondNum] = useState("0");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(0);

  function updateResults(){
    setResult(Number(firstNum) + Number(secondNum));
    setOperator(null);
  }

  function updateOperator(operation){
    setOperator(operation);
  }

  function updateNum(num) {
    let newNum = firstNum.concat(num.toString());
    if (operator === null) {
      setFirstNum(newNum);    
    } else {
      setSecondNum(newNum);
    }
  }
  
  return (
    <div className="App">
      <Operators updateOperator={updateOperator} updateResults={updateResults}/>
      <Numbers updateNum={updateNum} />
    </div>
  );
}

export default App;
