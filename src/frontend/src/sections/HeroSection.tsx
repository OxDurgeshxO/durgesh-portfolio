import { personalInfo } from "@/data/portfolio";
import { Canvas, useFrame } from "@react-three/fiber";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

function scrollToSection(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Raw OKLCH-equivalent hex approximations for shader colors
const CYAN = "#00e5ff";
const PURPLE = "#a855f7";

interface ParticleProps {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  phase: number;
}

function Particle({ position, scale, color, speed, phase }: ParticleProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.position.y =
      position[1] + Math.sin(t * speed + phase) * 0.4;
    meshRef.current.position.x =
      position[0] + Math.cos(t * speed * 0.7 + phase) * 0.2;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.z = t * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        transparent
        opacity={0.75}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

function ParticleField() {
  const particles = useMemo<(ParticleProps & { id: string })[]>(() => {
    const count = 100;
    return Array.from({ length: count }, (_, i) => {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10 - 2;
      return {
        id: `p-${i}-${Math.round(x * 100)}-${Math.round(y * 100)}`,
        position: [x, y, z] as [number, number, number],
        scale: 0.05 + Math.random() * 0.1,
        color: i % 3 === 0 ? PURPLE : CYAN,
        speed: 0.3 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color={CYAN} />
      <pointLight position={[-5, -3, 3]} intensity={1.0} color={PURPLE} />
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
    >
      {/* 3D Particle Canvas — full background */}
      <div className="absolute inset-0" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: "transparent" }}
          gl={{ alpha: true, antialias: true }}
        >
          <ParticleField />
        </Canvas>
      </div>

      {/* Dark overlay with subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(0.12 0.04 220 / 0.6) 0%, oklch(0.08 0 0 / 0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7 0.21 200 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0.21 200 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Hero content — centered overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
            Available for opportunities
          </motion.div>

          {/* Full name — gradient cyan → purple */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-bold leading-tight mb-5"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              background:
                "linear-gradient(135deg, oklch(0.7 0.21 200), oklch(0.65 0.22 270))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            data-ocid="hero.name_heading"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-xl font-medium text-muted-foreground mb-5 tracking-wide"
            data-ocid="hero.tagline"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full mb-8 text-sm font-medium text-foreground/80"
            style={{
              background: "oklch(0.18 0.04 260 / 0.7)",
              border: "1px solid oklch(0.7 0.21 200 / 0.25)",
              backdropFilter: "blur(12px)",
            }}
            data-ocid="hero.location_badge"
          >
            <span role="img" aria-label="location">
              📍
            </span>
            {personalInfo.location}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              type="button"
              onClick={() => scrollToSection("#projects")}
              className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base transition-smooth hover:scale-105 active:scale-100 hover:shadow-glow-cyan"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.7 0.21 200), oklch(0.6 0.18 220))",
                color: "oklch(0.08 0 0)",
              }}
              data-ocid="hero.view_work_button"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="px-7 py-3 rounded-xl font-semibold text-sm md:text-base transition-smooth hover:scale-105 active:scale-100 hover:shadow-glow-purple"
              style={{
                background: "oklch(0.18 0.04 260 / 0.6)",
                border: "1px solid oklch(0.65 0.22 270 / 0.4)",
                color: "oklch(0.65 0.22 270)",
                backdropFilter: "blur(12px)",
              }}
              data-ocid="hero.contact_button"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-smooth"
        onClick={() => scrollToSection("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.8,
            ease: "easeInOut",
            delay: 1.2,
          },
        }}
        aria-label="Scroll to about section"
        data-ocid="hero.scroll_indicator"
      >
        <span className="text-xs tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
}
