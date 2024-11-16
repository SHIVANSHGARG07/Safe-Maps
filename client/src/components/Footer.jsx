import React from 'react';

function Footer() {
  return (
    <div className="w-full h-auto bg-zinc-900 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row gap-10"> {/* Increased gap for more space */}
        
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 h-auto mb-8 mt-[-2vw] md:mb-0">
          <div className="contact-form w-full">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
            <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Your SVG content */}
            </svg>
          </div>
        </div>

        {/* Media and Contact Us Sections */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-15"> {/* Increased gap for more space */}
          
          {/* Media Links Section */}
          <div className="media-section w-full ml-6 md:w-1/2 flex-1">
            <div className="text-xl md:text-2xl font-semibold mb-4">MEDIA</div>
            <ul className="list-disc list-inside space-y-4 text-xl md:text-2xl">
              <li><a className="underline" href="https://www.facebook.com/">Facebook</a></li>
              <li><a className="underline" href="https://www.instagram.com/accounts/login/">Instagram</a></li>
              <li><a className="underline" href="https://twitter.com/?lang=en">Twitter</a></li>
              <li><a className="underline" href="https://www.linkedin.com/feed/">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="location-section w-full md:w-1/2 flex-1">
            <div className="text-xl md:text-2xl font-semibold mb-4">CONTACT US</div>
            <ul className="list-disc list-inside space-y-4 text-xl md:text-2xl">
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">safemaps@gmail.com</a></li>
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">safemaps.com</a></li>
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">CyberHub , New Delhi</a></li>
  <li style={{ textDecoration: 'none' }}><a className="underline" href="#">Lviv, Ukraine</a></li>
</ul>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;