import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Dice icons
import D1Icon from "../assets/D1.svg";
import D2Icon from "../assets/D2.svg";
import D3Icon from "../assets/D3.svg";
import D4Icon from "../assets/D4.svg";
import D5Icon from "../assets/D5.svg";
import D6Icon from "../assets/D6.svg";

export default function D6() {
  return (
    <>
      <Helmet>
        <title>The D-6 Method | Habit Æffect</title>
        <meta
          name="description"
          content="The D-6 Method is a structured, research-backed framework for understanding, designing, and sustaining meaningful habit change."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-background pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-10">
          The D-6 Method
        </h1>

        <div className="max-w-5xl mx-auto text-black font-medium space-y-10">

          {/* Step 1 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 flex items-center gap-3">
              <img
                src={D1Icon}
                alt="D1 die"
                className="w-9 md:w-10 h-auto"
                loading="lazy"
                decoding="async"
              />
              Step 1 — Discover
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              What are you doing right now that doesn&apos;t / does work for you? Let&apos;s look.
            </p>
          </section>

          <div className="border-t border-gray-200"></div>

          {/* Step 2 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 flex items-center gap-3">
              <img
                src={D2Icon}
                alt="D2 die"
                className="w-9 md:w-10 h-auto"
                loading="lazy"
                decoding="async"
              />
              Step 2 — Decode
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              We analyze what is driving your habits.
            </p>
          </section>

          <div className="border-t border-gray-200"></div>

          {/* Step 3 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 flex items-center gap-3">
              <img
                src={D3Icon}
                alt="D3 die"
                className="w-9 md:w-10 h-auto"
                loading="lazy"
                decoding="async"
              />
              Step 3 — Design &amp; Disrupt
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              We build a flexible plan that helps with stumbles and rewards successes while
              consistently moving you toward your goal.
            </p>
          </section>

          <div className="border-t border-gray-200"></div>

          {/* Step 4 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 flex items-center gap-3">
              <img
                src={D4Icon}
                alt="D4 die"
                className="w-9 md:w-10 h-auto"
                loading="lazy"
                decoding="async"
              />
              Step 4 — Do
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Do the plan.
            </p>
          </section>

          <div className="border-t border-gray-200"></div>

          {/* Step 5 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 flex items-center gap-3">
              <img
                src={D5Icon}
                alt="D5 die"
                className="w-9 md:w-10 h-auto"
                loading="lazy"
                decoding="async"
              />
              Step 5 — Double-Check
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Is it working? If not. We fix it.
            </p>
          </section>

          <div className="border-t border-gray-200"></div>

          {/* Step 6 */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-orange mb-3 flex items-center gap-3">
              <img
                src={D6Icon}
                alt="D6 die"
                className="w-9 md:w-10 h-auto"
                loading="lazy"
                decoding="async"
              />
              Step 6 — Develop
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              We plan to make sure it continues after coaching.
            </p>
          </section>

          {/* CTA */}
          <section className="mt-14 bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-orange space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold text-blue">
              Ready to see how this works for you?
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              We can walk through what you&apos;re trying to change and apply the D-6 Method in a
              way that fits how you actually work.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
            >
              Contact Dr. Jen
            </Link>
          </section>

        </div>
      </div>
    </>
  );
}
