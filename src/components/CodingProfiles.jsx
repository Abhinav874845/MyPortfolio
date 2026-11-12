import { motion } from "framer-motion";
import { Code2, Braces, ExternalLink } from "lucide-react";
import { hasValue, profile } from "../data/profile";
import "./ProfessionalSections.css";

const profiles = [
  { name: "LeetCode", description: "Practice problems, data structures, and algorithms.", url: profile.leetcode, icon: Braces },
  { name: "GitHub", description: "Explore my repositories and development work.", url: profile.github, icon: Code2 },
];

export default function CodingProfiles() {
  return <section className="professional-section" id="coding-profiles">
    <p className="section-kicker">CODING PRESENCE</p><h2>Profiles & <span>Practice.</span></h2>
    <div className="coding-grid">{profiles.map((item, index) => { const Icon = item.icon; const configured = hasValue(item.url); return <motion.article className="coding-card" key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><div className="coding-icon"><Icon /></div><h3>{item.name}</h3><p>{item.description}</p>{configured ? <a className="profile-visit" href={item.url} target="_blank" rel="noopener noreferrer">Visit profile <ExternalLink size={15} /></a> : <span className="placeholder-note">Add your {item.name} URL in profile.js</span>}</motion.article>; })}</div>
  </section>;
}
