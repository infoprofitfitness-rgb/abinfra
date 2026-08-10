"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix: string;
};

const stats: Stat[] = [
  { label: "Years of Industry Experience", value: 17, suffix: "+" },
  { label: "Skilled Workforce", value: 90, suffix: "+" },
  { label: "Solar Power Projects", value: 500, suffix: "+" },
  { label: "Land acquisition", value: 1500, suffix: "+Acre" },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return count;
}

function StatItem({ label, value, suffix, active }: Stat & { active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div className="stat-item">
      <h3>{label}</h3>
      <p className="stat-value">
        {count}
        <span>{suffix}</span>
      </p>
    </div>
  );
}

export default function StatsCounters() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container stats-grid">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} active={active} />
        ))}
      </div>
    </section>
  );
}
