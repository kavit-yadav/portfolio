import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 0,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>From Effort to Excellence</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Laying</motion.b> the foundation through
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}> continuous</motion.b>  learning.
          </h1>
          <button>Academic Highlights</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {/*<motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
          </p>
          <button>Go</button>
        </motion.div>*/}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>College (Undergraduate): </h2>
          <p>B.Tech in Information Technology | Nov 2022 – May 2026</p>
          <p>National Institute of Technology, Kurukshetra</p>
          <p>CGPA: 8.17</p>
          <button>Marksheet</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Higher Secondary (12th):</h2>
          <p>CBSC | 2021 - 2022</p>
          <p>Nav Jyoti Public School, Rewari, Haryana</p>
          <p>Percentage: 97 %</p>
          <button>Marksheet</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Secondary (10th):</h2>
          <p>CBSC | 2019 - 2020</p>
          <p>Nav Jyoti Public School, Rewari, Haryana</p>
          <p>Percentage: 94.8 %</p>
          <button>Marksheet</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
