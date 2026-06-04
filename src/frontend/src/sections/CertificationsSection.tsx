import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { certifications } from "@/data/portfolio";
import type { LucideIcon } from "lucide-react";
import { Brain, ExternalLink, Network, Shield } from "lucide-react";
import { motion } from "motion/react";

const NETWORK_KEYWORDS = ["network", "cisco", "routing"];
const SECURITY_KEYWORDS = ["blockchain", "security", "smart contracts"];

type CertCategory = "ai" | "networking" | "security";

function getCertCategory(title: string): CertCategory {
  const lower = title.toLowerCase();
  if (NETWORK_KEYWORDS.some((k) => lower.includes(k))) return "networking";
  if (SECURITY_KEYWORDS.some((k) => lower.includes(k))) return "security";
  return "ai";
}

const categoryConfig: Record<
  CertCategory,
  {
    glow: "cyan" | "purple" | "none";
    iconClass: string;
    bgClass: string;
    badgeClass: string;
    icon: LucideIcon;
  }
> = {
  ai: {
    glow: "cyan",
    iconClass: "text-primary",
    bgClass: "bg-primary/15",
    badgeClass: "bg-primary/10 text-primary border-primary/25",
    icon: Brain,
  },
  networking: {
    glow: "purple",
    iconClass: "text-accent",
    bgClass: "bg-accent/15",
    badgeClass: "bg-accent/10 text-accent border-accent/25",
    icon: Network,
  },
  security: {
    glow: "none",
    iconClass: "text-accent",
    bgClass: "bg-accent/10",
    badgeClass: "bg-muted text-muted-foreground border-white/10",
    icon: Shield,
  },
};

const categoryLabel: Record<CertCategory, string> = {
  ai: "AI & ML",
  networking: "Networking",
  security: "Security",
};

export default function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Professional certifications earned via LinkedIn Learning — 2023."
      className="bg-card/5"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, i) => {
          const category = getCertCategory(cert.title);
          const config = categoryConfig[category];
          const CategoryIcon = config.icon;

          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.075 }}
            >
              <GlassCard
                glowColor={config.glow}
                className="p-5 h-full flex flex-col gap-3 group"
                data-ocid={`certifications.card.${i + 1}`}
              >
                {/* Icon + category badge row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${config.bgClass}`}
                  >
                    <CategoryIcon size={16} className={config.iconClass} />
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${config.badgeClass}`}
                  >
                    {categoryLabel[category]}
                  </span>
                </div>

                {/* Cert title */}
                <p className="text-sm font-semibold text-foreground leading-snug flex-1">
                  {cert.title}
                </p>

                {/* Provider + year */}
                <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/5">
                  <span className="text-xs text-muted-foreground">
                    {cert.provider}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                    {cert.year}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* LinkedIn CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center"
      >
        <a
          href="https://www.linkedin.com/in/durgesh-dutt-s-4ba74924b"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 hover:shadow-glow-cyan transition-smooth text-sm font-semibold hover:scale-105"
          data-ocid="certifications.linkedin_button"
        >
          <ExternalLink size={14} />
          View All on LinkedIn
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
