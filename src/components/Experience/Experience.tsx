import "./Experience.css";

function Experience() {
  const careerRoles = [
    {
      title: "Front End Developer",
      company: "Stellaractive",
      startDate: new Date("2023-11-23"),
      description:
        "Build and maintain WordPress websites for 100+ clients. Custom code themes and plugins with a wide range of builders & dependencies. Resolve security vulnerabilities, maintain plugin & content updates. Manage B2C support and update requests for over 110 websites providing technical solutions and communicating directly with clients. ",
    },
    {
      title: "Senior Creative Content Designer",
      company: "Fanatics, Inc.",
      startDate: new Date("2018-09-01"),
      endDate: new Date("2023-11-22"),
      description:
        "Design and manage creative marketing content and custom-code device-responsive landing pages across hundreds of owned sites. Provide in-depth international content management training on the Fanatics custom built CMS. Manage ADA compliance audits and improve cross-site accessibility. Collaborate with A/B testing, tech and SEO teams to facilitate cross-site improvements.",
    },
    {
      title: "Freelance Web Designer & WordPress Devleoper",
      company: "Stellaractive",
      startDate: new Date("2016-06-01"),
      description:
        "Create content for, develop, launch and maintained websites for a variety of personal clients with WordPress, WooCommerce, and Adobe Creative Suite products.",
    },
    {
      title: "Glossy Finish Photography",
      company: "Lead Graphic Designer",
      startDate: new Date("2016-06-01"),
      endDate: new Date("2018-09-01"),
      description:
        "Launched new WordPress website, provided design training, designed event credentials & marketing graphics.",
    },
    {
      title: "Friends of Hemming Park",
      company: "Marketing Coordinator",
      startDate: new Date("2016-01-06"),
      endDate: new Date("2016-06-01"),
      description:
        "Developed marketing graphics for print and web; Full-page advertisements; Promotional materials; creating and updating MailChimp email marketing campaigns; Updating the website using Wordpress.",
    },
  ];

  return (
    <div>
      <ul>
        {careerRoles.map((role, index) => (
          <li key={index}>
            <p className="title">{role.title}</p>
            <p className="company">{role.company}</p>
            <p className="date-range">
              {role.startDate.toLocaleDateString()} -{" "}
              {role.endDate ? role.endDate.toLocaleDateString() : "Present"}
            </p>
            <p className="description">{role.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
