import { Heart, ArrowDown } from "lucide-react";

interface HeroProps {
  onDonateClick: () => void;
}

export default function Hero({ onDonateClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-8 group">
          <Heart className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Help Jerry Farris Fight
          <span className="block text-green-600 mt-2">
            Spinal Muscular Atrophy
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Every donation brings comfort, care, and dignity to Jerry and his
          family. Your support makes a real difference in his daily battle with
          SMA.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onDonateClick}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            Donate Now
            <Heart className="inline-block w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("story")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-green-600 hover:text-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center group"
          >
            Learn Jerry's Story
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </section>
  );
}
