"use client"
import { FC } from "react"

import styles from "./Home.module.scss"
import { Button, Typography, useMediaQuery } from "@mui/material"
import theme from "@/styles/theme"

export const Home: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleStart = () => {
    const formNode = document.getElementById("join-form")
    formNode?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <section id="home" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.texts}>
          <Typography variant={!isMobile ? "headline" : "secondHeadline"} color="white">
            We are born on crossroad, crossroad of engineering
          </Typography>
          <Typography variant="subHeading" color="#898CA9">
            Buy, sell, and grow your crypto with VortexTrade, the platform dedicated to every crypto
            enthusiast at every level.
          </Typography>
        </div>
        <div className={styles.btns}>
          <Button variant="contained" onClick={handleStart}>
            Get Started
          </Button>
          <Button variant="text" onClick={handleStart}>
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles.gradient} />
      <div className={styles.img} />
    </section>
  )
}
