import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const location = useLocation();
  const submitted = new URLSearchParams(location.search).get("submitted") === "true";

  return (
    <div className="w-full min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <Helmet>
        <title>Contact | Habit Æffect</title>
        <meta
          name="description"
          content="Contact Habit Æffect to ask questions, learn more about coaching services, or explore how habit-focused support can fit your goals."
        />
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-12">
        Contact Us
      </h1>

      <div className="max-w-3xl mx-auto text-gray-900 font-medium">
        {/* Success Message */}
        {submitted && (
          <div className="mb-8 bg-white border-l-4 border-green-600 rounded-lg shadow-md p-5">
            <p className="text-lg font-semibold text-blue">
              ✅ Message sent! We&apos;ll be in touch soon.
            </p>
          </div>
        )}

        {/* Intro */}
        <p className="text-lg leading-relaxed text-center mb-10">
          Have questions about the Habit Æffect program? Want to learn more about
          coaching or upcoming offerings? Fill out the form below and we&apos;ll be in
          touch.
        </p>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange">
          <form
            action="https://formsubmit.co/info@habitaeffect.com"
            method="POST"
            className="grid grid-cols-1 gap-6"
          >
            {/* FormSubmit settings */}
            <input
              type="hidden"
              name="_subject"
              value="New Habit Æffect Contact Form Submission"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://habitaeffect.com/contact?submitted=true"
            />

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2 text-blue">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="Name"
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="Your name"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2 text-blue">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2 text-blue">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                rows="5"
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-orange text-white text-lg font-semibold py-3 rounded-md hover:bg-[#e07f1f] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
