import users from "./assets/icons/users.svg";
import mountain from "./assets/icons/mountain.svg";
import moon from "./assets/icons/moon.svg";
import briefcase from "./assets/icons/briefcase-business.svg";
import smile from "./assets/icons/smile.svg";
import scale from "./assets/icons/scale.svg";
import heartPulse from "./assets/icons/heart-pulse.svg";
import bird from "./assets/icons/bird.svg";
import flame from "./assets/icons/flame.svg";
import trophy from "./assets/icons/trophy.svg";
import palette from "./assets/icons/palette.svg";
import lightbulb from "./assets/icons/lightbulb.svg";

const gradientMap = {
  "#27AE60": "linear-gradient(135deg, #27AE60, #007E35)",
  "#3498DB": "linear-gradient(135deg, #3498DB, #1C5276)",
  "#E67E22": "linear-gradient(135deg, #DD802B, #A54E00)",
};

const iconMap = {
  connection: users,
  adventure: mountain,
  spirituality: moon,
  career: briefcase,
  happiness: smile,
  balance: scale,
  health: heartPulse,
  freedom: bird,
  passion: flame,
  success: trophy,
  creativity: palette,
  purpose: lightbulb,
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
