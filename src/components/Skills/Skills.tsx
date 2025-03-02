import "./Skills.css";

const allSkills = [
  {
    title: "HTML",
    type: "Language",
  },
  {
    title: "CSS",
    type: "Language",
  },
  {
    title: "JavaScript",
    type: "Language",
  },
  {
    title: "PHP",
    type: "Language",
  },
  {
    title: "React",
    type: "Framework",
  },
  {
    title: "TypeScript",
    type: "",
  },
  {
    title: "Timber/Twig",
    type: "",
  },
  {
    title: "Custom themes",
    type: "",
  },
  {
    title: "Gutenberg blocks",
    type: "",
  },
  {
    title: "SASS",
    type: "",
  },
  {
    title: "Git version control",
    type: "",
  },
  {
    title: "Google Tag Manager",
    type: "SEO",
  },
  {
    title: "Google APIs",
    type: "APIs",
  },
  {
    title: "Third-party APIs",
    type: "APIs",
  },
  {
    title: "WordPress",
    type: "CMS",
  },
  {
    title: "Adobe Photoshop",
    type: "Design Tool",
  },
  {
    title: "Adobe InDesign",
    type: "Design Tool",
  },
  {
    title: "Figma",
    type: "Design Tool",
  },
];

function Skills() {
  return (
    <section id="skills-section">
      <div className="flex-container">
        {allSkills.map((skill, index) => (
          <div className="skill" key="{index}">
            <h3 className="title">Design Forward</h3>
            <p className="description">Short Description</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
