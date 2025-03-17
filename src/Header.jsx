import React from "react";
import { useState, useEffect } from "react";
const Header = ({
  selectedCount,
  setSelectedCount,
  selectedButton,
  setSelectedButton,
}) => {
  const [fadeInFirst, setFadeInFirst] = useState(false);
  const [fadeInSecond, setFadeInSecond] = useState(false);
  const handleRandomize = () => {
    if (selectedCount >= 3) return;

    let newRandom;
    let attempts = 0;

    do {
      newRandom = Math.floor(Math.random() * 10) + 1;
      attempts++;
    } while (selectedButton.includes(newRandom) && attempts < 10);

    console.log("Generated random:", newRandom);

    setSelectedButton((prev) => {
      return [...prev, newRandom];
    });

    setSelectedCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    setTimeout(() => setFadeInFirst(true), 800);
    setTimeout(() => setFadeInSecond(true), 1800);
  }, []);
  return (
    <header className="header">
      <div className="take-a-moment-container">
        <p className={`take-a-moment ${fadeInFirst ? "fading" : ""}`}>
          Take a moment
        </p>
        <p className={`take-a-moment ${fadeInSecond ? "fading" : ""}`}>
          Pick three values that resonate with you.
        </p>
      </div>
      <div>
        {" "}
        <h4 className="">
          <span className={selectedCount === 3 ? "highlight-max" : ""}>
            {selectedCount}
          </span>{" "}
          out of{" "}
          <span className={selectedCount === 3 ? "highlight-max" : ""}>3</span>{" "}
          selected
        </h4>
        <div>
          <progress value={selectedCount} max={3} className="progress-main">
            2
          </progress>
          <button onClick={handleRandomize} className="random-button">
            randomize
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
