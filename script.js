
/* ======================================
   RANIA FAJRI — PORTFOLIO BILINGUE
   Français / Anglais
   Accueil + Projets Power BI
   ====================================== */

const translations = {

  /* ======================================
     VERSION FRANÇAISE
     ====================================== */

  fr: {

    // NAVIGATION
    navHome: "Accueil",
    navProjects: "Projets",
    navSkills: "Compétences",
    navExperience: "Parcours",
    navAbout: "À propos",
    navContact: "Contact",


    // ACCUEIL
    heroLabel: "Master MSI — Intelligence des données",
    heroTitle: 'Étudiante en <span>Master MSI</span>',
    heroDescription:
      "En dernière année de Master Management des Systèmes " +
      "d'Information, parcours Intelligence des données, " +
      "je recherche un stage en Data Analysis et Business " +
      "Intelligence à partir du 15 mars 2027.",

    discoverProjects: "Découvrir mes projets ↗",
    contactMe: "Me contacter",


    // PROJETS SUR LA PAGE D'ACCUEIL
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


    // COMPÉTENCES
    skillsTitle: "Mes compétences",
    skillsIntro:
      "Des outils techniques au service de l'analyse des données.",
    development: "Développement",
    informationSystems: "Systèmes d'information",


    // PARCOURS
    experienceTitle: "Mon parcours",
    masterTitle: "Master Management des Systèmes d'Information",
    hagerTitle: "Stage — Data Management Analyst",
    cciTitle: "Stage — Analyse de données et programmation",


    // À PROPOS
    aboutTitle: "À propos de moi",
    aboutText:
      "Étudiante en dernière année de Master MSI, " +
      "je m'intéresse à la manière dont les données " +
      "peuvent accompagner les décisions des organisations. " +
      "Mon parcours associe management, systèmes " +
      "d'information et compétences techniques.",


    // CONTACT
    contactTitle: "Travaillons ensemble.",
    contactDescription:
      "Je recherche un stage en Data Analysis et " +
      "Business Intelligence à partir du 15 mars 2027.",


    // PIED DE PAGE
    footerText: "Portfolio — Data Analysis & Business Intelligence",


    /* ======================================
       PAGE POWER BI
       ====================================== */

    // INTRODUCTION
    biPageTitle:
      'Mes projets <span>Business Intelligence</span>',

    biPageIntro:
      "Découvrez mes réalisations en analyse de données, " +
      "modélisation et conception de rapports interactifs " +
      "avec Power BI.",

    biPageSection: "Mes réalisations",

    biPageSectionIntro:
      "Projets universitaires et expériences professionnelles.",


    // PROJET 01 — JEUX VIDÉO
    biProject1Title:
      "01 — Analyse des ventes de jeux vidéo",

    biProject1Intro:
      "Projet universitaire réalisé avec Power BI. " +
      "Création d'un tableau de bord interactif permettant " +
      "d'analyser les ventes de jeux vidéo par console, " +
      "éditeur, genre et région.",

    biProject1Visual:
      "Visualisation des données — Tableau de bord interactif",

    biProject1Model:
      "Modélisation des données — Schéma en étoile",

    biProject1ModelText:
      "Conception d'un modèle de données en étoile composé " +
      "d'une table de faits (Fact) et de trois tables de " +
      "dimensions (DimProduit, DimTemps et DimLieu). " +
      "Cette structure facilite l'analyse des ventes " +
      "de jeux vidéo dans Power BI.",


    // PROJET 02 — STAGE POWER BI
    biProject2Title:
      "02 — Projet de stage — Business Intelligence & Power BI",

    biProject2Intro:
      "Lors de mon stage, j'ai travaillé sur la modélisation " +
      "de données et le développement de rapports Power BI " +
      "interactifs destinés au suivi des activités " +
      "opérationnelles et à l'analyse des performances.",

    biProject2Visual:
      "Visualisation des données — Rapports Power BI interactifs",

    biProject2VisualText:
      "Dans le cadre de mon stage, j'ai développé deux " +
      "rapports Power BI multipages reposant sur un même " +
      "modèle de données. Leur conception a porté sur " +
      "l'organisation des indicateurs clés de performance " +
      "(KPI), la création de visualisations interactives, " +
      "l'intégration de filtres et la navigation entre " +
      "plusieurs pages d'analyse. Ces rapports ont été " +
      "conçus pour faciliter le suivi des activités " +
      "opérationnelles, l'analyse des performances " +
      "et le reporting.",

    biProject2ImageCaption:
      "Reconstitution illustrative d'une interface de " +
      "reporting, sans données réelles de l'entreprise. " +
      "Cliquez sur l'image pour l'agrandir.",

    biProject2Model:
      "Modélisation des données — Schéma en étoile",

    biProject2ModelText:
      "La principale problématique de modélisation " +
      "concernait la gestion des taux de change. " +
      "Les achats étant réalisés dans plusieurs pays, " +
      "les montants pouvaient être exprimés dans " +
      "différentes devises, avec des taux de change " +
      "révisés chaque mois. L'objectif était de " +
      "concevoir un modèle en étoile adapté à cette " +
      "contrainte et à l'analyse des données dans Power BI.",


    // MODÈLE 1
    biModel1Title:
      "Modèle 1 — Première approche",

    biModel1Description:
      "Cette première approche intégrait directement " +
      "le taux de change dans la dimension des devises " +
      "(DimCurrency). Les différentes dates métier " +
      "étaient représentées par trois dimensions distinctes.",


    // MODÈLE 2
    biModel2Title:
      "Modèle 2 — Modèle intermédiaire",

    biModel2Description:
      "Cette deuxième version introduisait une table " +
      "de taux de change distincte (Fact_ExchangeRate), " +
      "afin de séparer les informations relatives " +
      "aux devises de celles concernant les taux de change.",


    // MODÈLE 3
    biModel3Title:
      "Modèle 3 — Modèle final retenu",

    biModel3Description:
      "Après comparaison des différentes approches, " +
      "j'ai retenu et implémenté un troisième modèle " +
      "intégrant une table de taux de change reliée " +
      "à DimCurrency. Cette architecture utilise " +
      "également une dimension de dates commune " +
      "pour représenter plusieurs dates métier.",


    // INDICATIONS ET CONCLUSION
    biCarouselHint:
      "Faites glisser pour changer de modèle. " +
      "Cliquez sur l'image pour l'agrandir.",

    biImageHint:
      "Cliquez sur le schéma pour l'agrandir.",

    biProject2Conclusion:
      "Le modèle final a constitué une base commune " +
      "pour les deux rapports Power BI, permettant " +
      "de structurer les données et de faciliter " +
      "leur exploitation dans les analyses " +
      "et les visualisations.",

    biBack: "← Retour à mes projets"

  },


  /* ======================================
     ENGLISH VERSION
     ====================================== */

  en: {

    // NAVIGATION
    navHome: "Home",
    navProjects: "Projects",
    navSkills: "Skills",
    navExperience: "Experience",
    navAbout: "About",
    navContact: "Contact",


    // HOMEPAGE
    heroLabel:
      "Master's in Information Systems — Data Intelligence",

    heroTitle:
      'Final-year <span>Master’s Student</span>',

    heroDescription:
      "I am a final-year Master's student in Information " +
      "Systems Management, specializing in Data Intelligence. " +
      "I am seeking an internship in Data Analysis and Business " +
      "Intelligence starting March 15, 2027.",

    discoverProjects: "Explore my projects ↗",
    contactMe: "Contact me",


    // HOMEPAGE PROJECTS
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


    // SKILLS
    skillsTitle: "My skills",
    skillsIntro:
      "Technical tools and skills for turning data into insights.",
    development: "Development",
    informationSystems: "Information Systems",


    // EXPERIENCE
    experienceTitle: "My background",
    masterTitle:
      "Master's in Information Systems Management",
    hagerTitle:
      "Internship — Data Management Analyst",
    cciTitle:
      "Internship — Data Analysis and Programming",


    // ABOUT
    aboutTitle: "About me",
    aboutText:
      "As a final-year Master's student in Information " +
      "Systems Management, I am interested in how data " +
      "can support organizational decision-making. " +
      "My background combines management, information " +
      "systems, and technical skills.",


    // CONTACT
    contactTitle: "Let's work together.",
    contactDescription:
      "I am looking for an internship in Data Analysis " +
      "and Business Intelligence starting March 15, 2027.",


    // FOOTER
    footerText:
      "Portfolio — Data Analysis & Business Intelligence",


    /* ======================================
       POWER BI PAGE
       ====================================== */

    // INTRODUCTION
    biPageTitle:
      'My <span>Business Intelligence</span> Projects',

    biPageIntro:
      "Explore my work in data analysis, data modeling, " +
      "and interactive Power BI reporting.",

    biPageSection: "My work",

    biPageSectionIntro:
      "Academic projects and professional experience.",


    // PROJECT 01 — VIDEO GAMES
    biProject1Title:
      "01 — Video Game Sales Analysis",

    biProject1Intro:
      "University project developed with Power BI. " +
      "Creation of an interactive dashboard to analyze " +
      "video game sales by console, publisher, " +
      "genre, and region.",

    biProject1Visual:
      "Data Visualization — Interactive Dashboard",

    biProject1Model:
      "Data Modeling — Star Schema",

    biProject1ModelText:
      "Design of a star schema data model consisting " +
      "of one fact table (Fact) and three dimension " +
      "tables (DimProduit, DimTemps, and DimLieu). " +
      "This structure supports video game sales " +
      "analysis in Power BI.",


    // PROJECT 02 — POWER BI INTERNSHIP
    biProject2Title:
      "02 — Internship Project — Business Intelligence & Power BI",

    biProject2Intro:
      "During my internship, I worked on data modeling " +
      "and the development of interactive Power BI " +
      "reports to support operational monitoring " +
      "and performance analysis.",

    biProject2Visual:
      "Data Visualization — Interactive Power BI Reports",

    biProject2VisualText:
      "During my internship, I developed two multi-page " +
      "Power BI reports based on a shared data model. " +
      "Their design focused on organizing key performance " +
      "indicators (KPIs), creating interactive visualizations, " +
      "implementing filters, and enabling navigation " +
      "between multiple analytical pages. These reports " +
      "were designed to support operational monitoring, " +
      "performance analysis, and reporting.",

    biProject2ImageCaption:
      "Illustrative reconstruction of a reporting " +
      "interface, without real company data. " +
      "Click the image to enlarge.",

    biProject2Model:
      "Data Modeling — Star Schema",

    biProject2ModelText:
      "The main data modeling challenge involved " +
      "exchange rate management. As purchases were " +
      "made across several countries, amounts could " +
      "be expressed in different currencies, with " +
      "exchange rates updated monthly. The objective " +
      "was to design a star schema that could " +
      "accommodate this requirement and support " +
      "data analysis in Power BI.",


    // MODEL 1
    biModel1Title:
      "Model 1 — Initial Approach",

    biModel1Description:
      "This initial approach stored the exchange rate " +
      "directly in the currency dimension (DimCurrency). " +
      "Different business dates were represented " +
      "by three separate date dimensions.",


    // MODEL 2
    biModel2Title:
      "Model 2 — Intermediate Model",

    biModel2Description:
      "This second version introduced a separate " +
      "exchange rate table (Fact_ExchangeRate) " +
      "to distinguish currency information " +
      "from exchange rate information.",


    // MODEL 3
    biModel3Title:
      "Model 3 — Final Selected Model",

    biModel3Description:
      "After comparing the different approaches, " +
      "I selected and implemented a third model " +
      "with an exchange rate table linked to " +
      "DimCurrency. This architecture also uses " +
      "a shared date dimension to represent " +
      "several business dates.",


    // INSTRUCTIONS AND CONCLUSION
    biCarouselHint:
      "Swipe to switch between models. " +
      "Click an image to enlarge.",

    biImageHint:
      "Click the diagram to enlarge.",

    biProject2Conclusion:
      "The final model provided a shared foundation " +
      "for both Power BI reports, structuring the " +
      "data and supporting its use in analysis " +
      "and visualizations.",

    biBack: "← Back to my projects"

  }

};


