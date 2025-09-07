/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Dileep Prajapati",
  // logo_name: "DP",
  nickname: "Dileep ",
  full_name: "Dileep Prajapati",
  subTitle: "React Developer, Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1QIhYe5NIyTnRWnzLVRz-emOKRXHg1rkE/view",
  mail: "dileepprajapati6706@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/dileepprajapati706",
  linkedin: "https://www.linkedin.com/in/dileep-prajapati-307550367/",
  gmail: "dileepprajapati6706@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  // twitter: "https://twitter.com/Harikrushn9",
  // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "React Development",
      fileName: "FullStackImg",
      skills: [
        "⚛️ Developing highly interactive and dynamic web user interfaces using React.js",
        "⚛️ Building fully responsive front-end designs with HTML, CSS (Bootstrap/Tailwind), and JavaScript",
        "⚛️ Managing state efficiently using React Hooks and Context API",
        "⚛️ Integrating REST APIs and handling asynchronous data using Axios or Fetch",
        "⚛️Using React Router for smooth single-page application (SPA) navigation",
        "⚛️ Writing reusable components and optimizing performance with React best practices",
        "⚛️ Version control and team collaboration using Git and GitHub",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        //
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Alpine Institude of Technology",
      subtitle: "Bachelor of Technology",
      logo_path: "alpine.jpg",
      alt_name: "alpine",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied core subjects like Web devlopment, Networking , Advanced Web Development.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://alpineujjain.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "free code campe",
      subtitle: "Front End Development Libraries",
      logo_path: "freecodecamp.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/17LRrY_KRcA7VA2JZnJaZiyzxiYCKoRDk/view?usp=sharing",
      alt_name: "Front End Development Libraries",
      color_code: "black",
    },
    {
      title: "skill Up",
      subtitle: "JavaScript Essentials",
      logo_path: "simplelern.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1hmof0d4Ci481F-KrxJ-IbTjtXIdkVfGW/view?usp=sharing",
      alt_name: "JavaScript Essentials",
      color_code: "#007bb8",
      // color_code: "#fffbf3",
    },
    {
      title: "simplilearn",
      subtitle: "React Fundamentals",
      logo_path: "simplelern.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1rga4jZIoY6Vs5b8eBlD_w85jjaQrEwiJ/view?usp=sharing",
      alt_name: "React Fundamentals",
      color_code: "#ed872d",
      // color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I specialize in building modern and responsive web applications using React.js, along with experience in developing Node.js backends and Python scripts. Below are some of my featured projects. Please note that not all projects are available on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dileep-crop.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Linkdin",
    link: "https://www.linkedin.com/in/dileep-prajapati-307550367/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    // {
    //   id: "0",
    //   name: "Keep Calm and Carry On",
    //   url: "https://github.com/harikanani/Keep-Calm-and-Carry-On.github.io",
    //   description:
    //     "This platform enables users to practice Augmented Reality meditation, play stress burster games, track task completion and engage in motivational exercises to cope with stress and anxiety at work.  ",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
