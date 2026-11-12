
import { motion } from "framer-motion";
import "./About.css";
import {
  Code2,
  GraduationCap,
  Lightbulb,
  Rocket,
  Coffee,
  Brain,
  Laptop,
  Sparkles
} from "lucide-react";

const interests = [
  { icon: Code2, title: "Software Development", text: "Building useful applications and learning new technologies." },
  { icon: Brain, title: "Problem Solving", text: "Improving logical thinking through programming and DSA." },
  { icon: Rocket, title: "Innovation", text: "Exploring ideas and turning them into real projects." },
  { icon: Coffee, title: "Continuous Learning", text: "Always curious to learn, experiment and grow." }
];

const technologies = [
  "Java",
  "Python",
  "SQL",
  "HTML",
  "CSS",
  "React",
  "Git",
  "JavaScript"
];

function About() {
  return (
    <section className="about-section" id="about">

      {/* Background decoration */}
      <div className="about-glow glow-left"></div>
      <div className="about-glow glow-right"></div>

      {/* Section heading */}
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="about-label">
          <Sparkles size={15} />
          GET TO KNOW ME
        </span>

        <h2>
          More Than Just
          <br />
          <span>Code & Coffee.</span>
        </h2>

        <p>
          A little introduction about who I am,
          what I do and what drives me.
        </p>
      </motion.div>

      {/* Main About Layout */}
      <div className="about-layout">

        {/* LEFT SIDE */}
        <motion.div
          className="about-main-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-card-top">
            <span className="about-number">01 / ABOUT ME</span>
            <Code2 size={22} />
          </div>

          <h3>
            Hello! I'm <span>Abhinav Sharma.</span>
          </h3>

          <p>
            I'm a Computer Science and Engineering student
            at Nalanda Institute of Technology, Bhubaneswar.
            I'm passionate about software development,
            programming and exploring the world of technology.
          </p>

          <p>
            My journey involves learning new programming
            concepts, solving problems and building practical
            projects. I enjoy experimenting with ideas and
            continuously improving my technical skills.
          </p>

          <p>
            I believe that great developers are not just
            people who write code, but people who solve
            real-world problems through technology.
          </p>

          <div className="about-signature">
            <span>Curious mind. Creative ideas. Clean code.</span>
            <Sparkles size={19} />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="about-side">

          {/* Education Card */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-card-top">
              <span className="about-number">02 / EDUCATION</span>
              <GraduationCap size={23} />
            </div>

            <div className="education-icon">
              <GraduationCap size={30} />
            </div>

            <h3>B.Tech in Computer Science and Engineering</h3>

            <p>
              Nalanda Institute of Technology
            </p>

            <span className="education-location">
              Bhubaneswar, Odisha
            </span>

            <div className="education-status">
              <span></span>
              3rd Year · Undergraduate Student
            </div>
          </motion.div>

          {/* Floating Tech Card */}
          <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-card-top">
              <span className="about-number">03 / MY TOOLKIT</span>
              <Laptop size={22} />
            </div>

            <h3>Technologies I Explore</h3>

            <div className="about-tech-list">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Interests */}
      <div className="interests-section">

        <motion.div
          className="interests-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="about-label">
            <Lightbulb size={15} />
            WHAT DRIVES ME
          </span>

          <h3>
            Things I <span>Love Doing.</span>
          </h3>
        </motion.div>

        <div className="interests-grid">
          {interests.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="interest-card"
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12
                }}
                whileHover={{ y: -8 }}
              >
                <div className="interest-icon">
                  <Icon size={25} />
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

                <span className="interest-arrow">↗</span>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

export default About;
