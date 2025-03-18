import { create } from "zustand";

const useStore = create((set) => ({
  // 🔹 Selection States
  selectedButton: [],
  selectedCount: 0,

  // 🔹 Reflection Counts
  groundedCount: 0,
  forwardCount: 0,
  influenceCount: 0,
  acceptCount: 0,
  worldCount: 0,
  myselfCount: 0,

  // 🔹 UI State
  clickJumpAnimation: true,
  isFadingOut: false,

  // 🔹 Grid State
  gridFirst: [null, null, null],
  gridSecond: [null, null, null],
  gridThird: [null, null, null],
  gridFourth: [null, null, null],
  gridFifth: [null, null, null],
  gridSixth: [null, null, null],

  // 🔹 Placement State
  selectedForPlacement: null,
  placedButtonsFirst: [],
  placedButtonSecond: [],
  placedButtonThird: [],

  // 🔹 Message & Sharing State
  messageRead: false,
  hasShared: false,
  isShowingInsights: false,
  returnMessage: false,
  alreadyReadMessage: false,
  alreadySharedGuidance: false,
  alreadyPlaced: false,
  shareGuidance: false,
  finalThanks: false,

  // 🔹 Actions (Update State)
  setSelectedButton: (selectedButton) => set({ selectedButton }),
  setSelectedCount: (selectedCount) => set({ selectedCount }),

  setGroundedCount: (groundedCount) => set({ groundedCount }),
  setForwardCount: (forwardCount) => set({ forwardCount }),
  setInfluenceCount: (influenceCount) => set({ influenceCount }),
  setAcceptCount: (acceptCount) => set({ acceptCount }),
  setWorldCount: (worldCount) => set({ worldCount }),
  setMyselfCount: (myselfCount) => set({ myselfCount }),

  setClickJumpAnimation: (clickJumpAnimation) => set({ clickJumpAnimation }),
  setIsFadingOut: (isFadingOut) => set({ isFadingOut }),

  setGridFirst: (gridFirst) => set({ gridFirst }),
  setGridSecond: (gridSecond) => set({ gridSecond }),
  setGridThird: (gridThird) => set({ gridThird }),
  setGridFourth: (gridFourth) => set({ gridFourth }),
  setGridFifth: (gridFifth) => set({ gridFifth }),
  setGridSixth: (gridSixth) => set({ gridSixth }),

  setSelectedForPlacement: (selectedForPlacement) =>
    set({ selectedForPlacement }),
  setPlacedButtonsFirst: (placedButtonsFirst) => set({ placedButtonsFirst }),
  setPlacedButtonSecond: (placedButtonSecond) => set({ placedButtonSecond }),
  setPlacedButtonThird: (placedButtonThird) => set({ placedButtonThird }),

  setMessageRead: (messageRead) => set({ messageRead }),
  setHasShared: (hasShared) => set({ hasShared }),
  setIsShowingInsights: (isShowingInsights) => set({ isShowingInsights }),
  setReturnMessage: (returnMessage) => set({ returnMessage }),
  setAlreadyReadMessage: (alreadyReadMessage) => set({ alreadyReadMessage }),
  setAlreadySharedGuidance: (alreadySharedGuidance) =>
    set({ alreadySharedGuidance }),
  setAlreadyPlaced: (alreadyPlaced) => set({ alreadyPlaced }),
  setShareGuidance: (shareGuidance) => set({ shareGuidance }),
  setFinalThanks: (finalThanks) => set({ finalThanks }),
}));

export default useStore;
