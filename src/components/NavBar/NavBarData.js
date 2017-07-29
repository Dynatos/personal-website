export const navElements = ["homepage", "runescape", "todo"];

const navBarData = {

  //sends you back to the homepage
  homepage: {
    linkTo: "/",
    description: "Homepage"
  },

  //sends you to the runescape gear suggester
  runescape: {
    linkTo: "runescape",
    description: "Runescape Gear Suggestor"
  },

  //sends you to the basic todo app
  todo: {
    linkTo: "todo",
    description: "Basic todo app"
  },

  //sends you to 404 page
  nullTest: {
    linkTo: "non",
    description: "This is a null link"
  }

};

export default navBarData;
