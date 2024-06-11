import yoga from "../assets/images/yoga.jpg";
import dashboard from "../assets/images/dashboard.jpg";
import news from "../assets/images/news.jpg";
import fabric from "../assets/images/fabric.jpg";
import weather from "../assets/images/weather.jpg";

const imageMap = {
  yoga,
  dashboard,
  news,
  fabric,
  weather,
};

const projectsList = [
  {
    id: 1,
    title: "YogaPlace",
    subtitle: "classes booking tool",
    text: "This website is built with Ruby on Rails and API endpoints as backend, and the frontend utilizes React with the Vite framework and Framer Motion library for smooth animations. Work in progress: booking validation system for instructor + implementing more Framer Motion features.",
    features: [
      {
        id: 1,
        name: "Yoga Lessons Overview",
        text: "View detailed information about yoga lessons",
      },
      {
        id: 2,
        name: "Agenda",
        text: "Check the schedule for upcoming yoga classes (date and location)",
      },
      {
        id: 3,
        name: "User Management",
        text: "Either as instructor or student, the dashboard will change accordingly",
      },
      {
        id: 4,
        name: "Booking Management",
        text: "The user can book classes which will be displayed on their personal page",
      },
    ],
    path: `/projects/1`,
    image: "yoga",
    videoUrl: "https://youtu.be/6hY0nV62BCE",
    github:
      "https://github.com/LaureneEpp/react-demos/tree/main/004-yogaplace-react-rails",
    stack: ["Ruby on Rails", "React", "Vite Framework", "Framer Motion"],
    category: ["full stack"],
  },

  {
    id: 2,
    title: "Manage my payroll",
    subtitle: "Payroll management tool",
    text: "This small project is designed to streamline payroll management processes for businesses. It aims to simplify tasks related to managing departments, teams, and employees' payroll information.",
    features: [
      {
        id: 1,
        name: "Department Management: ",
        text: "Easily create, update, and delete departments within your organization. ",
      },
      {
        id: 2,
        name: "Team Management:",
        text: " Organize employees into teams for efficient collaboration and management",
      },
      {
        id: 3,
        name: "Employee Management:",
        text: "Add, edit, and remove employee profiles, including their personal and payroll information",
      },
      ],
      path: `/projects/2`,
      image: "dashboard",
    videoUrl: "https://youtu.be/7HWfcRV2cxM",
    github:
      "https://github.com/LaureneEpp/rails-demos/tree/main/001_manage-my-paroll-rails",
    stack: ["Ruby on Rails", "avascript"],
    category: ["full stack"],
  },
  //   {
  //     id: 3,
  //     title: "NewsBlog",
  //     path: `/projects/3`,
  //     image: "news",
  //     text: "blog post",
  //     stack: ["Ruby on Rails"],
  //   },
  //   {
  //     id: 4,
  //     title: "Circular Lab",
  //     path: `/projects/4`,
  //     image: "fabric",
  //     text: "circular lab",
  //     stack: ["Ruby on Rails", "JavaScript"],
  //   },
  {
    id: 5,
    title: "What is the weather today?",
    subtitle: "weather app",
    path: `/projects/5`,
    image: "weather",
    text: "This app uses data from a weather API to provide real-time weather information. The app makes API requests to retrieve weather data for a city upon user's input.",
    features: [
      {
        id: 1,
        name: "Weather Display:",
        text: "Basic information concerning the current weather conditions are displayed",
      },
      {
        id: 2,
        name: "Additional Information",
        text: "The user can click on a list of information types to view additional weather-related data",
      },
      {
        id: 3,
        name: "Map icon",
        text: "The user can click the map icon and view the location on Google maps where the weather information is based",
      },
      {
        id: 4,
        name: "Reset button",
        text: "the user can reset the form and weather information",
      },
    ],
    videoUrl: "https://youtu.be/YVvU_OyiE44",
    github:
      "https://github.com/LaureneEpp/react-demos/tree/main/003-weather-js-rails-demo",
    stack: ["Ruby on Rails", "avascript", "Bootstrap"],
    category: ["full stack"],
  },
];

export { projectsList, imageMap };
