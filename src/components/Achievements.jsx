import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../data/portfolio";
import "./ProfessionalSections.css";

export default function Achievements() {
  return <section className="professional-section" id="achievements">
    <p className="section-kicker">MILESTONES</p><h2>Achievements & <span>Momentum.</span></h2>
    {achievements.length ? <div className="achievement-grid">{achievements.map((achievement) => <article className="achievement-card" key={achievement.title}><Trophy /><h3>{achievement.title}</h3><p>{achievement.description}</p></article>)}</div> :
      <motion.div className="empty-achievements" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}><Trophy /><div><h3>Achievements in progress</h3><p>This space is ready for verified hackathons, coding milestones, competitions, and leadership accomplishments.</p></div></motion.div>}
  </section>;
}
