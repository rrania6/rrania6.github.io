
/* ======================================
   RANIA FAJRI — PORTFOLIO BILINGUE
   Français / Anglais
   ====================================== */

const translations = {
  fr: {
    // Navigation
    navHome: "Accueil",
    navProjects: "Projets",
    navSkills: "Compétences",
    navExperience: "Parcours",
    navAbout: "À propos",
    navContact: "Contact",

    // Accueil
    heroLabel: "Master MSI — Intelligence des données",
    heroTitle: 'Étudiante en <span>Master MSI</span>',
    heroDescription:
      "En dernière année de Master Management des Systèmes " +
      "d'Information, parcours Intelligence des données, " +
      "je recherche un stage en Data Analysis et Business " +
      "Intelligence à partir du 15 mars 2027.",

    discoverProjects: "Découvrir mes projets ↗",
    contactMe: "Me contacter",

    // Projets
    projectsTitle: "Mes projets",
    projectsIntro:
      "Une sélection de mes réalisations académiques et personnelles.",
    skiLink: "Découvrir le projet →",
    skiTitle: "À la découverte du Ski",
    skiDescription:
     "Site web pédagogique réalisé en équipe dans le cadre " +
     "d'un projet universitaire. Présentation des stations " +
     "de ski, des équipements et de conseils pour les débutants.",

    biTitle: "Business Intelligence",
    biDescription:
      "Création de rapports et tableaux de bord " +
      "pour l'analyse et la visualisation de données.",
   biLink: "Découvrir le projet →",
    cvTitle: "CV en HTML & CSS",
    cvDescription:
      "Conception d'un CV web responsive avec HTML et CSS.",

    dbTitle: "Bases de données",
    dbDescription:
      "Modélisation et implémentation de bases " +
      "de données relationnelles.",

    // Compétences
    skillsTitle: "Mes compétences",
    skillsIntro:
      "Des outils techniques au service de l'analyse des données.",
    development: "Développement",
    informationSystems: "Systèmes d'information",

    // Parcours
    experienceTitle: "Mon parcours",
    masterTitle: "Master Management des Systèmes d'Information",
    hagerTitle: "Stage — Data Management Analyst",
    cciTitle: "Stage — Analyse de données et programmation",

    // À propos
    aboutTitle: "À propos de moi",
    aboutText:
      "Étudiante en dernière année de Master MSI, " +
      "je m'intéresse à la manière dont les données " +
      "peuvent accompagner les décisions des organisations. " +
      "Mon parcours associe management, systèmes " +
      "d'information et compétences techniques.",

    // Contact
    contactTitle: "Travaillons ensemble.",
    contactDescription:
      "Je recherche un stage en Data Analysis et " +
      "Business Intelligence à partir du 15 mars 2027.",

    // Pied de page
    footerText: "Portfolio — Data Analysis & Business Intelligence"
  },

  en: {
    // Navigation
    navHome: "Home",
    navProjects: "Projects",
    navSkills: "Skills",
    navExperience: "Experience",
    navAbout: "About",
    navContact: "Contact",

    // Homepage
    heroLabel: "Master's in Information Systems — Data Intelligence",
    heroTitle: 'Final-year <span>Master’s Student</span>',
    heroDescription:
      "I am a final-year Master's student in Information " +
      "Systems Management, specializing in Data Intelligence. " +
      "I am seeking an internship in Data Analysis and Business " +
      "Intelligence starting March 15, 2027.",

    discoverProjects: "Explore my projects ↗",
    contactMe: "Contact me",

    // Projects
    projectsTitle: "My projects",
    projectsIntro:
      "A selection of my academic and personal projects.",
   skiLink: "Discover the project →",
   skiTitle: "Discovering Skiing",
skiDescription:
  "Educational website developed as a team project " +
  "for university. Featuring ski resorts, equipment " +
  "and practical advice for beginners.",

    biTitle: "Business Intelligence",
    biDescription:
      "Creation of reports and dashboards " +
      "for data analysis and visualization.",
   biLink: "Discover the project →",
    cvTitle: "HTML & CSS Resume",
    cvDescription:
      "Design of a responsive online resume using HTML and CSS.",

    dbTitle: "Database Design",
    dbDescription:
      "Design and implementation of relational databases.",

    // Skills
    skillsTitle: "My skills",
    skillsIntro:
      "Technical tools and skills for turning data into insights.",
    development: "Development",
    informationSystems: "Information Systems",

    // Experience
    experienceTitle: "My background",
    masterTitle: "Master's in Information Systems Management",
    hagerTitle: "Internship — Data Management Analyst",
    cciTitle: "Internship — Data Analysis and Programming",

    // About
    aboutTitle: "About me",
    aboutText:
      "As a final-year Master's student in Information " +
      "Systems Management, I am interested in how data " +
      "can support organizational decision-making. " +
      "My background combines management, information " +
      "systems, and technical skills.",

    // Contact
    contactTitle: "Let's work together.",
    contactDescription:
      "I am looking for an internship in Data Analysis " +
      "and Business Intelligence starting March 15, 2027.",

    // Footer
    footerText: "Portfolio — Data Analysis & Business Intelligence"
  }
};


/* ======================================
   CHANGEMENT DE LANGUE
   ====================================== */

function changeLanguage(language) {
  const dictionary = translations[language];

  if (!dictionary) return;

  // Traduire tous les éléments de la page
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      // Le titre contient volontairement un <span>
      // pour conserver sa couleur bleue.
      if (key === "heroTitle") {
        element.innerHTML = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    }
  });

  // Mettre à jour la langue du document
  document.documentElement.lang = language;

  // Mettre à jour les boutons
  const frenchButton = document.getElementById("lang-fr");
  const englishButton = document.getElementById("lang-en");

  frenchButton.classList.toggle("active", language === "fr");
  englishButton.classList.toggle("active", language === "en");

  frenchButton.setAttribute(
    "aria-pressed",
    String(language === "fr")
  );

  englishButton.setAttribute(
    "aria-pressed",
    String(language === "en")
  );

  // Mémoriser le choix du visiteur
  try {
    localStorage.setItem("portfolio-language", language);
  } catch (error) {
    // Le changement de langue fonctionne
    // même si le stockage est indisponible.
  }
}


/* ======================================
   INITIALISATION
   ====================================== */

document.addEventListener("DOMContentLoaded", () => {
  const frenchButton = document.getElementById("lang-fr");
  const englishButton = document.getElementById("lang-en");

  frenchButton.addEventListener("click", () => {
    changeLanguage("fr");
  });

  englishButton.addEventListener("click", () => {
    changeLanguage("en");
  });

  // Français par défaut, sauf si une
  // autre langue a déjà été choisie.
  let savedLanguage = "fr";

  try {
    const stored = localStorage.getItem("portfolio-language");

    if (stored === "fr" || stored === "en") {
      savedLanguage = stored;
    }
  } catch (error) {
    savedLanguage = "fr";
  }

  changeLanguage(savedLanguage);
});
