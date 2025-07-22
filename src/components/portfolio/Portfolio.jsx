import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Real Estate Web App",
    img: "real_estate.jpg",
    desc: `A full-stack real estate platform where users can explore, post, and manage property listings. Features include secure authentication <span class="tech">(JWT + Cookies)</span>, real-time chat <span class="tech">(Socket.io)</span>, image uploads <span class="tech">(Multer + Cloudinary)</span>, dynamic data fetching <span class="tech">(React Router)</span>, and a rich text editor <span class="tech">(React Quill)</span>. Built with the <span class="tech">MERN</span> stack and <span class="tech">Prisma ORM</span>.`,
  },
  {
    id: 2,
    title: "Animated Portfolio UI",
    img: "portfolioimg.png",
    desc: `A fully responsive portfolio website showcasing my work and skills. Features smooth navigation <span class="tech">(CSS Snap Scroll)</span>, rich animations <span class="tech">(Framer Motion)</span>, animated sidebar menus <span class="tech">(SVG + Framer Motion)</span>, and a contact form <span class="tech">(EmailJS)</span> for direct communication. Built with <span class="tech">React</span> and styled using <span class="tech">SCSS</span> for a modern, interactive experience.`,
  },
  {
    id: 3,
    title: "Coding Profile",
    img: "gfgimg.jpg",
    desc: `Currently hold a college <span class="tech">Rank 622</span> out of <span class="tech">7,000+ competitors</span> at <span class="tech">NIT Kurukshetra</span> on <span class="tech">GeeksforGeeks</span>, securing a position in the <span class="tech">top 10%</span> of coders. Solved <span class="tech">300+ problems on GFG</span> & <span class="tech">200+ problems on LeetCode</span>, consistently practicing to improve rank, strengthen algorithmic thinking, and enhance problem-solving skills.`,
  },
  {
    id: 4,
    title: "Competitive Programming",
    img: "progress.png",
    desc: `Currently a <span class="tech">3★ rated coder</span> on <span class="tech">CodeChef</span>, with a best contest performance of <span class="tech">AIR 158</span> out of <span class="tech">27,000+ participants</span>. Actively engaged in competitive programming to sharpen problem-solving skills, improve coding efficiency, and tackle algorithmic challenges under time constraints.`,

  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h3>{item.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            <button>Have a Look</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Work Highlights</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
