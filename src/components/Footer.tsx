import { Heart, Facebook, Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-600 rounded-full mr-3">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Help Jerry</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Supporting Jerry Farris in his battle with Spinal Muscular
              Atrophy. Every donation makes a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("story")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Jerry's Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("donation")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="flex items-center mb-4 text-gray-400">
              <Mail className="w-5 h-5 mr-3" />
              <a
                href="mailto:hello@helpjerry.com"
                className="hover:text-white transition-colors"
              >
                hello@helpjerry.com
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Help Jerry. Made with love and hope for Jerry's journey.
          </p>
        </div>
      </div>
    </footer>
  );
}
