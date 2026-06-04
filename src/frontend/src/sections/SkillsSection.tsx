import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { skills } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools across 8 domains I've been actively learning and applying."
      className="bg-card/5"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((category, i) => {
          const isCyan = i % 2 === 0;
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
            >
              <GlassCard
                glowColor={isCyan ? "cyan" : "purple"}
                className="p-5 h-full flex flex-col gap-3"
                data-ocid={`skills.card.${i + 1}`}
              >
                {/* Header */}
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0 border",
                      isCyan
                        ? "bg-primary/10 border-primary/20"
                        : "bg-accent/10 border-accent/20",
                    )}
                    aria-hidden="true"
                  >
                    {category.icon}
                  </span>
                  <h3
                    className={cn(
                      "font-display text-sm font-semibold leading-tight",
                      isCyan ? "text-primary" : "text-accent",
                    )}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Divider */}
                <div
                  className={cn(
                    "h-px w-full",
                    isCyan ? "bg-primary/15" : "bg-accent/15",
                  )}
                />

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-xs font-medium border transition-smooth hover:scale-105",
                        isCyan
                          ? "bg-primary/8 text-primary border-primary/20 hover:bg-primary/15"
                          : "bg-accent/8 text-accent border-accent/20 hover:bg-accent/15",
                      )}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
