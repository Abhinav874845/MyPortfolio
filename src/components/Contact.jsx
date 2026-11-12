import { Mail, Code2, BriefcaseBusiness, Send, Phone, MessageCircle, Camera, Download } from "lucide-react";
import { hasValue, profile } from "../data/profile";
import "./ProfessionalSections.css";

function ContactLink({ icon: Icon, label, detail, href, external = false }) {
  const configured = hasValue(href);
  return configured ? <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}><Icon /> <span><small>{label}</small>{detail}</span></a> : <div className="contact-link-disabled"><Icon /> <span><small>{label}</small>Add your {label.toLowerCase()} in profile.js</span></div>;
}

export default function Contact() {
  const whatsappUrl = hasValue(profile.whatsappNumber) ? `https://wa.me/${profile.whatsappNumber.replace(/\D/g, "")}` : "";
  return <section className="professional-section contact-section" id="contact">
    <p className="section-kicker">LET'S CONNECT</p><h2>Let's build something <span>useful.</span></h2>
    <div className="contact-grid"><div className="contact-copy"><p>I’m open to internships, collaborative projects, and conversations about software development, data analytics, and AI.</p><div className="contact-links">
      <ContactLink icon={Mail} label="Email" detail={profile.email} href={hasValue(profile.email) ? `mailto:${profile.email}` : ""} />
      <ContactLink icon={Phone} label="Phone" detail={profile.phone} href={hasValue(profile.phone) ? `tel:${profile.phone.replace(/\s/g, "")}` : ""} />
      {hasValue(whatsappUrl) && <ContactLink icon={MessageCircle} label="WhatsApp" detail="Start a conversation" href={whatsappUrl} external />}
      <ContactLink icon={BriefcaseBusiness} label="LinkedIn" detail="Connect professionally" href={profile.linkedin} external />
      <ContactLink icon={Code2} label="GitHub" detail="View code and projects" href={profile.github} external />
      {hasValue(profile.instagram) && <ContactLink icon={Camera} label="Instagram" detail="Follow my journey" href={profile.instagram} external />}
    </div><a href={profile.resume} className="secondary-button contact-resume" download>Download Resume <Download size={16} /></a></div>
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Name<input name="name" autoComplete="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label><label>Subject<input name="subject" placeholder="How can I help?" /></label><label>Message<textarea name="message" rows="4" placeholder="Write your message here" /></label><button type="submit" className="primary-button" aria-describedby="form-note">Send message <Send size={16} /></button><p id="form-note" className="form-note">This form is a design preview. Connect an email service or backend to receive messages.</p></form></div>
  </section>;
}
