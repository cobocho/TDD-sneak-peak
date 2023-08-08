import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState<string>('red');
  const [disable, setDisable] = useState<boolean>(false);
  const newColor = color === 'blue' ? 'red' : 'blue';

  return (
    <div>
      <button
        disabled={disable}
        onClick={() => setColor(newColor)}
        style={{ backgroundColor: disable ? 'gray' : color }}
      >
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        checked={disable}
        onChange={() => setDisable((prev) => !prev)}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
