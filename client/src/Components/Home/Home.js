import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [contactExpanded, setContactExpanded] = useState(false);
  const [error, setError] = useState(null);
  const [readme, setReadme] = useState("");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    fetch("https://api.github.com/users/zachscape/repos")
      .then((response) => response.json())
      .then((repos) => {
        return Promise.all(
          repos.map((repo) => {
            return fetch(
              `https://api.github.com/repos/zachscape/${repo.name}/readme`
            )
              .then((response) => response.json())
              .then((data) => {
                let decodedReadme = atob(data.content);
                let first300Words = decodedReadme
                  .split(" ")
                  .slice(0, 50)
                  .join(" ");
                return {
                  ...repo,
                  readme: decodedReadme,
                  shortReadme: first300Words + "...",
                };
              });
          })
        );
      })
      .then((projectsWithReadme) => setProjects(projectsWithReadme))
      .catch((error) => setError(error));
  }, []);

  const handleInputChange = (event) => {
    setContactForm({
      ...contactForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleContactClick = (event) => {
    event.stopPropagation();
    setContactExpanded(!contactExpanded);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      alert("All fields are required");
      return;
    }

    fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent successfully!");
        } else {
          alert("An error occurred. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleCardClick = (id, readme) => {
    setExpandedProjectId(id);
    setReadme(readme);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="home">
      <div className="game-section">
        <h2>Play your way in the Afterlands</h2>
        <a href="/afterlands">Learn More</a>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div
            className={`project-card ${
              expandedProjectId === project.id ? "expanded" : ""
            }`}
            key={project.id}
            onClick={() => handleCardClick(project.id, project.readme)}
          >
            <h3>{project.name}</h3>
            {expandedProjectId === project.id ? (
              <>
                <div style={{ whiteSpace: "pre-wrap" }}>{project.readme}</div>
                <a href={project.html_url} onClick={(e) => e.stopPropagation()}>
                  View on GitHub
                </a>
              </>
            ) : (
              <p>{project.shortReadme}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
