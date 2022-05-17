const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function Numbers({updateNum}) {
  function handleClick(evt) {
    const value = evt.target.value;
    updateNum(value);
  }

  return (
    <div className="Numbers">
      {numbers.map((num, idx) =>
        <button key={idx} value={num} onClick={handleClick}>{num}</button>)}

    </div>
  );
}

export default Numbers;