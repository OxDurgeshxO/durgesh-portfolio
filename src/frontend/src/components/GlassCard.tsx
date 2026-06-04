import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "purple" | "none";
  hoverable?: boolean;
  "data-ocid"?: string;
}

export function GlassCard({
  children,
  className,
  glowColor = "none",
  hoverable = true,
  "data-ocid": dataOcid,
}: GlassCardProps) {
  const glowClasses = {
    cyan: "hover:shadow-glow-cyan",
    purple: "hover:shadow-glow-purple",
    none: "",
  };

  return (
    <div
      className={cn(
        "glass transition-smooth",
        hoverable && "hover:bg-card/60",
        hoverable && glowClasses[glowColor],
        className,
      )}
      data-ocid={dataOcid}
    >
      {children}
    </div>
  );
}
