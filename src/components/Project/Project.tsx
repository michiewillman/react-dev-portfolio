import "./Project.css";

function Project({ project }) {
  const {
    title,
    description,
    technologies,
    image,
    details,
    link,
    hasRepo,
    repo,
  } = project;

  return (
    <div className="project-container" key={title}>
      <div className="project-item">
        {/* <img
          src={require(`../../assets/${image}`)}
          alt={title}
          className="project-image"
        /> */}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p>{description}</p>
        <div className="project-buttons">
          <a className="project-btn" href={link}>
            <button className="btn">View {type}</button>
          </a>
          {/* If project hasRepo = true, ender a repo button */}
          {hasRepo && (
            <a href={repo}>
              <button className="btn">View Repository Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
