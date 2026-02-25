import React, { useState } from "react";
import "./Quotes.css";

const quotes = [
  "Աշխատիր այնպես, ինչպես սիրում ես դա։",
  "Յուրաքանչյուր օր նոր հնարավորություն է։",
  "Փոքր քայլերով մեծ արդյունքների կհասնես։",
  "Մի՛ վախեցիր սխալվելուց, վախեցիր չփորձելուց։",
];

export default function Quotes() {
  const [quote, setQuote] = useState("");

  const handleClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div className="quotes-container">
      <h2 className="quotes-title">Պատահական խոսքեր</h2>
      <button className="quotes-button" onClick={handleClick}>
        Ցուցադրել խոսք
      </button>
      {quote && <p className="quotes-text">"{quote}"</p>}
    </div>
  );
}
