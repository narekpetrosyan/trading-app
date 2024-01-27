"use client"
import { FC } from "react"

import styles from "./Footer.module.scss"
import { Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import theme from "@/styles/theme"

export const Footer: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <footer className={styles.wrapper}>
      <div className={styles.logo}>
        <Image src={isMobile ? "/images/logo.svg" : "/images/logo-long.svg"} alt="logo" fill />
      </div>

      <Typography variant="paragraph" color="#898CA9">
        © VortexTrade. All rights reserved. 2024
      </Typography>
    </footer>
  )
}
