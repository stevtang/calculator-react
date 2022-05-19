function Display({ operator, firstNum, secondNum, result }) {
  console.log('op', operator);
  console.log('firstNum', firstNum);
  console.log('secondNum', secondNum);
  console.log('result', result);

  return (
    <div className="Display">
      {secondNum === "" && firstNum} {operator !== null && secondNum}
      {firstNum === "" && secondNum === "" && operator === null && (result)}
    </div>
  );
}

export default Display;