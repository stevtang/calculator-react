function Display({ operator, firstNum, secondNum, result }) {
  console.log('op', operator);
  console.log('firstNum', firstNum);
  console.log('secondNum', secondNum);
  console.log('result', result);

  return (
    <div className="Display">
      {+firstNum} {operator !== null && operator} {+secondNum}
      {firstNum === "0" && secondNum === "0" && operator === null && (+result)}
    </div>
  );
}

export default Display;