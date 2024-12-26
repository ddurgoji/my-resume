import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="header" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>John Doe</h1>
      <p>Full Stack Developer</p>
    </motion.header>
  );
};

export default Header;
