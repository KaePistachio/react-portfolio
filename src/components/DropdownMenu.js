import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/about" >
            About Me
          </NavLink>
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.20}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <NavLink to="/project">
            Portfolio
          </NavLink>
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.30}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <NavLink to="/post">
            Personal
          </NavLink>
        </motion.li>
        <motion.li 
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.40}}
          onClick={() => props.isMobile && props.closeDropdown()}
          className="nav-li mono"
        >
          <NavLink to="/contact">
            Contact
          </NavLink>
        </motion.li>
      </ul>
    </nav>
    </motion.div>
  );
}

export default DropdownMenu;