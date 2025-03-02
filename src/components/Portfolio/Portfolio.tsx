import { useState } from "react";
import "./Portfolio.css";
import Project from "../Project/ProjectTeaser";

function Portfolio() {
  const [projects] = useState([
    {
      title: "Something Borrowed",
      shortDescription:
        "Fosters community relationships & reduces via borrowing and lending items with neighbors.",
      tech: ["Node.js", "Express.js", "React"],
      image: "somethingborrowed.jpg",
      longDescription:
        "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products. The app currently runs on community accountability, however the application has the potential to be upgraded to using fee-per-day rentals from locals in your neighborhood.",
      link: "https://something-borrowed-app-2c8932a694d6.herokuapp.com/",
      hasRepo: true,
      repo: "https://github.com/michiewillman/something-borrowed",
    },
    {
      title: "Powell Custom Theme",
      shortDescription:
        "A full site editing theme created for our agency, Stellaractive. Named after the street on which our office resides, Powell uses WordPress' native Gutenberg editor to create a complete brand-focused environment for developers, designers and content managers alike.",
      tech: ["WordPress", "Gutenberg"],
    },
    {
      title: "NW Performance",
      shortDescription:
        "This simple brochure website for a local HVAC company was the perfect candidate for the first build to use our custom Powell theme.",
      tech: ["WordPress", "Gutenberg"],
    },
    {
      title: "Argus Corp.",
      shortDescription:
        "This brochure website was my first completely solo build on the Stellaractive development team. It was a great introduction to the frontend intracacies of our process using the Timber/Twig templating system.",
      tech: ["WordPress", "Timber", "Twig", "JavaScript"],
    },
    {
      title: "Stellaractive Website",
      shortDescription:
        "I jointed the Stellaractive's development team amidst building their newly re-vamped website. While most of the build was already handled at that time, I was thrilled to hop on board and dive into QC and touch-up work, as well as create a few new post types. I am currently building out a new Help section to act as a guide for both our clients and global WordPress site owners.",
      tech: ["WordPress", "Timber", "Twig", "JavaScript", "Custom Post Types"],
    },
    {
      title: "Blizzard MG",
      shortDescription:
        "I started this application during bootcamp intended for people with Myasthenia Gravis to manage their medications and symptoms for a better quality of life. As someone with MG, I have struggled in the past with these areas and wanted to help others facing the same challenges. I'm currently working on a rebuild in React Native for the iOS and Android stores.",
      tech: ["Node.js", "Express.js", "React"],
      image: "blizzardmg.jpg",
      longDescription: "",
      link: "https://blizzard-mg-2139349e4552.herokuapp.com/",
      hasRepo: true,
      repo: "https://github.com/michiewillman/mgapp",
    },
    {
      title: "Something Borrowed",
      shortDescription: "",
      tech: ["Node.js", "Express.js", "React"],
      // image: "campaire.jpg",
      longDescription:
        "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products.",
      // link: "https://michiewillman.github.io/campaire-app/",
      // hasRepo: true,
      // repo: "https://github.com/michiewillman/campaire-app",
    },
    {
      title: "CampAire",
      shortDescription: "",
      // tech: ["Node.js", "Express.js", "React"],
      // image: "campaire.jpg",
      // longDescription:
      //   "Something Borrowed is an application created to foster quality community connections while eliminating unnecessary consumer purchases through borrowing and lending everyday products.",
      // link: "https://michiewillman.github.io/campaire-app/",
      // hasRepo: true,
      // repo: "https://github.com/michiewillman/campaire-app",
    },
    {
      title: "Flying Black Cat",
      shortDescription:
        "Flying Black Cat - A brand geared towards young aviators and cat-lovers alike. Tells the story of one epic cat.",
      tech: ["Wordpress", "WooCommerce", "E-Commerce", "Yoast SEO"],
      image: "flyingblackcatmock.jpg",
      longDescription:
        "For more about the legend of the Flying Black Cat visit www.flyingblackcat.com.",
      link: "https://flyingblackcat.com/",
      hasRepo: false,
    },
    {
      title: "Ariav Investments",
      shortDescription: "Ariav Investments",
      tech: ["Node.js", "Express.js", "React"],
      image: "ariavmock.jpg",
      longDescription: "Ariav Investments",
      link: "http://ariav.com/",
      hasRepo: false,
    },
    {
      title: "Daily Schedule Manager",
      shortDescription:
        "Assists you with managing your daily tasks using local storage.",
      tech: ["HTML", "CSS"],
      image: "workdayscheduler.jpg",
      longDescription: "Just type it in, and save it!",
      link: "https://michiewillman.github.io/workday-scheduler/",
      hasRepo: true,
      repo: "https://github.com/michiewillman/workday-scheduler",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {/* For each project in the array, render a Project component with a unique key and pass the project longDescription */}
        {projects.map((project, index) => (
          <Project project={project} key={"project" + index} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
