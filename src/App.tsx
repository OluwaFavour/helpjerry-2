import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Story from "./components/Story";
import DonationImpact from "./components/DonationImpact";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const handleDonateClick = () => {
    // In a real implementation, this would redirect to a payment processor
    // For now, we'll scroll to the donation impact section
    document.getElementById("donation")?.scrollIntoView({ behavior: "smooth" });

    // Example URLs for different donation platforms:
    // window.open('https://www.paypal.com/donate', '_blank');
    // window.open('https://givebutter.com/your-campaign', '_blank');
    // window.open('https://www.gofundme.com/your-campaign', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navigation onDonateClick={handleDonateClick} />
      <Hero onDonateClick={handleDonateClick} />
      <Story />
      <div id="donation">
        <DonationImpact onDonateClick={handleDonateClick} />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
