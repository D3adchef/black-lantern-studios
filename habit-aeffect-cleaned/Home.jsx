import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";

// Images
import CoachImage from "../assets/coach.jpg";
import BrainImage from "../assets/brain.jpg";
import TruckImage from "../assets/truck.jpg";

const CALENDLY_URL =
  "https://calendly.com/dr-jen-habitaeffect/initial-consult-w-dr-jen";

/**
 * HoverReveal (scroll + hover/tap/focus)
 * - Scroll: reveals when entering viewport (works with scrollbar/trackpad/phone)
 * - Desktop: reveals when mouse enters
 * - Keyboard: reveals on focus
 * - Mobile: reveals on touch start (tap)
 * - If defaultActive is true: revealed on load
 * - Reveal ONCE and stays visible
 */
function HoverReveal({ children, className = "", defaultActive = false }) {
  const [active, setActive] = useState(defaultActive);
  const ref = useRef(null);

  useEffect(() => {
    if (active) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div
      ref={ref}
      className={`ha-reveal ${active ? "ha-visible" : ""} ${className}`}
      onMouseEnter={() => setActive(true)}
      onFocus={() => setActive(true)}
      onTouchStart={() => setActive(true)}
      role="group"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

function Card({ children, border = "orange" }) {
  const borderClass = border === "blue" ? "border-blue" : "border-orange";
  return (
    <div
      className={`bg-white rounded-xl shadow-md border-l-4 ${borderClass} p-4 md:p-5`}
    >
      {children}
    </div>
  );
}

function NotList({ items, startIndex = 0, stepMs = 320 }) {
  return (
    <ul className="space-y-2 text-base md:text-lg text-black">
      {items.map((item, idx) => (
        <li
          key={item}
          className="flex items-center gap-3 ha-item"
          style={{ "--d": `${(startIndex + idx) * stepMs}ms` }}
        >
          <span className="text-red-600 font-bold" aria-hidden="true">
            ✕
          </span>
          <span className="ha-not">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PlainList({ items, startIndex = 0, stepMs = 320 }) {
  return (
    <ul className="space-y-2 text-base md:text-lg text-black">
      {items.map((item, idx) => (
        <li
          key={item}
          className="ha-item"
          style={{ "--d": `${(startIndex + idx) * stepMs}ms` }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const stepMs = 320;

  return (
    <>
      <Helmet>
        <title>Habit Æffect</title>
        <meta
          name="description"
          content="Habit Æffect offers neurodivergent-affirming, evidence-based habit coaching built around practical systems that fit your life."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-background pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-14">
          {/* =======================================================
              SECTION 1: Welcome to Habit Æffect
             ======================================================= */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-orange text-center">
              Welcome to Habit Æffect
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-black font-medium mt-5 text-center">
              We help people figure out why they do what they don&apos;t want to do and why they don&apos;t do
              what they want to do. Then we help them fix it.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-black font-medium mt-4 text-center">
              Changing habits is hard — and we won&apos;t pretend otherwise.
            </p>

            <div className="mt-6 flex flex-col items-center">
              <p className="text-blue font-semibold text-lg mb-3">
                Free 30 Minute Consultation
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
              >
                Book Now
              </a>
            </div>

            <div className="mt-7 space-y-4">
              {/* Card 1 auto-reveals on load */}
              <HoverReveal defaultActive={true}>
                <Card border="orange">
                  <h3
                    className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                    style={{ "--d": "0ms" }}
                  >
                    It is NOT:
                  </h3>
                  <NotList
                    items={[
                      "willpower",
                      "motivation",
                      "discipline",
                      "“just trying harder”",
                    ]}
                    startIndex={1}
                    stepMs={stepMs}
                  />
                </Card>
              </HoverReveal>

              {/* Card 2 reveals on scroll OR hover/tap */}
              <HoverReveal>
                <Card border="orange">
                  <h3
                    className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                    style={{ "--d": "0ms" }}
                  >
                    It is also NOT:
                  </h3>
                  <NotList
                    items={["a personality trait", "a moral failing"]}
                    startIndex={1}
                    stepMs={stepMs}
                  />
                </Card>
              </HoverReveal>

              {/* Card 3 reveals on scroll OR hover/tap */}
              <HoverReveal>
                <Card border="orange">
                  <h3
                    className="text-orange font-bold text-base md:text-lg mb-2 ha-item"
                    style={{ "--d": "0ms" }}
                  >
                    What it IS:
                  </h3>

                  <p
                    className="text-3xl md:text-4xl font-extrabold text-black tracking-wide ha-item"
                    style={{ "--d": `${1 * stepMs}ms` }}
                  >
                    A SKILL
                  </p>

                  <div className="mt-5">
                    <h4
                      className="text-orange font-bold text-base md:text-lg mb-2 ha-item"
                      style={{ "--d": `${2 * stepMs}ms` }}
                    >
                      Which can be:
                    </h4>
                    <PlainList
                      items={["Learned", "Practiced", "Supported"]}
                      startIndex={3}
                      stepMs={stepMs}
                    />
                  </div>

                  <div className="mt-5">
                    <h4
                      className="text-orange font-bold text-base md:text-lg mb-2 ha-item"
                      style={{ "--d": `${6 * stepMs}ms` }}
                    >
                      We focus on:
                    </h4>
                    <PlainList
                      items={[
                        "How YOUR brain works",
                        "What systems support YOU",
                        "How YOU build habits that fit YOUR life",
                      ]}
                      startIndex={7}
                      stepMs={stepMs}
                    />
                  </div>
                </Card>
              </HoverReveal>
            </div>
          </section>

          {/* =======================================================
              SECTION 2: The Coaching Æffect
             ======================================================= */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-orange text-center">
              The Coaching Æffect
            </h2>

            {/* coach.jpg */}
            <div className="flex justify-center mt-6">
              <img
                src={CoachImage}
                alt="Coaching"
                className="w-full max-w-3xl rounded-xl shadow-md object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-base md:text-lg leading-relaxed text-black font-medium mt-5 text-center">
              Coaching is action-oriented and forward looking. It is not a replacement for
              therapy.
            </p>

            <HoverReveal className="mt-7 space-y-4">
              <Card border="orange">
                <h3
                  className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                  style={{ "--d": "0ms" }}
                >
                  It does NOT help you with:
                </h3>
                <NotList
                  items={[
                    "Emotional healing",
                    "Mental health concerns",
                    "Past trauma",
                  ]}
                  startIndex={1}
                  stepMs={stepMs}
                />
              </Card>

              <p className="text-base md:text-lg leading-relaxed text-black font-medium text-center">
                Habit coaching provides you with a plan of action to get you where you want
                to be.
              </p>

              <Card border="orange">
                <h3
                  className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                  style={{ "--d": "0ms" }}
                >
                  It helps you with:
                </h3>
                <PlainList
                  items={[
                    "Skill building",
                    "Achieving specific goals",
                    "Focus on future outcomes",
                  ]}
                  startIndex={1}
                  stepMs={stepMs}
                />
              </Card>
            </HoverReveal>
          </section>

          {/* =======================================================
              SECTION 3: The Neuro-Spicy Æffect
             ======================================================= */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-orange text-center">
              The Neuro-Spicy Æffect
            </h2>

            {/* brain.jpg */}
            <div className="flex justify-center mt-6">
              <img
                src={BrainImage}
                alt="Neurodivergent brain"
                className="w-full max-w-3xl rounded-xl shadow-md object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-base md:text-lg leading-relaxed text-black font-medium mt-5 text-center">
              For many people, habit challenges are deeply connected to how their brain
              processes information, motivation, and overwhelm. Neurodivergent individuals
              often receive advice that simply doesn&apos;t work for them.
            </p>

            <HoverReveal className="mt-7 space-y-4">
              <Card border="orange">
                <h3
                  className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                  style={{ "--d": "0ms" }}
                >
                  We recognize differences in:
                </h3>

                <PlainList
                  items={[
                    "Attention",
                    "Memory",
                    "Energy",
                    "Sensory processing",
                    "Executive function",
                  ]}
                  startIndex={1}
                  stepMs={stepMs}
                />

                <p
                  className="text-base md:text-lg leading-relaxed text-black font-semibold mt-5 ha-item"
                  style={{ "--d": `${(1 + 5) * stepMs}ms` }}
                >
                  These are NOT FLAWS – They are part of being HUMAN.
                </p>
              </Card>

              <Card border="orange">
                <h3
                  className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                  style={{ "--d": "0ms" }}
                >
                  We do NOT:
                </h3>
                <NotList
                  items={[
                    "Build rigid systems",
                    "Expect perfection",
                    "Expect all brains to work alike",
                  ]}
                  startIndex={1}
                  stepMs={stepMs}
                />
              </Card>

              <Card border="orange">
                <h3
                  className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                  style={{ "--d": "0ms" }}
                >
                  We DO:
                </h3>

                <PlainList
                  items={[
                    "Build flexible strategies",
                    "Pre-plan for stumbles",
                    "Respect how your brain actually works",
                    "Focus on compassion and encouragement, not pressure",
                  ]}
                  startIndex={1}
                  stepMs={stepMs}
                />
              </Card>
            </HoverReveal>
          </section>

          {/* =======================================================
              SECTION 4: The Transition Æffect
             ======================================================= */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-orange text-center">
              The Transition Æffect
            </h2>

            {/* truck.jpg */}
            <div className="flex justify-center mt-6">
              <img
                src={TruckImage}
                alt="Life transitions"
                className="w-full max-w-3xl rounded-xl shadow-md object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="text-base md:text-lg leading-relaxed text-black font-medium mt-5 text-center">
              Life transitions — whether planned or unexpected — disrupt routines, energy,
              and identity. During these periods, habits that once worked often fall
              apart.
            </p>

            <HoverReveal className="mt-7 space-y-4">
              <Card border="orange">
                <h3
                  className="text-orange font-bold text-base md:text-lg mb-3 ha-item"
                  style={{ "--d": "0ms" }}
                >
                  This can be a period of:
                </h3>

                <PlainList
                  items={["Grief", "Growth", "Uncertainty", "Adjustment"]}
                  startIndex={1}
                  stepMs={stepMs}
                />

                <h3
                  className="text-orange font-bold text-base md:text-lg mt-7 mb-3 ha-item"
                  style={{ "--d": `${(1 + 4) * stepMs}ms` }}
                >
                  This is also an opportunity to:
                </h3>

                <PlainList
                  items={[
                    "Shift focus",
                    "Design a new direction for your life",
                    "Create an environment that works for the “new you”",
                  ]}
                  startIndex={6}
                  stepMs={stepMs}
                />
              </Card>

              <p className="text-base md:text-lg leading-relaxed text-black font-medium text-center">
                Rather than &ldquo;getting back on track,&rdquo; we help you create a new track that
                reflects where you are now.
              </p>
            </HoverReveal>
          </section>

          {/* =======================================================
              CTA SECTION
             ======================================================= */}
          <section>
            <div className="bg-white rounded-xl shadow-md border-l-4 border-orange p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue text-center">
                Ready to see how this works for you?
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-black mt-4 text-center">
                We can walk through what you&apos;re trying to change and apply the D-6 Method in a way that fits how you actually work.
              </p>

              <div className="mt-6 flex justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#e07f1f] transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
