import React from "react";
import { motion } from "framer-motion";

const DropdownMenu = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0};

  return (
    <motion.div 
      initial={animateFrom}
      animate={{ opacity: 0.95, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05}}
      className="dropdown-container"
    > 
    <nav className="dropdown-menu">
      <ul>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.10}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <a href="/post">Blog Posts</a>
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.20}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <a href="/project">Projects</a>
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.30}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <a href="/about">About Me</a>
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.40}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <a href="/contact">Contact</a>
        </motion.li>
      </ul>
    </nav>
    </motion.div>
  );
}

export default DropdownMenu;