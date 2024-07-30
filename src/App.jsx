import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(0);

  const handleOperation = () => {
    let res = 0;
    switch (operation) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '%':
        res = num1 % num2;
        break;
      case 'X':
        res = num1 * num2;
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <>
      <div>
        <h1>Calculadora</h1>
        <div className="card">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="%">%</option>
            <option value="X">X</option>
          </select>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
          />
          <button onClick={handleOperation}>Calcular</button>
          <p>Resultado: {result}</p>
        </div>
      </div>
    </>
  );
}

export default App;