// Any links added must be added to both the navElements array and the navBarData object, otherwise they will not work
export const navElements = ["homepage", "runescape", "todo"];

const navBarData = {

  // Sends you back to the homepage
  homepage: {
    linkTo: "/",
    description: "Homepage"
  },

  // Sends you to the runescape gear suggester
  runescape: {
    linkTo: "runescape",
    description: "Runescape Tool"
  },

  // Sends you to the basic todo app
  todo: {
    linkTo: "todo",
    description: "Todo App"
  }
};

export default navBarData;
