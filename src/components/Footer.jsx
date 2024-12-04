import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Contact Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Contact</h2>
          <p>Email: <a href="mailto:sarunya46mk@gmail.com" className="text-blue-400 hover:underline">pichai.ju39@gmail.com</a></p>
        </div>

        {/* Follow Me Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Follow Me</h2>
          <div className="flex justify-center space-x-6 mt-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:pichai.ju39@gmail.com"
              className=" hover:text-blue-400"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
          
        </div>

        {/* Copyright Section */}
        <div className="text-gray-500 text-sm">
          © 2024 Pichai. All rights reserved.
        </div>
      </div>
      <hr className='mt-10 w-[85%] mx-auto '/>
    </footer>
  );
};

export default Footer;
