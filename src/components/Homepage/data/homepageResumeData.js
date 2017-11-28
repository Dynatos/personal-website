export const resumeData = {
  pictureAndInfoBox: {
    name: "Jason Wortley",
    title: "Web Developer",
    currentResidence: "Seattle, Washington",
    contactInfo: "jason@jasonwortley.com",
    externalURLs: [
      "https://www.facebook.com/JasonWortleyDynatos",
      "https://www.github.com/dynatos",
      "https://www.linkedin.com/in/jason-wortley-902627148/"
    ],
    externalURLImages: [
      "http://login.create.net/images/icons/user/facebook_30x30.png",
      "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
      "https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-256.png"
    ],
    description: "This page is written in React and generated from a JavaScript object containing data, all sections " +
    "are easily extensible and/or updated in seconds."
  },

  dataBox: {
    aboutMe: `I am an aspiring web developer using this site as my portfolio and central hub for projects.
    This site is written using React and all of the components on this page pull their data from a single data file.
    Each component can be edited by simply updating that data file, and any section can be duplicated with a single
    component call. This method of design makes for reusable code and keeps this page easy to maintain and update.
    The rest of this site consists of various projects that I built to practice and demonstrate what I have learned.`,
    experience: [
      {
        company: "Kauai Nut Roasters",
        position: "Nut Bagger > Roaster > Head Roaster & Kitchen Manager > Owner",
        startDate: "July 2012",
        endDate: "March 2017"
      },
      {
        company: "Kauai Nut Roasters",
        position: "Website Manager",
        startDate: "November 2016",
        endDate: "Present Day"
      },
      // {
      //   company: "test",
      //   position: "test",
      //   startDate: "test",
      //   endDate: "test"
      // }
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Git", "ES2016+", "Node/NPM"]
  }
};
