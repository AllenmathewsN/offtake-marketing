'use client';
import { useEffect, useState, useRef } from 'react';

export default function Stats() {
  const [counts, setCounts] = useState({ youth: 0, campaigns: 0, universities: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount('youth', 500, 2000);
          animateCount('campaigns', 50, 2000);
          animateCount('universities', 30, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = (key: keyof typeof counts, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  return (
    <div ref={sectionRef} className="stats-grid">
      <div className="stat-card">
        <h3 className="stat-number">{counts.youth}K+</h3>
        <p>Youth Reached</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">{counts.campaigns}+</h3>
        <p>Brand Campaigns</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">{counts.universities}+</h3>
        <p>University Partnerships</p>
      </div>
      <div className="stat-card">
        <h3 className="stat-number">47</h3>
        <p>Counties Covered</p>
      </div>
    </div>
  );
}
