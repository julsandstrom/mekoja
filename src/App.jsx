import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Nav from "./Nav";

import { guidance } from "./guidance.jsx";
import InsightMessage from "./InsightMessage";

import InsightButtons from "./InsightButtons.jsx";
import FinalThanks from "./FinalThanks.jsx";
import ShareGuidance from "./ShareGuidance.jsx";
import AlreadySharedMessage from "./AlreadySharedMessage.jsx";
import AlreadyReadMessage from "./AlreadyReadMessage.jsx";
import GridBoxMyself from "./GridBoxes/GridBoxMyself.jsx";
import GridBoxWorld from "./GridBoxes/GridBoxWorld.jsx";
import ReflectionWorld from "./ReflectionStages/ReflectionWorld.jsx";
import ReflectionMyself from "./ReflectionStages/ReflectionMyself.jsx";
import GridBoxAccept from "./GridBoxes/GridBoxAccept.jsx";
import ReflectionAccept from "./ReflectionStages/ReflectionAccept.jsx";
import GridBoxInfluence from "./GridBoxes/GridBoxInfluence.jsx";
import ReflectionInfluence from "./ReflectionStages/ReflectionInfluence.jsx";
import GridBoxForward from "./GridBoxes/GridBoxForward.jsx";
import ReflectionForward from "./ReflectionStages/ReflectionForward.jsx";
import GridBoxGrounded from "./GridBoxes/GridBoxGrounded.jsx";
import ReflectionGrounded from "./ReflectionStages/ReflectionGrounded.jsx";
import SelectedButtons from "./SelectedButtons.jsx";
import ButtonOptions from "./ButtonOptions.jsx";
import DownArrow from "./DownArrow.jsx";
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
  const [setIsFadingOut] = useState(false);
  const [returnMessage, setReturnMessage] = useState(false);
  const [alreadyReadMessage, setAlreadyReadMessage] = useState(false);
  const [alreadySharedGuidance, setAlreadySharedGuidance] = useState(false);

  const [alreadyPlaced, setAlreadyPlaced] = useState(false);
  const [shareGuidance, setShareGuidance] = useState(false);
  const [finalThanks, setFinalThanks] = useState(false);

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
      <ButtonOptions
        selectedButton={selectedButton}
        handleSelection={handleSelection}
      />
      <div
        className={`section-divider ${
          selectedCount === 3 ? "fade-in" : "fade-out"
        }`}
      >
        {" "}
        {selectedCount === 3 ? (
          <DownArrow
            clickJumpAnimation={clickJumpAnimation}
            handleScrollToNext={handleScrollToNext}
          />
        ) : (
          <div style={{ height: "150px" }}> </div>
        )}
      </div>{" "}
      {selectedCount > 0 && (
        <SelectedButtons
          selectedButton={selectedButton}
          handleSelectForPlacement={handleSelectForPlacement}
          selectedForPlacement={selectedForPlacement}
        />
      )}
      <section className="priority-section">
        <div className="grid-reflection-1">
          <ReflectionGrounded groundedCount={groundedCount} />
          <GridBoxGrounded
            gridFirst={gridFirst}
            selectedForPlacement={selectedForPlacement}
            removeFromGrid={removeFromGrid}
            placedButtonsFirst={placedButtonsFirst}
            handlePlaceInGrid={handlePlaceInGrid}
          />
          <ReflectionForward forwardCount={forwardCount} />

          <GridBoxForward
            gridSecond={gridSecond}
            selectedForPlacement={selectedForPlacement}
            removeFromGrid={removeFromGrid}
            placedButtonsFirst={placedButtonsFirst}
            handlePlaceInGrid={handlePlaceInGrid}
          />
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
          <ReflectionInfluence influenceCount={influenceCount} />

          <GridBoxInfluence
            gridThird={gridThird}
            selectedForPlacement={selectedForPlacement}
            removeFromGrid={removeFromGrid}
            placedButtonSecond={placedButtonSecond}
            handlePlaceInGrid={handlePlaceInGrid}
          />
          {placedButtonSecond.length >= 3 ? (
            <p className="section-status-2">
              All values placed. Ready to continue?
            </p>
          ) : (
            <p className="section-status-2">
              Placed: {placedButtonSecond.length} out of 3
            </p>
          )}

          <ReflectionAccept acceptCount={acceptCount} />
          <GridBoxAccept
            gridFourth={gridFourth}
            selectedForPlacement={selectedForPlacement}
            removeFromGrid={removeFromGrid}
            placedButtonSecond={placedButtonSecond}
            handlePlaceInGrid={handlePlaceInGrid}
          />
        </div>{" "}
        <div className="grid-reflection-3">
          <ReflectionWorld worldCount={worldCount} />
          <GridBoxWorld
            gridFifth={gridFifth}
            selectedForPlacement={selectedForPlacement}
            removeFromGrid={removeFromGrid}
            placedButtonThird={placedButtonThird}
            handlePlaceInGrid={handlePlaceInGrid}
          />
          {placedButtonThird.length >= 3 ? (
            <p className="section-status-3">
              All values placed. Ready to continue?
            </p>
          ) : (
            <p className="section-status-3">
              Placed: {placedButtonThird.length} out of 3
            </p>
          )}
          <ReflectionMyself myselfCount={myselfCount} />
          <GridBoxMyself
            gridSixth={gridSixth}
            selectedForPlacement={selectedForPlacement}
            removeFromGrid={removeFromGrid}
            placedButtonThird={placedButtonThird}
            handlePlaceInGrid={handlePlaceInGrid}
          />
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
      {returnMessage ? (
        <p className="return-message fading">
          Take a moment to reflect before receiving insight from others
        </p>
      ) : (
        <p className="return-message"></p>
      )}
      {alreadyReadMessage && (
        <AlreadyReadMessage setAlreadyReadMessage={setAlreadyReadMessage} />
      )}
      {alreadySharedGuidance && (
        <AlreadySharedMessage
          setAlreadySharedGuidance={setAlreadySharedGuidance}
        />
      )}
      {shareGuidance && (
        <ShareGuidance guidance={guidance} closeShareModal={closeShareModal} />
      )}
      {finalThanks && <FinalThanks setFinalThanks={setFinalThanks} />}
      {isShowingInsights && (
        <InsightMessage
          selectedGuidance={selectedGuidance}
          closeGuidance={closeGuidance}
        />
      )}
      <InsightButtons
        handleShareGuidance={handleShareGuidance}
        showInsights={showInsights}
      />
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
