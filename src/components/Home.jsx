import React from 'react'
import img from '../assets/img2.png'
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
           Hi, I'm 
           </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-blue-500">Pichai Amphanthong</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6">
          Full Stack Developer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          I am a web developer specializing in React and Node.js, seeking a position as a Full Stack Developer. I am passionate about this field and enjoy developing websites while continuously learning new skills to meet the company's needs. I aspire to be a part of creating high-quality and impactful projects for your company
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="/"
              className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <img
            src={img}
            alt="Your Name"
            className="mx-auto rounded-full w-full h-full object-cover sm:w-64 sm:h-64 border-4 border-blue-500 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}
