import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { motion } from "motion/react";

interface Achievement {
  icon: string;
  text: string;
  year: string;
  glowColor: "cyan" | "purple";
}

const achievementsData: Achievement[] = [
  {
    icon: "🏆",
    text: "Member, JOSH Central Coordination Team",
    year: "2025",
    glowColor: "cyan",
  },
  {
    icon: "🎓",
    text: "Multiple certifications in AI, ML, Networking & Cybersecurity",
    year: "2023–Present",
    glowColor: "purple",
  },
  {
    icon: "🛡️",
    text: "National-level cybersecurity workshops at IIT Delhi & IIT Bombay",
    year: "2023–2025",
    glowColor: "cyan",
  },
  {
    icon: "📚",
    text: "Active self-learner via LinkedIn Learning",
    year: "2023–Present",
    glowColor: "purple",
  },
];

export default function AchievementsSection() {
  return (
    <SectionWrapper
      id="achievements"
      title="Achievements"
      subtitle="Milestones and recognitions along my journey."
      className="bg-card/5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {achievementsData.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <GlassCard
              glowColor={item.glowColor}
              className="p-5 flex items-start gap-4 h-full"
              data-ocid={`achievements.card.${i + 1}`}
            >
              {/* Emoji icon */}
              <div
                className="text-2xl shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10"
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground leading-snug mb-2">
                  {item.text}
                </p>
                <span
                  className={`inline-block text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                    item.glowColor === "cyan"
                      ? "bg-primary/10 text-primary border-primary/30"
                      : "bg-accent/10 text-accent border-accent/30"
                  }`}
                >
                  {item.year}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
