import { motion } from "framer-motion";
import { Project } from "./Projects";

export const Navbar = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  const text =
    " I'm a Frontend developer, currently looking out for a new role.   I specialize in creating interactive, user-friendly web applications.".split(
      ""
    );

  return (
    <div>
      <div>
        <p className="text-2xl font-bold mt-40 text-slate-400">
          <span
            className="text-yellow-300"
          >
            Hey, I am Stuti
          </span>
        </p>
        <motion.div
          className="text-2xl font-bold text-white"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {text.map((letter, index) => (
            <motion.span
              className="text-2xl font-bold mt-40 text-slate-400"
              key={index}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <Project/>
    </div>
  );
};
