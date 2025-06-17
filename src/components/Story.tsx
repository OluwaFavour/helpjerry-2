import { useState } from "react";
import { User, ChevronDown, ChevronUp } from "lucide-react";

export default function Story() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="story" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <User className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jerry's Story
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Hello, my name is Jerry Farris, and I am 53 years old. I am living
              with a condition known as Spinal Muscular Atrophy (SMA), a type of
              muscular dystrophy. This condition has progressively weakened my
              muscles over the years, making everyday tasks a monumental
              challenge.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Despite these hardships, I am surrounded by the unwavering love
              and support of my dedicated caregiver, Steve, and my incredible
              mom, Diane. Their compassion and dedication give me strength every
              single day.
            </p>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                Living with SMA means facing daily challenges that most people
                take for granted. Simple tasks like getting dressed, eating, or
                even breathing can become difficult. But with the support of
                those who care about me, I continue to find joy and purpose in
                each day.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Your support means the world to me and my family. It helps cover
                medical treatments, adaptive equipment, and the care I need to
                maintain my quality of life. Every donation, no matter the size,
                brings hope and comfort to our family.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors duration-300 group"
            >
              {isExpanded ? (
                <>
                  Read Less
                  <ChevronUp className="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Read More
                  <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
