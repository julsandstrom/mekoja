const gradientMap = {
  "#27AE60": "linear-gradient(135deg, #27AE60, #007E35)",
  "#3498DB": "linear-gradient(135deg, #3498DB, #1C5276)",
  "#E67E22": "linear-gradient(135deg, #DD802B, #A54E00)",
};
const iconMap = {
  connection: "/src/assets/icons/users.svg",
  adventure: "/src/assets/icons/mountain.svg",
  spirituality: "/src/assets/icons/moon.svg",
  career: "/src/assets/icons/briefcase-business.svg",
  happiness: "/src/assets/icons/smile.svg",
  balance: "/src/assets/icons/scale.svg",
  health: "/src/assets/icons/heart-pulse.svg",
  freedom: "/src/assets/icons/bird.svg",
  passion: "/src/assets/icons/flame.svg",
  success: "/src/assets/icons/trophy.svg",
  creativity: "/src/assets/icons/palette.svg",
  purpose: "/src/assets/icons/lightbulb.svg",
};
const buttons = [
  { id: 1, name: "connection", color: "#3498DB" },
  { id: 2, name: "adventure", color: "#27AE60" },
  { id: 6, name: "spirituality", color: "#E67E22" },
  { id: 3, name: "career", color: "#3498DB" },
  { id: 9, name: "happiness", color: "#27AE60" },
  { id: 5, name: "balance", color: "#E67E22" },
  { id: 4, name: "health", color: "#3498DB" },
  { id: 8, name: "freedom", color: "#27AE60" },
  { id: 7, name: "passion", color: "#E67E22" },
  { id: 10, name: "success", color: "#3498DB" },
  { id: 12, name: "creativity", color: "#27AE60" },
  { id: 11, name: "purpose", color: "#E67E22" },
].map((btn) => ({
  ...btn,
  gradient: gradientMap[btn.color],
}));
export { buttons, iconMap, gradientMap };
