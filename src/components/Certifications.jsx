import { motion } from "framer-motion";
import { ExternalLink, FileBadge } from "lucide-react";
import { certifications } from "../data/portfolio";
import "./ProfessionalSections.css";

function CertificationCard({ certificate, index }) {
  return <motion.article className="certification-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
    <div className="certificate-art">{certificate.image ? <img src={certificate.image} alt={`${certificate.title} certificate`} /> : <FileBadge size={42} />}</div>
    <div className="certificate-content"><p className="card-eyebrow">{certificate.issuer}</p><h3>{certificate.title}</h3><p>{certificate.date}</p>
      {certificate.credentialUrl ? <a href={certificate.credentialUrl} target="_blank" rel="noreferrer" className="text-link">Verify credential <ExternalLink size={15} /></a> : <span className="placeholder-note">Verification link to be added</span>}
    </div>
  </motion.article>;
}

export default function Certifications() {
  return <section className="professional-section" id="certifications">
    <p className="section-kicker">CONTINUING EDUCATION</p><h2>Certifications & <span>Credentials.</span></h2>
    <div className="certification-grid">{certifications.map((certificate, index) => <CertificationCard key={certificate.title} certificate={certificate} index={index} />)}</div>
  </section>;
}
