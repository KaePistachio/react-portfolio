import React from "react";
import { motion } from "framer-motion";

const DropdownMenu = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0};

  return (
    <motion.div 
      initial={animateFrom}
      animate={animateTo}
      transition={{delay: 0.05}}
      className="dropdown-container"
    > 
    <nav className="dropdown-menu">
      <ul>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.10}}
          onClick={() => props.isMobile && props.closeDropdown()}
          to="/post"  
          className="nav-li serif"
        >
          Blog Posts
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.15}}
          onClick={() => props.isMobile && props.closeDropdown()}
          to="/project"
          className="nav-li serif"
        >
          Projects
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.20}}
          onClick={() => props.isMobile && props.closeDropdown()}
          to="/about"
          className="nav-li serif"
        >
          About Me
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.25}}
          onClick={() => props.isMobile && props.closeDropdown()}
          to="/contact"
          className="nav-li serif"
        >
          Contact
        </motion.li>
      </ul>
    </nav>
    </motion.div>
  );
}

export default DropdownMenu;