import { Helmet } from "react-helmet-async";
import DrJenPhoto from "../assets/drjenn.webp";

const CALENDLY_URL =
  "https://calendly.com/dr-jen-habitaeffect/initial-consult-w-dr-jen";

export default function MeetDrJen() {
  return (
    <div className="w-full min-h-screen bg-background pt-24 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <Helmet>
        <title>Meet Dr. Jen | Habit Æffect</title>
        <meta
          name="description"
          content="Meet Dr. Jen, founder of Habit Æffect. Learn about her neurodivergent-affirming, compassionate approach to practical behavior change."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto text-black font-medium">
        {/* Photo */}
        <div className="flex justify-center mb-6">
          <img
            src={DrJenPhoto}
            alt="Dr. Jen"
            width={224}
            height={224}
            loading="lazy"
            decoding="async"
            className="rounded-xl shadow-md object-contain w-44 md:w-56"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange text-center mb-8">
          Meet Dr. Jen
        </h1>

        {/* Bio */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-center">
          <p>
            Hi! I&apos;m Dr. Jen, and I&apos;ve been fascinated by behavior since I was very young—honestly, it&apos;s the thing I&apos;ve always understood better than anything else. I know from experience that changing behavior is hard, especially if you are &ldquo;neuro-spicy&rdquo; or feel like your brain just doesn&apos;t process things the &ldquo;typical&rdquo; way. I&apos;m here to tell you that if you&apos;ve struggled to change in the past, it isn&apos;t a moral failing or a lack of willpower; it&apos;s simply because you haven&apos;t been given the right tools and systems yet. For nearly ten years, I&apos;ve been helping college students take these &ldquo;academic&rdquo; ideas and turn them into real-life skills by teaching them how to analyze and change their own habits.
          </p>

          <p>
            While I am a professor with a PhD who has spent over a decade studying and teaching these concepts, I want to be clear that I am not a therapist. Instead, I&apos;m one of the few academics still focused on the practical basics of behaviorism. My goal isn&apos;t to pressure you to be more productive or to meet society&apos;s expectations. I simply want to give you the skills to reach your own goals so you can become exactly who you want to be.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 bg-white p-6 md:p-8 rounded-xl shadow-md border-l-4 border-orange text-black font-medium space-y-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue">
            Ready to Start Building Habits That Fit Your Life?
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            If you&apos;re not sure where to begin, we can explore that together and find an approach that
            aligns with how you actually work.
          </p>

          <div className="pt-2">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#e07f1f] transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
