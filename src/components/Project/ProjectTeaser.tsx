import "./ProjectTeaser.css";

function Project({ project }) {
  const { title, longDescription, tech, image, link, hasRepo, repo } = project;

  return (
    <div className="project-teaser" key={title}>
      <a className="btn" href={link}>
        <img
          src={`../../assets/${image}`}
          alt={title}
          className="project-image"
        />
        <div className="content">
          <h3 className="title">{title}</h3>
          <p>{longDescription}</p>
          <ul className="tech-list">
            {tech.map((item, index) => (
              <li key={"tech" + index}>{item}</li>
            ))}
          </ul>
          {/* If project hasRepo = true, ender a repo button */}
          {hasRepo && (
            <a href={repo}>
              <button className="repo-btn">View Repository Code</button>
            </a>
          )}
        </div>
      </a>
    </div>
  );
}

export default Project;
