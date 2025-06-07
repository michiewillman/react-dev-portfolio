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
    <section id="skills" className="layout-constrain-1000">
      <h2>Technologies I work with</h2>
      <div className="skill-list">
        {allSkills.map((skill, index) => (
          <div className="skill flex-row" key={index}>
            <div className="badge">X</div>
            <div>
              <h3 className="title">{skill.title}</h3>
              <p className="description">{skill.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
