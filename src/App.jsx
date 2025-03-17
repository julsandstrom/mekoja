import { useEffect, useState } from "react";

import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Button from "./Button";
import { buttons, iconMap } from "./data";
function App() {
  const [selectedButton, setSelectedButton] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const [groundedCount, setGroundedCount] = useState(0);
  const [forwardCount, setForwardCount] = useState(0);
  const [influenceCount, setInfluencedCount] = useState(0);
  const [acceptCount, setAcceptCount] = useState(0);
  const [worldCount, setWorldCount] = useState(0);
  const [myselfCount, setMyselfCount] = useState(0);

  const [clickJumpAnimation, setClickJumpAnimation] = useState(true);
  const [gridFirst, setGridFirst] = useState([null, null, null]);
  const [gridSecond, setGridSecond] = useState([null, null, null]);
  const [gridThird, setGridThird] = useState([null, null, null]);
  const [gridFourth, setGridFourth] = useState([null, null, null]);
  const [gridFifth, setGridFifth] = useState([null, null, null]);
  const [gridSixth, setGridSixth] = useState([null, null, null]);

  const [selectedForPlacement, setSelectedForPlacement] = useState(null);
  const [placedButtonsFirst, setPlacedButtonsFirst] = useState([]);
  const [placedButtonSecond, setPlacedButtonSecond] = useState([]);
  const [placedButtonThird, setPlacedButtonThird] = useState([]);
  const [messageRead, setMessageRead] = useState(false);

  const [isShowingInsights, setIsShowingInsights] = useState(false);

  const guidance = [
    {
      id: 1,
      message: "You are stronger than you think.",
      date: "15 mars 2025",
    },
    {
      id: 2,
      message: "Trust the process.",
      date: "10 mars 2025",
    },
    {
      id: 3,
      message: "One step at a time.",
      date: "13 mars 2025",
    },
    {
      id: 4,
      message: "Progress, not perfection.",
      date: "11 mars 2025",
    },
    {
      id: 5,
      message: "Your effort matters.",
      date: "06 mars 2025",
    },
    {
      id: 6,
      message: "Growth comes from challenges.",
      date: "26 mars 2025",
    },
    {
      id: 7,
      message: "Your story is still unfolding.",
      date: "29 mars 2025",
    },
    {
      id: 8,
      message: "Keep going, even when it's tough.",
      date: "05 mars 2025",
    },
    {
      id: 9,
      message: "Believe in yourself.",
      date: "02 mars 2025",
    },
    {
      id: 10,
      message:
        "No shared wisdom today, but take a moment to reflect on your own.",
      date: "31 mars 2025",
    },
  ];
  const randomIndex = Math.floor(Math.random() * guidance.length);
  const selectedGuidance = guidance[randomIndex];
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
      //-----------------------------------------------------------------------------------//////////////////////////
    } else if (gridType === "world") {
      if (placedButtonThird.includes(selectedForPlacement)) {
        alert("Already placed");
        return;
      }
      if (gridFifth[slotIndex] !== null) {
        alert("Slot already occupied!");
        return;
      }
      setPlacedButtonThird((prev) => [...prev, selectedForPlacement]);
      setGridFifth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedForPlacement;
        return updatedSlots;
      });

      setWorldCount((count) => count + 1);
    } else if (gridType === "myself") {
      if (placedButtonThird.includes(selectedForPlacement)) {
        alert("Already placed");
        return;
      }
      if (gridSixth[slotIndex] !== null) {
        alert("Slot already occupied!");
        return;
      }
      setPlacedButtonThird((prev) => [...prev, selectedForPlacement]);
      setGridSixth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        updatedSlots[slotIndex] = selectedForPlacement;
        return updatedSlots;
      });

      setMyselfCount((count) => count + 1);
    }

    setSelectedForPlacement(null);
  };

  const removeFromGrid = (index, gridType) => {
    let removedButtonId = null;

    //functional state updates to avoid stale values
    if (gridType === "grounded") {
      setGridFirst((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
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
      setAcceptCount((prev) => prev - 1);
    } else if (gridType === "world") {
      setGridFifth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
        return updatedSlots;
      });
      setWorldCount((prev) => prev - 1);
    } else if (gridType === "myself") {
      setGridSixth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
        return updatedSlots;
      });
      setMyselfCount((prev) => prev - 1);
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
    setPlacedButtonThird((prev) => {
      if (removedButtonId === null || removedButtonId === undefined) {
        console.warn("Removed button ID is undefined! Skipping removal.");
        return prev;
      }
      const updatedPlacedButton = prev.filter(
        (btnId) => btnId !== removedButtonId
      );

      return updatedPlacedButton;
    });

    setSelectedButton((prev) => {
      if (removedButtonId === null || removedButtonId === undefined)
        return prev;
      return prev.filter((btnId) => btnId !== removedButtonId);
    });
    setMessageRead(false);
    setSelectedForPlacement(null);
  };

  const showInsights = () => {
    if (messageRead) {
      alert("Already read, come back when you have new reflections");
      return;
    }
    if (
      placedButtonsFirst.length >= 3 ||
      placedButtonSecond.length >= 3 ||
      placedButtonThird.length >= 3
    ) {
      setIsShowingInsights(true);
      setMessageRead(true);
      console.log("showing");
    } else {
      alert("take a moment to reflect ");
    }
  };
  const leaveGuidance = () => {
    console.log("showing");
  };
  const closeGuidance = () => {
    setIsShowingInsights(false);
  };

  useEffect(() => {
    console.log(messageRead);
  }, [messageRead]);
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
                selectedForPlacement === btn.id ? "button-selected-modal" : ""
              }`}
            />
          ) : null;
        })}
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="grid-second">
        <div className="second-section-title-wrap">
          <h2 className="second-section-title">
            What keeps me <span className="reflections-pop">grounded</span>
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
            What pushes me <span className="reflections-pop">forward</span>
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
          <div className="reflections-title-container">
            <h2 className="second-section-title">What I</h2>
            <span className="reflections-pop">influence</span>
          </div>
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
          <div className="reflections-title-container">
            <h2 className="second-section-title">Things I need to</h2>
            <span className="reflections-pop">accept</span>
          </div>
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
      </div>{" "}
      {/* ---------------------------------------------------------------------LAST */}
      <div className="grid-second">
        <div className="second-section-title-wrap">
          <div className="reflections-title-container">
            <h2 className="second-section-title">The world </h2>
            <h2 className="second-section-title">
              <span className="reflections-pop-expects">expects</span> from me
            </h2>
          </div>
          <progress value={worldCount} max={3} className="progress-main">
            2
          </progress>
        </div>
        <div className="button-grid-box">
          {gridFifth.map((buttonId, index) => {
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
                      extraArg={"world"}
                    />
                  </>
                ) : (
                  <button
                    className="drop-box"
                    onClick={() => handlePlaceInGrid("world", index)}
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
          <div className="reflections-title-container">
            <h2 className="second-section-title">I need</h2>{" "}
            <h2 className="second-section-title">
              for <span className="reflections-pop">myself</span>
            </h2>
          </div>
          <progress value={myselfCount} max={3} className="progress-main">
            2
          </progress>
        </div>
        <div className="button-grid-box-2">
          {gridSixth.map((buttonId, index) => {
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
                      extraArg={"myself"}
                    />
                  </div>
                ) : (
                  <button
                    className="drop-box"
                    onClick={() => handlePlaceInGrid("myself", index)}
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
      {isShowingInsights && (
        <div className="modal-insights">
          <div>
            <h5>{selectedGuidance.message}</h5>
            <span className="date-text">
              added: {selectedGuidance.date}
            </span>{" "}
          </div>
          <button className="close-modal" onClick={closeGuidance}>
            close
          </button>
        </div>
      )}
      <div className="insight-section">
        {" "}
        <div className="insight-buttons-container">
          get a reflection from others
          <button className="insight-buttons" onClick={showInsights}>
            <img
              src="src\assets\icons\messages-square.svg"
              alt="share message icon"
            />
          </button>
        </div>
        <div className="insight-buttons-container">
          leave a guiding thought
          <button className="insight-buttons" onClick={leaveGuidance}>
            <img
              src="src\assets\icons\message-square-share.svg"
              alt="message icon"
            />
          </button>
        </div>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default App;
