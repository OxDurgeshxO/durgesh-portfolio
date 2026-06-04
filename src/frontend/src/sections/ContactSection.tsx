import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { personalInfo } from "@/data/portfolio";
import { motion } from "motion/react";

interface ContactItemProps {
  emoji: string;
  label: string;
  value: string;
  href?: string;
  isExternal?: boolean;
  colorClass: string;
  glowClass: string;
  index: number;
}

function ContactItem({
  emoji,
  label,
  value,
  href,
  isExternal,
  colorClass,
  glowClass,
  index,
}: ContactItemProps) {
  const content = (
    <div className="flex items-center gap-4 w-full">
      <span
        className={`text-2xl shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 ${colorClass}`}
        aria-hidden="true"
      >
        {emoji}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-0.5">
          {label}
        </p>
        <p
          className={`text-sm font-semibold truncate ${
            href ? colorClass : "text-foreground"
          }`}
        >
          {value}
        </p>
      </div>
      {href && (
        <span
          className={`text-xs font-medium shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 ${colorClass}`}
        >
          {isExternal ? "↗" : "→"}
        </span>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {href ? (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={`block p-4 rounded-2xl glass border border-white/10 transition-smooth hover:border-white/20 ${glowClass} hover:scale-[1.01] group`}
          data-ocid={`contact.${label.toLowerCase().replace(/\s/g, "_")}_item`}
        >
          {content}
        </a>
      ) : (
        <div
          className="block p-4 rounded-2xl glass border border-white/10"
          data-ocid={`contact.${label.toLowerCase().replace(/\s/g, "_")}_item`}
        >
          {content}
        </div>
      )}
    </motion.div>
  );
}

export default function ContactSection() {
  const contactItems: ContactItemProps[] = [
    {
      emoji: "✉️",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      isExternal: false,
      colorClass: "text-cyan-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]",
      index: 0,
    },
    {
      emoji: "📱",
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
      isExternal: false,
      colorClass: "text-violet-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(167,139,250,0.25)]",
      index: 1,
    },
    {
      emoji: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/durgesh-dutt-s-4ba74924b",
      href: personalInfo.linkedin,
      isExternal: true,
      colorClass: "text-cyan-400",
      glowClass: "hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]",
      index: 2,
    },
    {
      emoji: "📍",
      label: "Location",
      value: personalInfo.location,
      href: undefined,
      colorClass: "text-muted-foreground",
      glowClass: "",
      index: 3,
    },
  ];

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="flex justify-center">
        <motion.div
          className="w-full max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <GlassCard glowColor="cyan" className="p-8 md:p-10">
            {/* Heading */}
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-3">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
                I'm always open to new opportunities, collaborations, and
                conversations.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

            {/* Contact items */}
            <div className="space-y-3 mb-8">
              {contactItems.map((item) => (
                <ContactItem key={item.label} {...item} />
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

            {/* CTA button */}
            <div className="flex justify-center mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_36px_rgba(34,211,238,0.55)] hover:scale-105 transition-smooth"
                data-ocid="contact.send_email_button"
              >
                <span aria-hidden="true">✉️</span>
                Send Email
              </a>
            </div>

            {/* Footer text */}
            <p className="text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Durgesh Dutt Sinha. Built with
              passion for tech.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
