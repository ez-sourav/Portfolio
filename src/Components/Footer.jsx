import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-orange-500/20 mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">

        <h3 className="text-xl font-bold text-orange-500">
          Sourav Biswas
        </h3>

        <p className="text-gray-400 mt-3 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;