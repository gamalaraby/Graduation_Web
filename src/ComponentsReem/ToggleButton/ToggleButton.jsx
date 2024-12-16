import React, { useState } from 'react';  

function ToggleButton() {  
  const [isFirstWord, setIsFirstWord] = useState(true);  

  const handleClick = () => {  
    setIsFirstWord(!isFirstWord);  
  };  

  return (  
    <button onClick={handleClick}>  
      {isFirstWord ? 'Learner' : 'Authar'}  
    </button>  
  );  
}  

export default ToggleButton;