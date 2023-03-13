import { motion } from "framer-motion"
import React from "react"
import { headerVariants } from "../../utils/motion"
import { headerData } from "./data"
const Header = ({ scrollInto }) => {
  const openMenu = () => {
    let aux = document.getElementById("burger")
    aux.classList.toggle("active")
    let aux1 = document.getElementById("cross")
    aux1.classList.toggle("cross")
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: true, amount: 0.25 }}
      className="header-main"
    >
      <div className="header-content">
        <div className="logo">G</div>
        <div className="header-links">
          {headerData.map((item, index) => {
            return (
              <p key={index}>
                {"<"}
                <a onClick={() => scrollInto(item.link)}>{item.title}</a>
                {"/>"}
              </p>
            )
          })}
          <button className="header-btn" onClick={() => scrollInto("contact")}>
            Let's Talk
          </button>
        </div>
        <div className="hamburger-menu">
          <div
            className="hamburger-button"
            id="cross"
            onClick={() => openMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hamburger-items active" id="burger">
            {headerData.map((item, index) => {
              return (
                <p key={index}>
                  {"<"}
                  <a
                    onClick={() => {
                      scrollInto(item.link)
                      openMenu()
                    }}
                  >
                    {item.title}
                  </a>
                  {"/>"}
                </p>
              )
            })}
            <button
              className="header-btn"
              onClick={() => {
                scrollInto("contact")
                openMenu()
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Header
