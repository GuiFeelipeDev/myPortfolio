import React from "react"
import { motion } from "framer-motion"
import { contactVariants } from "../../utils/motion"
const Footer = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={contactVariants}
        viewport={{ once: true, amount: 0.25 }}
        className="footer-main"
      >
        <h4>Design & Build by Guilherme Felipe Pereira</h4>
        <p>2023</p>
      </motion.div>
    </div>
  )
}

export default Footer
