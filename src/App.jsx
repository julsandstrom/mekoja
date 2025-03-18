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

  const [hasShared, setHasShared] = useState(false);

  const [isShowingInsights, setIsShowingInsights] = useState(false);
  const [returnMessage, setReturnMessage] = useState(false);
  const [alreadyReadMessage, setAlreadyReadMessage] = useState(false);
  const [alreadySharedGuidance, setAlreadySharedGuidance] = useState(false);

  const [alreadyPlaced, setAlreadyPlaced] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [shareGuidance, setShareGuidance] = useState(false);
  const [finalThanks, setFinalThanks] = useState(false);
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
      date: "",
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
    setSelectedForPlacement(id);
  };

  const handleSelectForPlacement = (id) => {
    setSelectedForPlacement(id);
  };

  const handlePlaceInGrid = (gridType, slotIndex) => {
    if (!selectedForPlacement) {
      return;
    }

    if (gridType === "grounded") {
      if (placedButtonsFirst.includes(selectedForPlacement)) {
        setAlreadyPlaced(true);
        setTimeout(() => setAlreadyPlaced(false), 5000);
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
        setAlreadyPlaced(true);
        setTimeout(() => setAlreadyPlaced(false), 3000);
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
        setAlreadyPlaced(true);
        setTimeout(() => setAlreadyPlaced(false), 3000);
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
        setAlreadyPlaced(true);
        setTimeout(() => setAlreadyPlaced(false), 3000);
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
        setAlreadyPlaced(true);
        setTimeout(() => setAlreadyPlaced(false), 3000);
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
        setAlreadyPlaced(true);
        setTimeout(() => setAlreadyPlaced(false), 3000);
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
    if (gridType === "grounded") {
      setGridFirst((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
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
        return updatedSlots;
      });
      setGroundedCount((prev) => prev - 1);
    } else if (gridType === "forward") {
      setGridSecond((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
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
        return updatedSlots;
      });
      setForwardCount((prev) => prev - 1);
    } else if (gridType === "influence") {
      setGridThird((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
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
        return updatedSlots;
      });
      setInfluencedCount((prev) => prev - 1);
    } else if (gridType === "accept") {
      setGridFourth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
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
        return updatedSlots;
      });
      setAcceptCount((prev) => prev - 1);
    } else if (gridType === "world") {
      setGridFifth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
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
        return updatedSlots;
      });
      setWorldCount((prev) => prev - 1);
    } else if (gridType === "myself") {
      setGridSixth((prevSlots) => {
        const updatedSlots = [...prevSlots];
        removedButtonId = updatedSlots[index];
        updatedSlots[index] = null;
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
        return updatedSlots;
      });
      setMyselfCount((prev) => prev - 1);
    }

    setSelectedButton((prev) => {
      if (removedButtonId === null || removedButtonId === undefined)
        return prev;
      return prev.filter((btnId) => btnId !== removedButtonId);
    });

    setSelectedForPlacement(null);
  };

  const showInsights = () => {
    if (messageRead) {
      setAlreadyReadMessage(true);
      return;
    }
    if (
      placedButtonsFirst.length >= 3 &&
      placedButtonSecond.length >= 3 &&
      placedButtonThird.length >= 3
    ) {
      setReturnMessage(false);
      setIsShowingInsights(true);
      setMessageRead(true);
    } else {
      setReturnMessage(true);
      setTimeout(() => setReturnMessage(false), 7000);
    }
  };
  const closeShareModal = () => {
    setFinalThanks(true);
    setShareGuidance(false);
  };
  const closeGuidance = () => {
    setShareGuidance(false);
    setIsShowingInsights(false);
    setIsFadingOut(true);
    setTimeout(() => {
      setIsFadingOut(false);
    }, 500);
  };
  const handleShareGuidance = () => {
    if (hasShared) {
      setAlreadySharedGuidance(true);

      return;
    }
    if (
      placedButtonsFirst.length >= 3 &&
      placedButtonSecond.length >= 3 &&
      placedButtonThird.length >= 3
    ) {
      setReturnMessage(false);
      setShareGuidance(true);
      setHasShared(true);
    } else {
      setReturnMessage(true);
      setTimeout(() => setReturnMessage(false), 5000);
    }
  };
  const handleScrollToNext = () => {
    const nextSection = document.getElementById("next-section");
    setClickJumpAnimation(false);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleReset = () => {
    setAlreadyPlaced(false);
    setAlreadySharedGuidance(false);
    setAlreadyReadMessage(false);
    setReturnMessage(false);
    setIsShowingInsights(false);
    setMessageRead(false);
    setPlacedButtonThird([]);
    setPlacedButtonSecond([]);
    setPlacedButtonsFirst([]);
    setGridSixth([null, null, null]);
    setGridFifth([null, null, null]);
    setGridFourth([null, null, null]);
    setGridThird([null, null, null]);
    setGridSecond([null, null, null]);
    setGridFirst([null, null, null]);
    setMyselfCount(0);
    setWorldCount(0);
    setAcceptCount(0);
    setInfluencedCount(0);
    setForwardCount(0);
    setGroundedCount(0);
    setSelectedCount(0);
    setSelectedButton([]);
    setShareGuidance(false);
    setHasShared(false);

    setFinalThanks(false);
  };
  return (
    <div id="intro" className="page-layout">
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
          <div onClick={handleScrollToNext} className="down-arrow-container">
            {" "}
            <img
              src="src\assets\arrow-down.svg"
              className={clickJumpAnimation ? "down-arrow" : "down-stop"}
            />
          </div>
        ) : (
          <div style={{ height: "150px" }}> </div>
        )}
      </div>{" "}
      {/* USER MODAL BUTTON LAYOUT */}
      <div className="user-modal-buttons">
        {selectedButton.map((id) => {
          const btn = buttons.find((button) => button.id === id);
          const iconPath = iconMap[btn.name];
          return btn ? (
            <div>
              <p className="tap-info">Tap to select</p>
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
            </div>
          ) : null;
        })}
      </div>
      <section id="next-section" className="priority-section">
        <div className="grid-reflection-1">
          <div className="second-section-title-wrap">
            <div className="reflections-title-container">
              <h2 className="second-section-title">What keeps me </h2>
              <span className="reflections-pop">grounded</span>
            </div>
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
                    <>
                      {placedButtonsFirst.length >= 3 ? (
                        <button className="drop-box-text">
                          <img
                            src="src\assets\icons\check.svg"
                            alt="check icon"
                            style={{ filter: "invert(1)" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="drop-box"
                          onClick={() => handlePlaceInGrid("grounded", index)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
          {/* ----------------------------------------------------  */}
          <div className="second-section-title-wrap-2">
            <div className="reflections-title-container">
              <h2 className="second-section-title">What pushes me </h2>
              <span className="reflections-pop">forward</span>
            </div>

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
                    <>
                      {placedButtonsFirst.length >= 3 ? (
                        <button className="drop-box-text">
                          <img
                            src="src\assets\icons\check.svg"
                            alt="check icon"
                            style={{ filter: "invert(1)" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="drop-box"
                          onClick={() => handlePlaceInGrid("forward", index)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>{" "}
          {placedButtonsFirst.length >= 3 ? (
            <p className="section-status-1">
              All values placed. Ready to continue?
            </p>
          ) : (
            <p className="section-status-1">
              Placed: {placedButtonsFirst.length} out of 3
            </p>
          )}
        </div>
        <div className="grid-reflection-2">
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
                    <>
                      {placedButtonSecond.length >= 3 ? (
                        <button className="drop-box-text">
                          <img
                            src="src\assets\icons\check.svg"
                            alt="check icon"
                            style={{ filter: "invert(1)" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="drop-box"
                          onClick={() => handlePlaceInGrid("influence", index)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>{" "}
          {placedButtonSecond.length >= 3 ? (
            <p className="section-status-2">
              All values placed. Ready to continue?
            </p>
          ) : (
            <p className="section-status-2">
              Placed: {placedButtonSecond.length} out of 3
            </p>
          )}
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
                    <>
                      {placedButtonSecond.length >= 3 ? (
                        <button className="drop-box-text">
                          <img
                            src="src\assets\icons\check.svg"
                            alt="check icon"
                            style={{ filter: "invert(1)" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="drop-box"
                          onClick={() => handlePlaceInGrid("accept", index)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>{" "}
        </div>{" "}
        {/* ---------------------------------------------------------------------LAST */}
        <div className="grid-reflection-3">
          <div className="second-section-title-wrap">
            <div className="reflections-title-container">
              <h2 className="second-section-title-world">The world </h2>

              <h2 className="second-section-title">
                {" "}
                <span className="reflections-pop-expects">expects </span>
                from me
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
                    <>
                      {placedButtonThird.length >= 3 ? (
                        <button className="drop-box-text">
                          <img
                            src="src\assets\icons\check.svg"
                            alt="check icon"
                            style={{ filter: "invert(1)" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="drop-box"
                          onClick={() => handlePlaceInGrid("world", index)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>{" "}
          {placedButtonThird.length >= 3 ? (
            <p className="section-status-3">
              All values placed. Ready to continue?
            </p>
          ) : (
            <p className="section-status-3">
              Placed: {placedButtonThird.length} out of 3
            </p>
          )}
          {/* ----------------------------------------------------  */}
          <div className="second-section-title-wrap-2">
            <div className="reflections-title-container">
              <h2 className="second-section-title">What I need for</h2>{" "}
              <span className="reflections-pop">myself</span>
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
                    <>
                      {placedButtonThird.length >= 3 ? (
                        <button className="drop-box-text">
                          <img
                            src="src\assets\icons\check.svg"
                            alt="check icon"
                            style={{ filter: "invert(1)" }}
                          />
                        </button>
                      ) : (
                        <button
                          className="drop-box"
                          onClick={() => handlePlaceInGrid("myself", index)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>{" "}
        </div>
        {alreadyPlaced && (
          <div
            className="modal-already-placed"
            onClick={() => setAlreadyPlaced(false)}
          >
            You’ve already placed this. Tap to remove.
          </div>
        )}
      </section>
      <div style={{ height: "0px" }}></div>
      {returnMessage ? (
        <p className="return-message fading">
          Take a moment to reflect before receiving insight from others
        </p>
      ) : (
        <p className="return-message"></p>
      )}
      {alreadyReadMessage && (
        <div
          className="modal-already-read"
          onClick={() => setAlreadyReadMessage(false)}
        >
          This message has already been read. New reflections bring new wisdom.
        </div>
      )}
      {alreadySharedGuidance && (
        <div
          className="modal-already-read"
          onClick={() => setAlreadySharedGuidance(false)}
        >
          You've already shared your wisdom. Thank you!
        </div>
      )}
      {shareGuidance && (
        <div className="share-guidance-modal">
          <p className="share-title">
            A reflection for someone walking a similar path.
          </p>
          <span>Leave a message:</span>
          <select>
            {guidance.map((item) => (
              <option key={item.id}>{item.message}</option>
            ))}
          </select>
          <button className="save-guidance-button" onClick={closeShareModal}>
            save
          </button>
        </div>
      )}
      {finalThanks && (
        <div className="final-thanks" onClick={() => setFinalThanks(false)}>
          {" "}
          <h2>A message for someone who sees the world like you do. </h2>
          <h2 className="thanks-text">Thank you!</h2>
        </div>
      )}
      {isShowingInsights && (
        <div className={`modal-insights ${isFadingOut ? "fade-out" : ""}`}>
          <h5 className="insight-message">"{selectedGuidance.message}"</h5>{" "}
          <div className="modal-container-text">
            <div className="date-message-wrap">
              <span className="date-text">
                <span className="message-small">added:</span>{" "}
                {selectedGuidance.date}
              </span>{" "}
              <span className="date-bold">
                This message disappears after reading.
              </span>{" "}
            </div>
            <button className="close-modal" onClick={closeGuidance}>
              close
            </button>{" "}
          </div>
        </div>
      )}
      <div className="insight-section">
        {" "}
        <div className="insight-buttons-container">
          Receive guidance from someone who shares your values
          <button className="insight-buttons" onClick={showInsights}>
            <img
              src="src\assets\icons\messages-square.svg"
              alt="share message icon"
            />
          </button>
        </div>
        <div className="insight-buttons-container">
          leave a guiding thought
          <button className="insight-buttons" onClick={handleShareGuidance}>
            <img
              src="src\assets\icons\message-square-share.svg"
              alt="message icon"
            />
          </button>
        </div>
      </div>
      <div className="project-by">
        <h6>project by</h6> <h3>Julian Sandström</h3>{" "}
        <button className="reset-button" onClick={handleReset}>
          reset
        </button>
        <img src="\src\assets\logo.svg" alt="mekoja logo" className="logo" />
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default App;
