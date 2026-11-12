import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import "./ProfessionalSections.css";

export default function Education() {
  const { education } = profile;
  return (
    <section className="professional-section" id="education">
      <p className="section-kicker">ACADEMIC FOUNDATION</p>
      <h2>Education & <span>Growth.</span></h2>
      <motion.article className="timeline-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="timeline-icon"><GraduationCap /></div>
        <div>
          <p className="card-eyebrow">UNDERGRADUATE · IN PROGRESS</p>
          <h3>{education.degree}</h3>
          <p className="institution">{education.institution}</p>
          <p className="card-copy"><MapPin size={15} /> {education.location} <span className="dot-separator">•</span> {education.detail}</p>
        </div>
      </motion.article>
    </section>
  );
}
