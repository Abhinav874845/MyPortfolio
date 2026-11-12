
import { motion } from "framer-motion";
import {
  ExternalLink,
  FolderGit2,
  ArrowUpRight,
  Code2,
  Database,
  Bot
} from "lucide-react";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Personal Portfolio Website",
    category: "WEB DEVELOPMENT",
    description:
      "A modern personal portfolio website built to showcase my skills, projects and learning journey with a clean dark interface.",
    technologies: ["React", "JavaScript", "CSS", "Framer Motion"],
    icon: Code2,
    status: "In Progress",
    github: "",
    demo: ""
  },
  {
    number: "02",
    title: "Offline AI Assistant",
    category: "AI / HACKATHON CONCEPT",
    description:
      "An AI assistant concept designed to explore question answering, intent detection and information retrieval for offline-friendly applications.",
    technologies: ["Python", "NLP", "RAG", "AI"],
    icon: Bot,
    status: "Concept",
    github: "",
    demo: ""
  },
  {
    number: "03",
    title: "SQL Database Practice",
    category: "DATABASE",
    description:
      "A collection of SQL exercises covering database creation, queries, constraints, filtering and aggregate operations.",
    technologies: ["MySQL", "SQL", "Database Design"],
    icon: Database,
    status: "Learning Project",
    github: "",
    demo: ""
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-glow"></div>

      {/* Section Heading */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="projects-label">
          <FolderGit2 size={15} />
          MY RECENT WORK
        </span>

        <h2>
          Featured <span>Projects.</span>
        </h2>

        <p>
          Some of my projects, experiments and practical
          learning experiences.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">

        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{ y: -8 }}
            >

              {/* Preview Area */}
              <div className="project-preview">

                <div className="project-preview-top">
                  <span>PROJECT / {project.number}</span>

                  <span className="project-status">
                    {project.status}
                  </span>
                </div>

                <div className="project-preview-icon">
                  <Icon size={55} strokeWidth={1.3} />
                </div>

                <span className="project-preview-title">
                  {project.title}
                </span>

                <div className="project-preview-decoration">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

              {/* Project Details */}
              <div className="project-details">

                <span className="project-category">
                  {project.category}
                </span>

                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={21} />
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="project-links">

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Code2 size={17} />
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link-disabled">
                      <Code2 size={20} />
                      GitHub
                    </span>
                  )}

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="project-link-disabled">
                      Live Demo
                      <ExternalLink size={16} />
                    </span>
                  )}

                </div>

              </div>

            </motion.article>
          );
        })}

      </div>

      {/* Bottom Message */}
      <motion.div
        className="projects-footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>
          More ideas. More experiments. More projects to build.
        </p>
        <span>Always building something new.</span>
      </motion.div>

    </section>
  );
}

export default Projects;
