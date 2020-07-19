
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Deepak Chaudhary",
  title: "Hi all, I'm Deepak",
  subTitle: emoji("Very keen interest in Machine Learning/Data Science with expertise in Natural Language Processing, computer vision, transformer models and scaling ML models using low latency optimization objective functions. Very strong command over data structures and algorithms. 4 star rated on codechef.com. On the other side of my life I heavily follow and play football, chess, cricket and swimming."),
  resumeLink: "https://drive.google.com/file/d/1v_Kw3bkv0haxR6dVTjEHQww8-7bboNnq/view?usp=sharing"
};

/// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/deepakchaudhary7",
  linkedin: "https://www.linkedin.com/in/deepak-chaudhary-197b45145/",
  gmail: "deepakvats97@gmail.com",
  Instagram: "https://www.instagram.com/07_deepak/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skill Set",
  //subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Languages - C, C++, Python, java (novice), MATLAB, OCTAVE and javascript"),
    emoji("⚡ Frameworks - django, flask, node.js and servlet architecture(familiar)"),
    emoji("⚡ Machine Lerning - Regression models, SVM, Random forest ensembles, transformers, neural networks and optimization objectives"),
    emoji("⚡ Tools - git, tensorflow, pytorch, LaTeX, scikit learn, GCP"),
    emoji("⚡ Other Profiles - chess.com and lichess.org- deepakchaudhary2702 | codechef and codeforces - deepak_d14")

  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures and algorithms",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "50%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",   
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",  
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "deepakchaudhary7", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
    
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "",
      subtitle: "Got under 200 rank in google coding kickstart global competition in 2017",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
      ]
    },
    {
      title: "",
      subtitle: "Got global rank of 38 in codechef.com july 2017 cook off coding challenge",
      image: require("./assets/images/download.jpg"),
      footerLink: [
      ]
    },

  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "I will soon be writing blogs on NLP topics and ML system design",

  blogs: [
   
  ]
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: "",

  talks: [
   
  ]
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: []
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9654939052",
  email_address: "deepakvats97@gmail.com"
};

//Twitter Section


const twitterDetails = {

  userName : ""//Replace "twitter" with your twitter username without @
  
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
