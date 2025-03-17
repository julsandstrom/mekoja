import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Button from "./Button";
import { buttons, iconMap, gradientMap } from "./data";
function App() {
  const [selectedButton, setSelectedButton] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const [groundedCount, setGroundedCount] = useState(0);
  const [forwardCount, setForwardCount] = useState(0);
  const [influenceCount, setInfluencedCount] = useState(0);
  const [acceptCount, setAcceptCount] = useState(0);

  const [clickJumpAnimation, setClickJumpAnimation] = useState(true);
  const [gridFirst, setGridFirst] = useState([null, null, null]);
  const [gridSecond, setGridSecond] = useState([null, null, null]);
  const [gridThird, setGridThird] = useState([null, null, null]);
  const [gridFourth, setGridFourth] = useState([null, null, null]);
  const [selectedForPlacement, setSelectedForPlacement] = useState(null);
  const [placedButtonsFirst, setPlacedButtonsFirst] = useState([]);
  const [placedButtonSecond, setPlacedButtonSecond] = useState([]);

  const handleSelection = (id) => {
    if (
      gridFirst.includes(id) ||
      gridSecond.includes(id) ||
      gridThird.includes(id) ||
      gridFourth.includes(id)
    )
      return;
    setSelectedButton((prev) => {
      if (prev.includes(id)) {
        setSelectedCount((prevCount) => prevCount - 1);
        return prev.filter((btn) => btn !== id);
      } else {
        if (selectedCount < 3) {
          setSelectedCount((prevCount) => prevCount + 1);
          return [...prev, id];
        }
        return prev;
      }
    });
  };

  const handleSelectForPlacement = (id) => {
    setSelectedForPlacement(id);
  };

  const handlePlaceInGrid = (gridType, slotIndex) => {
    if (!selectedForPlacement) return;

    // if (placedButtonsFirst.includes(selectedForPlacement)) {
    //   alert("Already placed");
    //   return;
    // }
    if (gridType === "grounded") {
      if (placedButtonsFirst.includes(selectedForPlacement)) {
        alert("Already placed");
        return;
      }
      if (gridFirst[slotIndex] !== null) {
        alert("Slot already occupied!");
        return;
      }
      setPlacedButtonsFirst((prev) => [...prev, selectedForPlacement]);
      setGridFirst((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedForPlacement;
        return updatedSlots;
      });

      setGroundedCount((count) => count + 1);
    } else if (gridType === "forward") {
      if (placedButtonsFirst.includes(selectedForPlacement)) {
        alert("Already placed");
        return;
      }
      if (gridSecond[slotIndex] !== null) {
        alert("Slot already occupied!");
        return;
      }
      setPlacedButtonsFirst((prev) => [...prev, selectedForPlacement]);

      setGridSecond((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedForPlacement;
        return updatedSlots;
      });

      setForwardCount((count) => count + 1);
    } else if (gridType === "influence") {
      if (placedButtonSecond.includes(selectedForPlacement)) {
        alert("Already placed");
        return;
      }
      if (gridThird[slotIndex] !== null) {
        alert("Slot already occupied!");
        return;
      }
      setPlacedButtonSecond((prev) => [...prev, selectedForPlacement]);
      setGridThird((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedForPlacement;
        return updatedSlots;
      });

      setInfluencedCount((count) => count + 1);
    } else if (gridType === "accept") {
      if (placedButtonSecond.includes(selectedForPlacement)) {
        alert("Already placed");
        return;
      }
      if (gridFourth[slotIndex] !== null) {
        alert("Slot already occupied!");
        return;
      }
      setPlacedButtonSecond((prev) => [...prev, selectedForPlacement]);
      setGridFourth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedForPlacement;
        return updatedSlots;
      });

      setAcceptCount((count) => count + 1);
    }

    // setPlacedButtonsFirst((prev) => [...prev, selectedForPlacement]);

    setSelectedForPlacement(null);
  };

  const removeFromGrid = (index, gridType) => {
    let removedButtonId = null;

    //functional state updates to avoid stale values
    if (gridType === "grounded") {
      setGridFirst((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index]; // Capture the ID BEFORE removing it
        updatedSlots[index] = null;
        return updatedSlots;
      });
      setGroundedCount((prev) => prev - 1);
    } else if (gridType === "forward") {
      setGridSecond((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
        return updatedSlots;
      });
      setForwardCount((prev) => prev - 1);
    } else if (gridType === "influence") {
      setGridThird((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
        return updatedSlots;
      });
      setInfluencedCount((prev) => prev - 1);
    } else if (gridType === "accept") {
      setGridFourth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
        return updatedSlots;
      });
      setInfluencedCount((prev) => prev - 1);
    }

    setPlacedButtonsFirst((prev) => {
      if (removedButtonId === null || removedButtonId === undefined) {
        console.warn("Removed button ID is undefined! Skipping removal.");
        return prev;
      }
      const updatedPlacedButtons = prev.filter(
        (btnId) => btnId !== removedButtonId
      );

      return updatedPlacedButtons;
    });
    setPlacedButtonSecond((prev) => {
      if (removedButtonId === null || removedButtonId === undefined) {
        console.warn("Removed button ID is undefined! Skipping removal.");
        return prev;
      }
      const updatedPlacedButton = prev.filter(
        (btnId) => btnId !== removedButtonId
      );

      return updatedPlacedButton;
    });

    // ✅ Ensure selectedButtons is updated properly
    setSelectedButton((prev) => {
      if (removedButtonId === null || removedButtonId === undefined)
        return prev;
      return prev.filter((btnId) => btnId !== removedButtonId);
    });

    // ✅ Reset selection state
    setSelectedForPlacement(null);
  };

  return (
    <div className="page-layout">
      <Nav />
      <Header
        setSelectedCount={setSelectedCount}
        selectedCount={selectedCount}
        handleRandomize={selectedCount}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <section className="button-section">
        {buttons.map((btn) => {
          const iconPath = iconMap[btn.name];
          return (
            <Button
              key={btn.id}
              id={btn.id}
              label={btn.name}
              iconPath={iconPath}
              action={handleSelection}
              gradient={btn.gradient}
              className={
                selectedButton.includes(btn.id) ? "button-selected" : ""
              }
            />
          );
        })}
      </section>
      <div
        className={`section-divider ${
          selectedCount === 3 ? "fade-in" : "fade-out"
        }`}
      >
        {" "}
        {selectedCount === 3 ? (
          <img
            src="src\assets\arrow-down.svg"
            className={clickJumpAnimation ? "down-arrow" : "down-stop"}
            onClick={() => setClickJumpAnimation(!clickJumpAnimation)}
          />
        ) : (
          <div style={{ height: "66px" }}> </div>
        )}
      </div>{" "}
      {/* USER MODAL BUTTON LAYOUT */}
      <div className="user-modal-buttons">
        {selectedButton.map((id) => {
          const btn = buttons.find((button) => button.id === id);
          const iconPath = iconMap[btn.name];
          return btn ? (
            <Button
              key={btn.id}
              id={btn.id}
              iconPath={iconPath}
              label={btn.name}
              action={() => handleSelectForPlacement(btn.id)}
              gradient={btn.gradient}
              className={`second-buttons ${
                selectedForPlacement === btn.id ? "button-selected" : ""
              }`}
            />
          ) : null;
        })}
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="grid-second">
        <div className="second-section-title-wrap">
          <h2 className="second-section-title">
            What keeps me <span className="pop-red">grounded</span>
          </h2>
          <progress value={groundedCount} max={3} className="progress-main">
            2
          </progress>
        </div>
        <div className="button-grid-box">
          {gridFirst.map((buttonId, index) => {
            const btn = buttons.find((b) => b.id === buttonId);
            const iconPath = iconMap[btn?.name];
            return (
              <div
                key={index}
                className={`grid-slot ${
                  selectedForPlacement ? "second-button-selected" : ""
                }`}
              >
                {btn ? (
                  <>
                    <Button
                      id={index}
                      label={btn.name}
                      iconPath={iconPath}
                      gradient={btn.gradient}
                      action={removeFromGrid}
                      extraArg={"grounded"}
                    />
                  </>
                ) : (
                  <button
                    className="drop-box"
                    onClick={() => handlePlaceInGrid("grounded", index)}
                  >
                    tap to select
                  </button>
                )}
              </div>
            );
          })}
        </div>{" "}
        {/* ----------------------------------------------------  */}
        <div className="second-section-title-wrap-2">
          <h2 className="second-section-title">
            What pushes me <span className="pop-red">forward</span>
          </h2>
          <progress value={forwardCount} max={3} className="progress-main">
            2
          </progress>
        </div>
        <div className="button-grid-box-2">
          {gridSecond.map((buttonId, index) => {
            const btn = buttons.find((b) => b.id === buttonId);
            const iconPath = iconMap[btn?.name];
            return (
              <div
                key={index}
                className={`grid-slot ${
                  selectedForPlacement ? "second-button-selected" : ""
                }`}
              >
                {btn ? (
                  <div className="dropped-button">
                    <Button
                      id={index}
                      label={btn.name}
                      iconPath={iconPath}
                      gradient={btn.gradient}
                      action={removeFromGrid}
                      extraArg={"forward"}
                    />
                  </div>
                ) : (
                  <button
                    className="drop-box"
                    onClick={() => handlePlaceInGrid("forward", index)}
                  >
                    tap to select
                  </button>
                )}
              </div>
            );
          })}
        </div>{" "}
      </div>
      {/* IINIFLUUUUUUUUUUUUUUUUUUENCEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
      <div className="grid-second">
        <div className="second-section-title-wrap">
          <h2 className="second-section-title">
            What I <span className="pop-red">influence</span>
          </h2>
          <progress value={influenceCount} max={3} className="progress-main">
            2
          </progress>
        </div>
        <div className="button-grid-box">
          {gridThird.map((buttonId, index) => {
            const btn = buttons.find((b) => b.id === buttonId);
            const iconPath = iconMap[btn?.name];
            return (
              <div
                key={index}
                className={`grid-slot ${
                  selectedForPlacement ? "second-button-selected" : ""
                }`}
              >
                {btn ? (
                  <>
                    <Button
                      id={index}
                      label={btn.name}
                      iconPath={iconPath}
                      gradient={btn.gradient}
                      action={removeFromGrid}
                      extraArg={"influence"}
                    />
                  </>
                ) : (
                  <button
                    className="drop-box"
                    onClick={() => handlePlaceInGrid("influence", index)}
                  >
                    tap to select
                  </button>
                )}
              </div>
            );
          })}
        </div>{" "}
        {/* ----------------------------------------------------  */}
        <div className="second-section-title-wrap-2">
          <h2 className="second-section-title">
            Things I need to <span className="pop-red">accept</span>
          </h2>
          <progress value={acceptCount} max={3} className="progress-main">
            2
          </progress>
        </div>
        <div className="button-grid-box-2">
          {gridFourth.map((buttonId, index) => {
            const btn = buttons.find((b) => b.id === buttonId);
            const iconPath = iconMap[btn?.name];
            return (
              <div
                key={index}
                className={`grid-slot ${
                  selectedForPlacement ? "second-button-selected" : ""
                }`}
              >
                {btn ? (
                  <div className="dropped-button">
                    <Button
                      id={index}
                      label={btn.name}
                      iconPath={iconPath}
                      gradient={btn.gradient}
                      action={removeFromGrid}
                      extraArg={"accept"}
                    />
                  </div>
                ) : (
                  <button
                    className="drop-box"
                    onClick={() => handlePlaceInGrid("accept", index)}
                  >
                    tap to select
                  </button>
                )}
              </div>
            );
          })}
        </div>{" "}
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}
// placedButtons.length === 3 && <button> NEXT</button>
export default App;
