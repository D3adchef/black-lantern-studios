import { useState } from "react";
import { Helmet } from "react-helmet-async";
import habitsHard from "../assets/habits-hard.jpg";

const CALENDLY_URL =
  "https://calendly.com/dr-jen-habitaeffect/initial-consult-w-dr-jen";

const SUBSTACK_URL = "https://habitaeffect.substack.com";

export default function Resources() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="w-full min-h-screen bg-background pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <Helmet>
        <title>Resources | Habit Æffect</title>
        <meta
          name="description"
          content="Explore Habit Æffect resources, educational videos, and news features about Dr. Jen's work in behavioral coaching and habit change."
        />
      </Helmet>

      <div className="max-w-5xl mx-auto text-black font-medium space-y-14">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange mb-6">
            Resources
          </h1>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Ever wonder why new habits are hard? Learn more about how Habit
            Æffect approaches behavior change through practical, skill-based
            support.
          </p>

          <div className="max-w-xl mx-auto mb-12">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer group"
              aria-label="Visit Habit Æffect on Substack"
            >
              <img
                src={habitsHard}
                alt="Ever wonder why new habits are hard?"
                className="w-full rounded-xl shadow-md border-2 border-orange group-hover:scale-[1.01] group-hover:shadow-lg transition-all"
              />
            </a>

            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
            >
              Subscribe on Substack
            </a>
          </div>

          <button
            onClick={() => setShowVideo(true)}
            className="max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 bg-white rounded-xl shadow-md border-l-4 border-orange p-4 hover:shadow-lg hover:scale-[1.01] transition-all text-left"
            aria-label="Watch Introducing the Habit Æffect and Dr. Jen"
          >
            <div className="relative w-full md:w-40">
              <img
                src="https://img.youtube.com/vi/-XvQyGvrrSQ/hqdefault.jpg"
                alt="Introducing the Habit Æffect and Dr. Jen"
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-orange text-white rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md">
                  ▶
                </span>
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-orange mb-2">
                Introducing the Habit Æffect and Dr. Jen
              </h3>

              <p className="text-base leading-relaxed text-black">
                Dr. Jen, a habit change coach, created the Habit Æffect to help
                people understand why they do or don&apos;t do things and change
                their habits.
              </p>
            </div>
          </button>
        </section>

        <section className="border-t border-orange/40 pt-12 text-center">
          <h2 className="text-3xl font-bold text-orange mb-4">
            In the News
          </h2>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Learn more about Dr. Jen&apos;s work and the mission behind Habit Æffect
            in this featured article highlighting her approach to behavior change
            and impact in the community.
          </p>

          <a
            href="https://communitiesu.org/blog/2026/01/12/habit-shift-small-business-financing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
          >
            Read the Article
          </a>
        </section>

        <section className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-md border-l-4 border-orange text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue mb-4">
            Looking for the Right Place to Start?
          </h2>

          <p className="text-lg max-w-3xl mx-auto mb-6">
            If you&apos;re not sure where to begin or want help applying these ideas,
            we&apos;re here to guide you toward the right next step.
          </p>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
          >
            Book Now
          </a>
        </section>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-xl shadow-xl p-4 w-full max-w-[360px]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-4 -right-4 bg-orange text-white font-bold rounded-full w-10 h-10 shadow-md hover:bg-[#e07f1f] transition-colors"
              aria-label="Close video"
            >
              ×
            </button>

            <iframe
              className="w-full aspect-[9/16] rounded-lg"
              src="https://www.youtube.com/embed/-XvQyGvrrSQ?autoplay=1"
              title="Habit Æffect YouTube Short"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
