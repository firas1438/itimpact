import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideArrowRightLeft, LucideFileQuestion, LucideFormInput, LucideMailQuestion, LucideMessageCircle, LucideMessageCircleQuestion, LucidePillBottle, LucideUpload } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const titleText = "Your AI Companion for a ";
  const subtitleText = "Gentle Birth Journey!";

  // Function to animate each character one by one
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.1, // Delay between each character
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // FAQ Accordion toggle state
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-white to-gray-100">
      {/* Decorative Crystal Ball */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-80 h-80 rounded-full bg-blue-100/20 blur-3xl animate-float-slow">
            <div className="absolute w-48 h-48 rounded-full bg-blue-200/30 blur-2xl animate-pulse-slow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute w-32 h-32 rounded-full bg-blue-300/20 blur-xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Main orbiting particles */}
          <div
            className="absolute w-3 h-3 bg-blue-300 rounded-full blur-sm animate-orbit"
            style={{ animationDuration: "9s" }}
          />
          <div
            className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm animate-orbit-delay"
            style={{ animationDuration: "7s", animationDelay: "0.5s" }}
          />
        </div>

        {/* Scattered particles - RIGHT SIDE */}
        <div
          className="absolute top-10 left-10 w-2 h-2 bg-blue-300 rounded-full blur-sm animate-orbit"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute top-1/4 right-20 w-3 h-3 bg-blue-400 rounded-full blur-sm animate-orbit-delay"
          style={{ animationDuration: "10s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-2 h-2 bg-blue-500 rounded-full blur-sm animate-orbit"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-10 right-10 w-3 h-3 bg-blue-300 rounded-full blur-sm animate-orbit-delay"
          style={{ animationDuration: "11s", animationDelay: "0.7s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-orbit"
          style={{ animationDuration: "9s" }}
        />

        {/* Scattered particles - LEFT SIDE */}
        <div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-orbit-delay"
          style={{ animationDuration: "9s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/3 left-32 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-orbit"
          style={{ animationDuration: "7s" }}
        />
        <div
          className="absolute bottom-32 left-16 w-2 h-2 bg-blue-300 rounded-full blur-sm animate-orbit-delay"
          style={{ animationDuration: "10s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-20 left-5 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-orbit"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-3 h-3 bg-blue-500 rounded-full blur-sm animate-orbit-delay"
          style={{ animationDuration: "8s", animationDelay: "0.8s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 pl-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              {/* Animate title characters */}
              {titleText.split("").map((char, index) => (
                <motion.span key={index} variants={characterVariants}>
                  {char}
                </motion.span>
              ))}
              {/* Subtitle part */}
              <span className="text-blue-600">
                {subtitleText.split("").map((char, index) => (
                  <motion.span key={index} variants={characterVariants}>
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <p className="text-lg text-gray-700 mb-8">
              Personalized guidance, health monitoring, and support throughout
              your pregnancy. Experience the perfect blend of care and
              technology.
            </p>
            <button
              onClick={() => navigate("/assessment")}
              className="px-10 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
            >
              Start Health Assessment
            </button>
          </motion.div>

{/* Right Section */}
<motion.div
  className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, delay: 0.2 }}
>
  <motion.div
    className="relative w-full max-w-md" // Changed from max-w-lg to max-w-md
    animate={{
      y: ["0", "-10px", "0", "10px", "0"], // Float effect (up and down)
      scale: [1.05, 1.1, 1.05], // Slightly larger zoom effect
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
  >
    <img
      src="./momp.png"
      alt="Pregnancy illustration"
      className="w-full h-auto"
    />
  </motion.div>
</motion.div>

          
        </div>

        {/* How It Works Section */}
        <div className="mt-28 text-center mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <LucideMailQuestion className="text-2xl font-bold text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Complete Assessment
              </h3>
              <p className="text-gray-600">
                Answer personalized health questions to guide your pregnancy
                journey.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <LucideMessageCircle className="text-2xl font-bold text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get AI Support
              </h3>
              <p className="text-gray-600">
                Chat with our AI assistant for personalized advice and tips.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <LucidePillBottle className="text-2xl font-bold text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Check Medicine
              </h3>
              <p className="text-gray-600">
                Check if medications are safe for use during pregnancy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-full mx-auto mt-8 bg-white px-8 py-2 rounded-lg shadow-lg">
            {[
              {
                question: "What is this AI companion?",
                answer:
                  "This is an AI-driven assistant to help guide and support you through your pregnancy journey.",
              },
              {
                question: "How do I start?",
                answer:
                  "Simply start by completing the health assessment form, and our AI will guide you from there.",
              },
              {
                question: "Is my data safe?",
                answer:
                  "Yes, your data is completely secure and private. There is no data storage at all.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transition-transform transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#x25BC;
                  </span>
                </div>
                <div
                  className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
