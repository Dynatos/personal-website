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
    aboutMe: `This is where I showcase projects that I've created.
    Everything here is written in React and the components on this page utilize props to pull their content from a
    single data file. Any section can be edited simply by updating that data file.
    This site is built with Docker, served via Nginx, and hosted by DigitalOcean.`,
    experience: [
      {
        company: "North Shore Geeks",
        position: "Computer Repair Technician",
        startDate: "2010",
        endDate: "2013"
      },
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
    skills: ["HTML", "CSS", "JavaScript (ES6+)", "React", "Redux", "Git", "Node", "Docker"]
  }
};
