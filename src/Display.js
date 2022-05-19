function Display({ operator, firstNum, secondNum, result, equalSign }) {
  console.log('op', operator);
  console.log('equal sign:', equalSign);
  console.log('firstNum', firstNum);
  console.log('secondNum', secondNum);
  console.log('result', result);

  return (
    <div className="Display">
      {secondNum === "" && (!equalSign) && firstNum} 
      {operator !== null && secondNum}
      {equalSign && result}
    </div>
  );
}

export default Display;