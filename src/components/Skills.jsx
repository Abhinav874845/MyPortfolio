
import { motion } from "framer-motion";
import {
  Code2,
  Monitor,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    subtitle: "Building logic & solving problems",
    icon: Code2,
    skills: [
      { name: "Java", level: "Intermediate" },
      { name: "Python", level: "Intermediate" }
    ]
  },
  {
    number: "02",
    title: "Frontend Development",
    subtitle: "Creating modern web experiences",
    icon: Monitor,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React", level: "Learning" }
    ]
  },
  {
    number: "03",
    title: "Database",
    subtitle: "Working with structured data",
    icon: Database,
    skills: [
      { name: "SQL", level: "Intermediate" }
    ]
  },
  {
    number: "04",
    title: "Developer Tools",
    subtitle: "Tools for development workflow",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" }
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">

      <div className="skills-glow"></div>

      {/* Heading */}
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="skills-label">
          <Sparkles size={15} />
          MY TECHNICAL EXPERTISE
        </span>

        <h2>
          Skills & <span>Technologies.</span>
        </h2>

        <p>
          Technologies and tools I use while learning,
          developing and building projects.
        </p>
      </motion.div>

      {/* Skill Cards */}
      <div className="skills-grid">

        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              className="skill-card"
              key={group.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12
              }}
              whileHover={{ y: -8 }}
            >

              <div className="skill-card-top">
                <span className="skill-number">
                  {group.number} / CATEGORY
                </span>

                <ArrowUpRight size={20} />
              </div>

              <div className="skill-icon">
                <Icon size={27} />
              </div>

              <h3>{group.title}</h3>

              <p className="skill-subtitle">
                {group.subtitle}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill, i) => (
                  <motion.div
                    className="skill-tag-item"
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.08 }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="skill-tag-name">
                      {skill.name}
                    </span>

                    {skill.level && (
                      <span
                        className={`skill-level ${
                          skill.level === "Learning"
                            ? "learning"
                            : "intermediate"
                        }`}
                      >
                        {skill.level}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom Message */}
      <motion.div
        className="skills-bottom"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="skills-bottom-icon">
          <Sparkles size={23} />
        </div>

        <div>
          <h3>Always Learning, Always Growing.</h3>
          <p>
            Exploring new technologies and improving
            my development skills one project at a time.
          </p>
        </div>

        <span className="learning-badge">
          <span></span>
          Learning Mode
        </span>
      </motion.div>

    </section>
  );
}

export default Skills;
