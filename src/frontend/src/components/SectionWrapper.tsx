import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  title,
  children,
  className,
  subtitle,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("relative py-20 px-4 scroll-mt-20", className)}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-xl">{subtitle}</p>
          )}
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