/* ======================================
   CHANGEMENT DE LANGUE
   ====================================== */

function changeLanguage(language) {

  const dictionary = translations[language];

  if (!dictionary) {
    return;
  }


  // Traduire les éléments de la page
  document.querySelectorAll("[data-i18n]").forEach((element) => {

    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {

      // Ces titres contiennent un <span>
      // pour conserver la couleur bleue.
      if (key === "heroTitle" || key === "biPageTitle") {

        element.innerHTML = dictionary[key];

      } else {

        element.textContent = dictionary[key];

      }

    }

  });


  // Mettre à jour la langue du document
  document.documentElement.lang = language;


  // Mettre à jour les boutons FR / EN
  const frenchButton = document.getElementById("lang-fr");
  const englishButton = document.getElementById("lang-en");

  if (frenchButton) {

    frenchButton.classList.toggle(
      "active",
      language === "fr"
    );

    frenchButton.setAttribute(
      "aria-pressed",
      String(language === "fr")
    );

  }

  if (englishButton) {

    englishButton.classList.toggle(
      "active",
      language === "en"
    );

    englishButton.setAttribute(
      "aria-pressed",
      String(language === "en")
    );

  }


  // Mémoriser la langue choisie
  try {

    localStorage.setItem(
      "portfolio-language",
      language
    );

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


  // Bouton français
  if (frenchButton) {

    frenchButton.addEventListener("click", () => {

      changeLanguage("fr");

    });

  }


  // Bouton anglais
  if (englishButton) {

    englishButton.addEventListener("click", () => {

      changeLanguage("en");

    });

  }


  // Français par défaut
  let savedLanguage = "fr";


  // Récupérer la langue déjà choisie
  try {

    const stored = localStorage.getItem(
      "portfolio-language"
    );

    if (stored === "fr" || stored === "en") {

      savedLanguage = stored;

    }

  } catch (error) {

    savedLanguage = "fr";

  }


  // Appliquer la langue au chargement
  changeLanguage(savedLanguage);

});
