import "./Education.css";

function Education() {
  return (
    <section id="education">
      <div className="education-card">
        <p className="school">University of Oregon</p>
        <p className="title">Certificate in Full Stack Web Development</p>
        <p className="year">2023</p>
        <p className="location">Portland, OR</p>
      </div>
      <div className="education-card">
        <p className="school">University of North Florida</p>
        <p className="title">Bachelor of Communications in Public Relations</p>
        <p className="title">Minor in Photography</p>
        <p className="year">2016</p>
        <p className="location">Jacksonville, FL</p>
      </div>
    </section>
  );
}

export default Education;
