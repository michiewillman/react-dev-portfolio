import "./Experience.css";

function Experience() {
  const careerRoles = [
    {
      title: "Front End Developer",
      company: "Stellaractive",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-06-01"),
      description: "",
    },
    {
      title: "Senior Creative Content Designer",
      company: "Fanatics, Inc.",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-06-01"),
      description: "",
    },
    {
      title: "Freelance Web Designer & WordPress Devleoper",
      company: "Stellaractive",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-06-01"),
      description: "",
    },
    {
      title: "Glossy Finish Photography",
      company: "Lead Graphic Designer",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-06-01"),
      description: "",
    },
    {
      title: "Friends of Hemming Park",
      company: "Marketing Coordinator",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-06-01"),
      description: "",
    },
  ];

  return (
    <div>
      <ul>
        {careerRoles.map((role, index) => (
          <li key={index}>
            <p class="title">{role.title}</p>
            <p class="company">{role.company}</p>
            <p class="date-range">
              {role.startDate.toLocaleDateString()} -{" "}
              {role.endDate ? role.endDate.toLocaleDateString() : "Present"}
            </p>
            <p class="description">{role.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
