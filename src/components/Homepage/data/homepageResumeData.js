export const resumeData = {
  pictureAndInfoBox: {
    name: "Jason Wortley",
    title: "Web Developer",
    currentResidence: "Seattle, Washington",
    contactInfo: "jason@jasonwortley.com",
    externalURLs: [
      "https://www.github.com/dynatos",
      "https://www.facebook.com/JasonWortleyDynatos",
    ],
    externalURLImages: [
      "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
      "http://login.create.net/images/icons/user/facebook_30x30.png"
    ],
    description: "This page is written in React and generated from a JavaScript object containing data, all sections " +
    "are easily extensible and/or updated in seconds."
  },

  dataBox: {
    aboutMe: "I am an aspiring web developer using this site as my resume and proof of abilities. This page is written " +
    "in React and all of the sections on this page pull their data from a single data file. Every section on this page " +
    "can be updated by simply changing that data file, and any section can be duplicated with a single component call. " +
    "This makes for robust, reusable code, while also keeping this page easy to maintain and update. Both of which are " +
    "big time savers.",
    experience: [
      {
        company: "Kauai Nut Roasters",
        position: "Nut Bagger > Nut Roaster > Head Roaster & Kitchen Manager",
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
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Git", "ES2016", "NPM", "Docker"]
  }
};
