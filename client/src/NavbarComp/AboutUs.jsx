import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 w-full px-4 py-8 md:px-8 md:py-12">
          <header className="text-center mb-12 w-full">
            <h1 className="text-5xl font-extrabold text-purple-100 mb-4 ">Welcome to SafeMaps</h1>
            <p className="text-lg text-gray-300 font-semibold">
              Empowering your journey with real-time safety intelligence.
            </p>
          </header>

          <section className="mb-12 w-full">
            <h2 className="text-3xl font-semibold text-purple-300 mb-6 text-center ">About Us</h2>
            <div className="text-center px-4 max-w-full">
              <p className="text-lg leading-relaxed mx-auto ">
                At SafeMaps, we are transforming travel with an unwavering focus on safety and peace of mind. Our platform integrates cutting-edge technology with real-time data to offer personalized route recommendations, ensuring that your journey is not only efficient but also secure. By analyzing crime data, traffic conditions, and recent incidents, we deliver intelligent route options tailored to your safety preferences.
              </p>
              <p className="text-lg leading-relaxed mx-auto  mt-4">
                Our mission is to make travel smarter, safer, and more informed. Whether you're navigating a new city or planning your daily commute, SafeMaps equips you with essential insights that help you avoid potential risks while highlighting the most reliable routes. We believe in empowering you to make informed decisions that prioritize your well-being.
              </p>
            </div>
          </section>

          <section className="mb-12 w-full">
            <h2 className="text-3xl font-semibold text-purple-300 mb-6 text-center ">Our Approach</h2>
            <div className="text-center px-4 max-w-full">
              <p className="text-lg leading-relaxed mx-auto ">
                SafeMaps combines advanced AI-powered algorithms with verified user feedback to offer a comprehensive view of the safest travel options. Whether it's identifying low-crime zones, suggesting alternative routes to avoid recent incidents, or providing real-time traffic updates, our goal is to keep you informed at every turn. Through continuous monitoring and updating, we ensure that you always have the latest and most accurate data at your fingertips.
              </p>
              <p className="text-lg leading-relaxed mx-auto  mt-4">
                We believe that travel should be a seamless experience, free from unnecessary stress or danger. SafeMaps provides users with real-time alerts, alternate route suggestions, and easy-to-interpret safety ratings, allowing you to stay ahead of potential risks and enjoy a worry-free journey.
              </p>
            </div>
          </section>

          <section className="mb-12 w-full">
            <h2 className="text-3xl font-semibold text-purple-300 mb-6 text-center ">Looking Forward</h2>
            <div className="text-center px-4 max-w-full">
              <p className="text-lg leading-relaxed mx-auto ">
                We are continuously evolving to meet the safety challenges of tomorrow's travelers. With an expanding global database and enhanced features such as crime heatmaps and user-verified zones, SafeMaps aims to become the go-to platform for secure navigation. Our vision is to create a world where everyone can travel with confidence, knowing that their safety is our top priority.
              </p>
              <p className="text-lg leading-relaxed mx-auto  mt-4">
                By fostering a community-driven approach to safety, we encourage travelers to share insights and help others stay informed. Together, we can create safer spaces for exploration, empowering people to move freely without compromising their sense of security.
              </p>
            </div>
          </section>

          <section className="mb-12 w-full">
            <h2 className="text-3xl font-semibold text-purple-300 mb-6 text-center ">Join Us on This Journey</h2>
            <div className="text-center px-4 max-w-full">
              <p className="text-lg leading-relaxed mx-auto ">
                At SafeMaps, we believe that safe travel is a fundamental right for everyone. As we continue to innovate and enhance our platform, we invite you to join us in building a future where safety is integrated into every journey. With your trust, we can make SafeMaps the world's leading resource for secure, smart travel.
              </p>
              <p className="text-lg leading-relaxed mx-auto  mt-4">
                Thank you for choosing SafeMaps—your trusted travel companion for safe and efficient navigation. Let's move forward, together.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 text-center w-full">
            <p className="text-lg text-gray-300 ">Stay safe, travel smart, and explore confidently with SafeMaps!</p>
          </footer>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
