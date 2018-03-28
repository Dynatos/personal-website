// Any links added must be added to both the navElements array and the navBarData object, otherwise they will not work

export const navElements = [ // Order of strings determines order in navbar
  "homepage",
  "runescape",
  "pathofexile",
  "calculator",
  "todo",
  /* "secondary",
  "articles" */
];

// String names in navElements must match navBarData key names in order to get mapped onto the navbar

const navBarData = {

  // Sends you back to the homepage
  homepage: {
    linkTo: "/",
    description: "Home"
  },

  // Sends you to the runescape gear suggester
  runescape: {
    linkTo: "runescape",
    description: "RS Gear"
  },

  // Sends you to the todo app
  todo: {
    linkTo: "todo",
    description: "Todos"
  },
  
  // Sends you to the calculator
  calculator: {
    linkTo: "calculator",
    description: "Calculator"
  },
  
  // Sends you to the PoE DPS tool
  pathofexile: {
    linkTo: "poe_dps",
    description: "PoE DPS"
  },
  
  // Sends you to the article's page
  // articles: {
  //   linkTo: "articles",
  //   description: "Articles"
  // },
  
  // Sends you to the second homepage
  // secondary: {
  //   linkTo: "secondary_home",
  //   description: "Home #2"
  // }
};

export default navBarData;
