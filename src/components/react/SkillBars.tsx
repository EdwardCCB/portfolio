import { useEffect, useRef, useState } from "react";

interface Skill {
    name: string;
    level: number;
    category: string;
}

interface Props {
    skills: Skill[];
}

const categoryColors: Record<string, string> = {
    Frontend: "from-green-500 to-emerald-400",
    Backend: "from-cyan-500 to-teal-500",
    DevOps: "from-orange-500 to-rose-500",
};

const categoryBg: Record<string, string> = {
    Frontend: "rgba(34,197,94,0.1)",
    Backend: "rgba(6,182,212,0.1)",
    DevOps: "rgba(249,115,22,0.1)",
};

export default function SkillBars({ skills }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [animated, setAnimated] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];
    const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

    return (
        <div ref={ref}>
            {/* Category filter tabs */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        style={{
                            padding: "0.4rem 1rem",
                            borderRadius: "9999px",
                            border: "1px solid",
                            borderColor: activeCategory === cat ? "rgba(34,197,94,0.6)" : "rgba(34,197,94,0.2)",
                            background: activeCategory === cat ? "rgba(34,197,94,0.2)" : "transparent",
                            color: activeCategory === cat ? "#4ade80" : "#94a3b8",
                            fontFamily: "var(--font-mono, monospace)",
                            fontSize: "0.8rem",
                            cursor: "pointer",
                            fontWeight: activeCategory === cat ? 600 : 400,
                            transition: "all 0.2s ease",
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Skill bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {filtered.map((skill, i) => (
                    <div
                        key={skill.name}
                        style={{
                            background: categoryBg[skill.category] ?? "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(34,197,94,0.12)",
                            borderRadius: "0.75rem",
                            padding: "1rem 1.25rem",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                            <span style={{ fontWeight: 600, color: "#f1f5f9", fontSize: "0.9rem" }}>{skill.name}</span>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                <span
                                    style={{
                                        fontSize: "0.7rem",
                                        padding: "0.15rem 0.5rem",
                                        borderRadius: "9999px",
                                        background: categoryBg[skill.category] ?? "rgba(34,197,94,0.1)",
                                        color: skill.category === "Frontend" ? "#4ade80" : skill.category === "Backend" ? "#22d3ee" : "#fb923c",
                                        border: `1px solid ${skill.category === "Frontend" ? "rgba(34,197,94,0.3)" : skill.category === "Backend" ? "rgba(6,182,212,0.3)" : "rgba(249,115,22,0.3)"}`,
                                        fontFamily: "var(--font-mono, monospace)",
                                    }}
                                >
                                    {skill.category}
                                </span>
                                <span style={{ fontWeight: 700, color: "#4ade80", fontFamily: "var(--font-mono, monospace)", fontSize: "0.88rem" }}>
                                    {skill.level}%
                                </span>
                            </div>
                        </div>

                        {/* Bar track */}
                        <div
                            style={{
                                height: "6px",
                                background: "rgba(255,255,255,0.06)",
                                borderRadius: "9999px",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: animated ? `${skill.level}%` : "0%",
                                    background: `linear-gradient(90deg, ${skill.category === "Frontend"
                                        ? "#15803d, #22c55e"
                                        : skill.category === "Backend"
                                            ? "#0891b2, #14b8a6"
                                            : "#ea580c, #e11d48"
                                        })`,
                                    borderRadius: "9999px",
                                    transition: `width 1s ease ${i * 0.05}s`,
                                    boxShadow: `0 0 8px rgba(34,197,94,0.4)`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
