import Button from "./Button";
const operators = ["+", "-", "*", "/", "="];

function Operators({updateOperator, updateResults}) {
    function handleAddition(evt){
        updateOperator("+");
    }
    function handleExecute(evt){
        updateResults();
    }
    return (
      <div className="Operators">
          <button onClick={handleAddition}>+</button>
          <button onClick={handleExecute}>=</button>
      </div>
    );
  }
  
  export default Operators;