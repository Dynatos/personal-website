// Any links added must be added to both the navElements array and the navBarData object, otherwise they will not work
export const navElements = ["homepage", "secondary", "runescape", "todo", "calculator", "articles"];

const navBarData = {

  // Sends you back to the homepage
  homepage: {
    linkTo: "/",
    description: "Home"
  },

  // Sends you to the runescape gear suggester
  runescape: {
    linkTo: "runescape",
    description: "RS Tool"
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
  
  // Sends you to the article's page
  articles: {
    linkTo: "articles",
    description: "Articles"
  },
  
  // Sends you to the article's page
  secondary: {
    linkTo: "secondary_home",
    description: "Home #2"
  }
};

export default navBarData;
