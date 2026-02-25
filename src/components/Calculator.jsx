import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (op) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      alert("Մուտքագրեք թվեր");
      return;
    }
    switch (op) {
      case "+": setResult(a + b); break;
      case "-": setResult(a - b); break;
      case "*": setResult(a * b); break;
      case "/": setResult(b !== 0 ? a / b : "Չի կարելի բաժանել 0-ի վրա"); break;
      default: break;
    }
  };

  return (
    <div className="calc-container">
      <h2 className="calc-title">Հաշվիչ</h2>
      <div className="calc-inputs">
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="I թիվ"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="II թիվ"
        />
      </div>
      <div className="calc-buttons">
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => calculate(op)}>
            {op}
          </button>
        ))}
      </div>
      {result !== null && (
        <p className="calc-result">
          Արդյունքը՝ <b>{result}</b>
        </p>
      )}
    </div>
  );
}
