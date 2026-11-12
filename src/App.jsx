import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CodingProfiles from "./components/CodingProfiles";
import { hasValue, profile } from "./data/profile";
import { Mail, ArrowUpRight, Download, Code2, Terminal, Sparkles, Menu, X, Moon, Sun, ArrowUp, Braces, Camera } from "lucide-react";
import "./App.css";

const navItems = ["Home", "About", "Skills", "Projects", "Education", "Certifications", "Achievements", "Coding Profiles", "Contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("portfolio-theme") === "light");

  useEffect(() => {
    localStorage.setItem("portfolio-theme", lightMode ? "light" : "dark");
  }, [lightMode]);

  useEffect(() => {
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 560);
    };
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    }), { rootMargin: "-35% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateScroll, { passive: true }); updateScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", updateScroll); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <div className={`portfolio ${lightMode ? "light-mode" : ""}`}>
    <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />
    <nav className="navbar" aria-label="Primary navigation">
      <a href="#home" className="logo" onClick={closeMenu}>Abhinav<span>.</span></a>
      <button className="icon-button theme-toggle" onClick={() => setLightMode((value) => !value)} aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`}>{lightMode ? <Moon size={18} /> : <Sun size={18} />}</button>
      <button className="icon-button menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation menu">{menuOpen ? <X /> : <Menu />}</button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>{navItems.map((item) => { const id = item.toLowerCase().replace(" ", "-"); return <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} onClick={closeMenu}>{item}</a>; })}</div>
      <a href="#contact" className="nav-button desktop-cta">Let's Talk <ArrowUpRight size={16} /></a>
    </nav>

    <section className="hero" id="home">
      <motion.div className="hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <div className="availability"><span className="status-dot" /> Available for internship opportunities</div>
        <p className="intro">HELLO, I'M</p><h1>Abhinav<br /><span>Sharma.</span></h1>
        <h2>{profile.professionalTitle}</h2>
        <p className="hero-description">I build meaningful digital experiences through code, creativity, and continuous learning. I’m exploring software development, data analytics, and artificial intelligence.</p>
        <div className="hero-buttons"><a href="#projects" className="primary-button">Explore My Work <ArrowUpRight size={18} /></a><a href={profile.resume} className="secondary-button" download>Download Resume <Download size={17} /></a></div>
        <div className="social-links">{hasValue(profile.github) && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}{hasValue(profile.linkedin) && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}{hasValue(profile.leetcode) && <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile"><Braces size={20} /></a>}{hasValue(profile.instagram) && <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram profile"><Camera size={20} /></a>}{hasValue(profile.email) && <a href={`mailto:${profile.email}`} aria-label="Email Abhinav"><Mail size={20} /></a>}</div>
      </motion.div>
      <motion.div className="hero-image-area" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}><div className="image-glow" /><div className="profile-frame"><img src="/profile.jpg" alt="Abhinav Sharma" onError={(event) => { event.currentTarget.style.display = "none"; }} /><div className="profile-placeholder">AS</div></div><div className="floating-card card-one"><Code2 size={20} /><span>Developer</span></div><div className="floating-card card-two"><Sparkles size={20} /><span>Always Learning</span></div></motion.div>
    </section>
    <section className="quick-info" aria-label="Profile highlights"><div><Terminal /><span>B.Tech CSE · 3rd Year</span></div><div><Code2 /><span>Java & Python</span></div><div><Sparkles /><span>Building & Learning</span></div></section>
    <About /><Skills /><Projects /><Education /><Certifications /><Achievements /><CodingProfiles /><Contact />
    <footer><p>© {new Date().getFullYear()} Abhinav Sharma. Built with React.</p></footer>
    <button className={`back-to-top ${showTop ? "visible" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={19} /></button>
  </div>;
}

export default App;
