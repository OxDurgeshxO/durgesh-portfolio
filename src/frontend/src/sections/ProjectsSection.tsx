import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { projects } from "@/data/portfolio";
import { Building2, Calendar } from "lucide-react";
import { motion } from "motion/react";

// Normalize the data type to a simple badge label
const BADGE_LABELS: Record<string, string> = {
  Workshop: "Workshop",
  "Internship / Training": "Training",
  "Self-Learning Project": "Learning",
};

// Cyan for cybersecurity-related, purple for AI/ML
const BADGE_COLORS: Record<string, string> = {
  Workshop: "bg-primary/10 text-primary border-primary/30",
  Training: "bg-primary/10 text-primary border-primary/30",
  Learning: "bg-accent/10 text-accent border-accent/30",
};

// Glow color per card: first two are cybersecurity (cyan), third is AI/ML (purple)
const CARD_GLOW: Array<"cyan" | "purple"> = ["cyan", "cyan", "purple"];

export default function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects & Internships"
      subtitle="Hands-on training and learning engagements."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => {
          const badgeLabel = BADGE_LABELS[project.type] ?? project.type;
          const badgeColor =
            BADGE_COLORS[badgeLabel] ??
            "bg-muted text-muted-foreground border-border";
          const glowColor = CARD_GLOW[i] ?? "cyan";

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <GlassCard
                glowColor={glowColor}
                className="p-6 h-full flex flex-col gap-4"
                data-ocid={`projects.card.${i + 1}`}
              >
                {/* Badge */}
                <span
                  className={`self-start text-xs px-3 py-1 rounded-full border font-semibold tracking-wide ${badgeColor}`}
                >
                  {badgeLabel}
                </span>

                {/* Title */}
                <h3 className="font-display text-base font-bold text-foreground leading-snug">
                  {project.title}
                </h3>

                {/* Meta: org + dates */}
                <div className="mt-auto space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
                      <Building2 size={11} className="text-primary" />
                    </div>
                    <span className="truncate font-medium">
                      {project.organization}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="p-1.5 rounded-lg bg-primary/10 shrink-0">
                      <Calendar size={11} className="text-primary" />
                    </div>
                    <span>
                      {project.from} — {project.to}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
