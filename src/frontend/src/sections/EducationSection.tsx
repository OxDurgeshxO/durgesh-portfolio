import { GlassCard } from "@/components/GlassCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { education } from "@/data/portfolio";
import type { Education } from "@/data/portfolio";
import { BookOpen, Building2, Calendar, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const dotColorClasses = ["bg-primary", "bg-accent", "bg-accent/70"] as const;

interface CardContentProps {
  edu: Education;
  isMostRecent: boolean;
}

function EducationCardContent({ edu, isMostRecent }: CardContentProps) {
  return (
    <>
      {isMostRecent && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-3 border border-primary/25">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Most Recent
        </span>
      )}
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`p-2.5 rounded-xl shrink-0 ${
            isMostRecent ? "bg-primary/15" : "bg-accent/10"
          }`}
        >
          {isMostRecent ? (
            <GraduationCap size={18} className="text-primary" />
          ) : (
            <BookOpen size={18} className="text-accent" />
          )}
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold text-foreground leading-snug">
            {edu.degree}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">{edu.stream}</p>
        </div>
      </div>

      <div className="flex items-start gap-1.5 mb-3">
        <Building2
          size={14}
          className="text-muted-foreground mt-0.5 shrink-0"
        />
        <span className="text-sm text-foreground/80 leading-snug">
          {edu.institution}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
          <Calendar size={10} />
          {edu.year}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs">
          {edu.board}
        </span>
        {edu.percentage && (
          <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold border border-accent/20">
            {edu.percentage}
          </span>
        )}
      </div>
    </>
  );
}

export default function EducationSection() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic journey — from fundamentals to specialized computing."
    >
      <div className="relative">
        {/* Vertical connector — desktop center */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.7 0.21 200), oklch(0.65 0.22 285), transparent)",
          }}
          aria-hidden="true"
        />
        {/* Vertical connector — mobile left */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.7 0.21 200), oklch(0.65 0.22 285), transparent)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-10 md:space-y-14">
          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;
            const isMostRecent = i === 0;
            const glowColor: "cyan" | "purple" = isMostRecent
              ? "cyan"
              : "purple";
            const dotClass = dotColorClasses[i] ?? dotColorClasses[2];

            return (
              <div
                key={edu.degree}
                className="relative flex items-start md:items-center"
                data-ocid={`education.item.${i + 1}`}
              >
                {/* Desktop card — alternating sides */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`hidden md:block w-[46%] ${
                    isLeft ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <GlassCard
                    glowColor={glowColor}
                    className={`p-6 ${
                      isMostRecent
                        ? "border-l-2 border-primary/60"
                        : "border border-white/5"
                    }`}
                    data-ocid={`education.card.${i + 1}`}
                  >
                    <EducationCardContent
                      edu={edu}
                      isMostRecent={isMostRecent}
                    />
                  </GlassCard>
                </motion.div>

                {/* Desktop center dot */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full border-2 border-background hidden md:flex items-center justify-center ${dotClass}`}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-background" />
                </div>

                {/* Mobile card — left-aligned */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="md:hidden flex items-start gap-4 w-full"
                >
                  <div className="relative z-10 mt-4 shrink-0">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-background flex items-center justify-center ${dotClass}`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-background" />
                    </div>
                  </div>
                  <GlassCard
                    glowColor={glowColor}
                    className={`flex-1 p-5 ${
                      isMostRecent
                        ? "border-l-2 border-primary/60"
                        : "border border-white/5"
                    }`}
                    data-ocid={`education.card.mobile.${i + 1}`}
                  >
                    <EducationCardContent
                      edu={edu}
                      isMostRecent={isMostRecent}
                    />
                  </GlassCard>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
