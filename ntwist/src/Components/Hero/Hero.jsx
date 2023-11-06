import React from 'react'
import style from "./Hero.module.css"
import Navbar from '../Navbar/Navbar'
const Hero = () => {
  return (
    <div className={style.hero}>
      <div className={style.navbar}>
        {/* Navbar content here */}
        <Navbar/>
      </div>

      <div className={style.content}>
        <div className={style.leftContent}>
          <h1 className={style.data}>Data-powered solutions for Industrial Excellence</h1>
          <button className={style.button}>Learn More</button>
        </div>

        <div className={style.rightContent}>
          <img width={"100%"} src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="Hero" />
        </div>
      </div>
    </div>
  )
}

export default Hero
