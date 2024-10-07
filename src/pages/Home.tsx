import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Linkedin } from 'lucide-react';
import authorimg from "../assets/author-img.png";


const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <div className="relative">
          <img
            src={authorimg}
            alt="Author background"
            className="w-full h-full object-cover"
          />
        
        </div>
        <div className="p-8 text-center mt-[-40px]">
          <motion.h1
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            Charlotte Mandell
          </motion.h1>
          <motion.p
            className="text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.7 }}
          >
            French Literary Translator
          </motion.p>
          <motion.p
            className="text-sm text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.9 }}
          >
            Charlotte Mandell is a French literary translator who was born in Hartford, Connecticut in 1968. She went to Boston Latin High School, the Université de Paris III, and Bard College, where she majored in French literature and film theory. In April 2021 she received the honor of Chevalier dans l'Ordre des Arts et des Lettres from the French government. She lives in the Hudson Valley with her husband, the poet Robert Kelly.
          </motion.p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;