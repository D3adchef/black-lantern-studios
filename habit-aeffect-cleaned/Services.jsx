import { Helmet } from "react-helmet-async";

const CALENDLY_URL =
  "https://calendly.com/dr-jen-habitaeffect/initial-consult-w-dr-jen";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Habit Æffect</title>
        <meta
          name="description"
          content="Habit Æffect services and pricing, including required initial consultation, individual and group coaching, VIP coaching, and upcoming digital resources."
        />
      </Helmet>

      <div className="w-full min-h-screen bg-background pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
          Services
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-black font-medium">
          {/* INITIAL CONSULTATION — FULL WIDTH */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6 md:p-8 md:col-span-2 text-center">
            <div className="mb-3">
              <span className="inline-block text-sm font-semibold text-white bg-orange px-4 py-1 rounded-full">
                Required First
              </span>
            </div>

            <h3 className="text-2xl font-bold text-orange mb-2">
              Initial Consultation
            </h3>

            <p className="text-center text-xl font-bold text-blue mb-4">
              FREE
            </p>

            <p className="text-lg leading-relaxed text-left md:text-center mb-6">
              The initial consultation is a free 30-minute opportunity to assess what types
              of habit change skills you would like to learn, do an initial assessment on
              past and/or current attempts to change, gauge expectations for change, and
              review expectations on both sides. This ensures we are on the same page
              moving forward.
            </p>

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange text-white font-bold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>

          {/* INDIVIDUAL CHANGE CONSULTATION */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange mb-2 text-center">
              Individual Change Consultation
            </h3>
            <p className="text-center text-xl font-bold text-blue mb-4">$100</p>
            <p className="text-lg leading-relaxed">
              This individual session is designed to take broad, general ideas for change
              and turn them into identifiable, actionable habits and behaviors that fit
              your life and point you in the direction you want to go.
            </p>
          </div>

          {/* INDIVIDUAL COACHING */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange mb-2 text-center">
              Individual Coaching
            </h3>
            <p className="text-center text-xl font-bold text-blue mb-2">
              $200 per session
            </p>
            <p className="text-center text-base font-semibold text-gray-700 mb-4">
              Average 6 sessions — total $1,200
            </p>
            <p className="text-lg leading-relaxed mb-2">
              Weekly 1-hour 1:1 coaching sessions that walk you through each stage step by
              step, help you brainstorm tools, and guide you through roadblocks.
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Includes the action plan workbook and behavior journal.
            </p>
          </div>

          {/* VIP COACHING — FULL WIDTH */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6 md:p-8 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange mb-2 text-center">
              VIP Coaching
            </h3>
            <p className="text-center text-xl font-bold text-blue mb-2">
              $350 per session
            </p>
            <p className="text-center text-base font-semibold text-gray-700 mb-4">
              Average 6 sessions
            </p>
            <p className="text-lg leading-relaxed">
              Includes daily check-ins using your preferred mode of communication (call,
              text, or email), a live or recorded habit analysis experience, a 6-month
              follow-up check-in and reset, and everything included in individual coaching.
            </p>
          </div>

          {/* GROUP COACHING */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange mb-2 text-center">
              Group Coaching
            </h3>
            <p className="text-center text-xl font-bold text-blue mb-2">
              $125 per session, per person
            </p>
            <p className="text-center text-base font-semibold text-gray-700 mb-4">
              Average 6 sessions — $750 per person
            </p>
            <p className="text-lg leading-relaxed">
              Group coaching follows the same structured process as individual coaching,
              with the added support and accountability of a group.
            </p>
          </div>

          {/* DIGITAL RESOURCES */}
          <div className="bg-white border-l-4 border-orange rounded-lg shadow-md p-6 md:p-8">
            <h3 className="text-2xl font-bold text-orange mb-2 text-center">
              Digital Resources
            </h3>
            <p className="text-center text-base font-semibold text-gray-700 mb-4">
              Coming Soon
            </p>
            <p className="text-lg leading-relaxed">
              The Action Plan Workbook and Behavior Journal will be available for individual
              purchase to support habit work outside of coaching sessions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
