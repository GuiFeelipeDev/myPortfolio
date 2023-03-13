import React from "react"
import { motion } from "framer-motion"
import { contactVariants } from "../../utils/motion"
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa"

const Contact = ({ refA }) => {
  const icons = [
    { icon: <FaLinkedin />, link: "" },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/gui.feelipe/",
    },
    { icon: <FaWhatsapp />, link: "" },
    { icon: <FaGithub />, link: "https://github.com/GuiFeelipeDev" },
  ]
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={contactVariants}
        viewport={{ once: true, amount: 0.25 }}
        className="contact-main"
        ref={refA}
      >
        <h1 className="contact-title">How Can i Help You?</h1>
        <p>
          Are you in need of a landing page, a complex app, or perhaps a new
          developer to join your company? Let's work together!
        </p>
        <button className="header-btn">Say Hello</button>
        <div className="icons">
          {icons.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => window.open(item.link)}
                className="contact-icon"
              >
                {item.icon}
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
