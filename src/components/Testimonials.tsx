import { MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Caring for Jerry is the most meaningful thing I do every day. His strength inspires me to be better.",
    author: "Steve",
    role: "Jerry's Caregiver",
  },
  {
    id: 2,
    quote:
      "I may be his mother, but Jerry teaches me strength daily. His courage in facing each day amazes me.",
    author: "Diane",
    role: "Jerry's Mom",
  },
  {
    id: 3,
    quote:
      "I donated $5 and told my friends to do the same. Let's help Jerry live better. Every little bit counts!",
    author: "Anonymous Donor",
    role: "Community Supporter",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <MessageCircle className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Words from Loved Ones and Supporters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the people who know Jerry best and those who have been
            touched by his story and chose to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 left-6 text-green-200">
                <Quote className="w-8 h-8" />
              </div>

              <div className="pt-4">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
