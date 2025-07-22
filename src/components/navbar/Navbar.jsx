import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Kavit's Portfolio UI
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/kavit-kumar-429197370/">
            <img src="/LinkedIn.png" alt="" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/codvlog115/">
            <img src="/gfg.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/_Kavit_/">
            <img src="/Leetcode.png" alt="" />
          </a>
          <a href="https://github.com/kavit-yadav"> 
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
