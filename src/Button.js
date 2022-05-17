function Button({updateOperator}) {
    
    function handleAddition(evt){
        updateOperator();
    }
    return (
      <div className="Button">
          <button onClick={handleAddition}>+</button>
      </div>
    );
  }
  
  export default Button;