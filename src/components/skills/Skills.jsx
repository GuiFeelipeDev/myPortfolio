import React from "react"
import { paragraphs, skillsLabel } from "./data"
import { BsCheck } from "react-icons/bs"
import { motion } from "framer-motion"
import { skillsVariants, paragraphVariant } from "../../utils/motion"
const Skills = ({ refA }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={skillsVariants}
      viewport={{ once: true, amount: 0.25 }}
      ref={refA}
      className="skill-anim"
    >
      <div className="skills-main" id="skills">
        <h2 className="default-titles">
          {"<"}
          <b>Skills</b>
          {"/>"}
        </h2>
        <div className="skill-box">
          <div className="limit-box">
            {skillsLabel.map((item, index) => {
              return (
                <div className="skill" key={index}>
                  <img src={item.icon} alt="item" />
                  <p>{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="skills-texts">
          <h4>Habilites acquired during my work experience:</h4>
          {paragraphs.map((item, index) => {
            return (
              <motion.p
                initial="hidden"
                whileInView="show"
                variants={paragraphVariant}
                viewport={{ once: true, amount: 0.25 }}
                key={index}
              >
                <BsCheck />
                {item}
              </motion.p>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Skills
