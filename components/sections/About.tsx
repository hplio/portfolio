"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "4+", label: "Apps Shipped" },
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
];

const quickFacts = [
  { label: "Location", value: "Vadodara, India" },
  { label: "Availability", value: "Open to freelance & full-time" },
  { label: "Education", value: "B.Tech CSE, GSFC University '25" },
  { label: "Currently exploring", value: "Embedded C · STM32 · FreeRTOS" },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section" ref={ref}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left — bio */}
          <div>
            <div className="fade-up">
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  color: "#7B6EF6",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                About me
              </span>
            </div>

            <h2
              className="fade-up"
              style={{
                fontFamily: "ClashDisplay, Inter, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "24px",
                color: "#EDEDED",
              }}
            >
              Building things that
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #7B6EF6, #9D93F8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                actually ship.
              </span>
            </h2>

            <p
              className="fade-up"
              style={{
                color: "#8888A0",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "16px",
              }}
            >
              I&apos;m a Flutter and backend developer from Vadodara, India. I
              graduated in Computer Science & Engineering from GSFC University in
              2025 and have since shipped production apps across wellness, IoT, and
              e-commerce domains — real products used by real people.
            </p>

            <p
              className="fade-up"
              style={{
                color: "#8888A0",
                lineHeight: 1.8,
                fontSize: "1rem",
                marginBottom: "32px",
              }}
            >
              Currently diving into embedded systems — C, STM32, FreeRTOS — with
              long-term goals in low-level systems work. I like building close to
              the metal.
            </p>

            <div
              className="fade-up"
              style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "ClashDisplay, Inter, sans-serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#7B6EF6",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#8888A0",
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — info card */}
          <div
            className="fade-up"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="glass"
              style={{
                padding: "32px",
                width: "100%",
                maxWidth: "360px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "24px" }}
              >
                {quickFacts.map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", flexDirection: "column", gap: "4px" }}
                  >
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#7B6EF6",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "#EDEDED",
                        fontWeight: 400,
                        lineHeight: 1.5,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}

                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "8px",
                    display: "block",
                    textAlign: "center",
                    padding: "12px 24px",
                    background: "rgba(123,110,246,0.08)",
                    border: "1px solid rgba(123,110,246,0.25)",
                    borderRadius: "10px",
                    color: "#7B6EF6",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(123,110,246,0.16)";
                    e.currentTarget.style.borderColor = "rgba(123,110,246,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(123,110,246,0.08)";
                    e.currentTarget.style.borderColor = "rgba(123,110,246,0.25)";
                  }}
                >
                  View Resume ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
