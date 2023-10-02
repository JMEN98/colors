import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedColor, setSelectedColor] = useState('');

  // Function to handle changes in the input field
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="App">
       <h1>Color Picker</h1>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />

<div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
          marginTop: '20px',
        }}
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>

      
    
  );
}

export default App;
