import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative text-white py-10 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* LEFT - BRAND */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-blue-400">
              Ehiguese Deborah
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Frontend Developer • React • UI Enthusiast
            </p>
          </div>

          {/* CENTER - CONTACT */}
          <div className="space-y-3 text-gray-300">
            <p className="font-semibold text-white text-lg sm:text-xl mb-2">
              Contact
            </p>

            <p className="text-sm sm:text-base">📞 Phone: 07031539179</p>
            <p className="text-sm sm:text-base">Alt Phone: 08051737017</p>

            <p className="text-sm sm:text-base">
              💬 WhatsApp:{" "}
              <a
                href="https://wa.me/2347031539179"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Chat with me
              </a>
            </p>

            <p className="text-sm sm:text-base">
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/ehiguese-deborah?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                View Profile
              </a>
            </p>
          </div>

          {/* RIGHT - COPYRIGHT */}
          <div className="text-gray-400 text-sm sm:text-base md:text-right">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>

        {/* BACK TO TOP */}
        <div className="flex justify-center mt-10">
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition text-sm font-medium"
            title="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
