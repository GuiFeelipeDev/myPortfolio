import React from "react"
import { motion } from "framer-motion"
import heroBack from "../../assets/img/heroBack.png"
import { heroVariants } from "../../utils/motion"
const Hero = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <img src={heroBack} alt="." className="hero-image" />

      <motion.div
        initial="hidden"
        whileInView="show"
        variants={heroVariants}
        viewport={{ once: true, amount: 0.25 }}
        className="hero-main"
      >
        <h4>Hello, my name is</h4>
        <h1>
          {"<"}
          <b>Guilherme Felipe</b>
          {"/>"}
        </h1>
        <h3>I am a Web Developer.</h3>
        <p>
          I specialize in building amazing web pages and apps, with a primary
          focus on front-end development, but I also occasionally work in
          design. My main objective is to create dynamic, useful, and responsive
          tools that will benefit my clients and their users.
        </p>
      </motion.div>
    </div>
  )
}

export default Hero
