'use client'

const DisplayRecipe = ({inputValue}) => {
     return (
    <div className="home">
      {inputValue && <p>{inputValue}</p>}
    </div>
  );
}

export default DisplayRecipe