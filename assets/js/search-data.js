// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-journey",
          title: "journey",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/journey/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-diabetic-retinopathy-grading",
          title: 'Diabetic Retinopathy Grading',
          description: "This project is trained to detect Diabetic Retinopathy severity levels using DenseNet121 given a retina / fundus image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_project/";
            },},{id: "projects-indian-food-vision",
          title: 'Indian Food Vision',
          description: "A indian foods image classification project trained on the Khana dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-indian-recipe-rag",
          title: 'Indian Recipe RAG',
          description: "RAG project which takes a user query describing their needs and gets the recipe from vector DataBase",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-chat-with-pdf",
          title: 'Chat with PDF',
          description: "RAG project which takes a PDF and user can ask questions from it",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-digital-poke-professor-generation-9-pokemon-classifier",
          title: 'Digital Poke-Professor - Generation 9 Pokemon Classifier',
          description: "An image classifier which is trained to classify the 120 unique Pokemons trained using resnet101 and fastai.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-predicting-age-of-abalone",
          title: 'Predicting age of Abalone',
          description: "This is a regression project that predicts the age of abalone from physical measurements.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-predicting-weather-of-nashik",
          title: 'Predicting weather of Nashik',
          description: "This project predicts the weather of Nashik as to sunny, rainy, or cloudy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-predicting-cybersecurity-threats",
          title: 'Predicting CyberSecurity threats',
          description: "This project predicts cybersecurity threats trained on network intrusion detection dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-heart-disease-prediction",
          title: 'Heart disease prediction',
          description: "This project predicts the presence of heart disease in patients based on various health metrics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-bulldozer-price-prediction",
          title: 'Bulldozer price prediction',
          description: "This project predicts the prices of bulldozers based on various features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-dog-vision-project",
          title: 'Dog vision project',
          description: "This is a Deep Learning project which classifies dog breeds based on input image.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-number-system-converter",
          title: 'Number System Converter',
          description: "This project converts numbers between different number systems (binary, decimal, hexadecimal).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
