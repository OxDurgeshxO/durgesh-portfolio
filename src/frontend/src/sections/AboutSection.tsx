import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { hobbies, languages, personalInfo, softSkills } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import {
  Contact,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Smile,
  User,
} from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: undefined,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile →",
      href: personalInfo.linkedin,
    },
  ];

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="BCA student at Sri Balaji University Pune, driven by curiosity in Cybersecurity & AI/ML."
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <GlassCard
            glowColor="cyan"
            className="p-7 h-full flex flex-col gap-5"
            data-ocid="about.bio_card"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <User size={18} className="text-primary" />
                <h3 className="font-display text-base font-semibold text-primary tracking-wide uppercase text-xs">
                  Introduction
                </h3>
              </div>
              <p className="text-foreground text-base leading-relaxed">
                Hi, I'm{" "}
                <span className="font-semibold text-primary">
                  Durgesh Dutt Sinha
                </span>{" "}
                — a BCA student at{" "}
                <span className="text-accent font-medium">
                  Sri Balaji University Pune
                </span>
                , passionate about the intersection of{" "}
                <span className="text-primary font-medium">Cybersecurity</span>{" "}
                and{" "}
                <span className="text-accent font-medium">
                  Artificial Intelligence & ML
                </span>
                .
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Based in Pune, Maharashtra, I bring analytical thinking and a
                disciplined learning mindset to every challenge. I've sharpened
                my skills through hands-on workshops at IIT Delhi & IIT Bombay
                and multiple professional certifications.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {[
                { label: "Age", value: `${personalInfo.age} yrs` },
                { label: "DOB", value: personalInfo.dob },
                { label: "Degree", value: "BCA" },
                { label: "Focus", value: "Cyber & AI/ML" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-primary/5 border border-primary/10 rounded-lg px-3 py-2"
                >
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Right — Contact + Skills + Languages + Hobbies */}
        <div className="flex flex-col gap-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          >
            <GlassCard
              glowColor="purple"
              className="p-6"
              data-ocid="about.contact_card"
            >
              <div className="flex items-center gap-2 mb-4">
                <Contact size={16} className="text-accent" />
                <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
                  Contact
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm text-foreground hover:text-primary transition-smooth truncate block font-medium"
                          data-ocid={`about.${label.toLowerCase()}_link`}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground font-medium truncate">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
          >
            <GlassCard
              glowColor="cyan"
              className="p-6"
              data-ocid="about.soft_skills_card"
            >
              <div className="flex items-center gap-2 mb-3">
                <Smile size={16} className="text-primary" />
                <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-primary">
                  Soft Skills
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 transition-smooth"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Languages + Hobbies side by side */}
          <div className="grid grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              <GlassCard
                className="p-5 h-full"
                data-ocid="about.languages_card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={15} className="text-accent" />
                  <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
                    Languages
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {lang.name}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] px-2 py-0.5 rounded-full font-semibold border",
                          lang.level === "Fluent"
                            ? "bg-primary/10 text-primary border-primary/25"
                            : "bg-accent/10 text-accent border-accent/25",
                        )}
                      >
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.32 }}
            >
              <GlassCard className="p-5 h-full" data-ocid="about.hobbies_card">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={15} className="text-rose-400" />
                  <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Hobbies
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {hobbies.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
