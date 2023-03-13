import React from "react"
import { myWorks } from "./data"
import { motion } from "framer-motion"
import { aboutVariants, paragraphVariant } from "../../utils/motion"
const Portfolio = ({ refA }) => {
  return (
    <div>
      <div className="portfolio-main" id="portfolio" ref={refA}>
        <h2 className="default-titles">
          {"<"}
          <b>Portfolio</b>
          {"/>"}
        </h2>
      </div>
      {myWorks.map((item, index) => {
        let aux = {}
        if (window.innerWidth < 960) {
          index % 2 === 0
            ? (aux = { direction: "column", border: "0" })
            : (aux = { direction: "column", border: "0" })
        } else {
          index % 2 === 0
            ? (aux = { direction: "row" })
            : (aux = { direction: "row-reverse", border: "0 50px 0 0" })
        }

        return (
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={index % 2 === 0 ? aboutVariants : paragraphVariant}
            viewport={{ once: true, amount: 0.25 }}
            key={index}
            className="project"
            style={{ flexDirection: aux.direction }}
          >
            <div className="img-hover">
              <img src={item.img} style={{ borderRadius: aux.border }} alt="" />
              <div
                className="hover-effect"
                style={{ borderRadius: aux.border }}
              >
                <button onClick={() => window.open(item.link)}>
                  View More
                </button>
              </div>
            </div>
            <div className="project-texts">
              <h2>
                {"<"}
                <b>{item.title}</b>
                {"/>"}
              </h2>
              {item.paragraphs.map((i, index) => {
                return <p key={index}>{i}</p>
              })}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Portfolio
