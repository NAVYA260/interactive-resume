import { useState } from "react";

function Resume({ onLogout }) {
  const [filter, setFilter] = useState("");
  const [expanded, setExpanded] = useState(null);

  const resumeData = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Corp",
      skills: ["React", "JavaScript", "CSS"],
      description: "Developed responsive UI components using React.",
      year: "2024",
    },
    {
      role: "Web Developer",
      company: "Web Solutions",
      skills: ["HTML", "CSS", "JavaScript"],
      description: "Created and maintained multiple websites for clients.",
      year: "2023",
    },
  ];

  const filtered = filter
    ? resumeData.filter((job) =>
        job.skills.some((skill) =>
          skill.toLowerCase().includes(filter.toLowerCase())
        )
      )
    : resumeData;

  const downloadResume = () => {
    window.print();
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h2>My Interactive Resume</h2>
        <button onClick={downloadResume}>Download PDF</button>
        <button onClick={onLogout}>Logout</button>
      </div>

      <input
        type="text"
        placeholder="Filter by skill..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filtered.map((job, index) => (
        <div key={index} className="job-card">
          <h3>{job.role}</h3>
          <p>
            <strong>{job.company}</strong> ({job.year})
          </p>
          <p>
            <strong>Skills:</strong> {job.skills.join(", ")}
          </p>
          <button onClick={() => setExpanded(index === expanded ? null : index)}>
            {expanded === index ? "Hide Details" : "View Details"}
          </button>
          {expanded === index && <p>{job.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default Resume;
