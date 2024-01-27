"use client"
import { FC } from "react"

import styles from "./Navigation.module.scss"
import Image from "next/image"
import { Links } from "@/components/Navigation/Links"
import { useMediaQuery } from "@mui/material"
import theme from "@/styles/theme"

export const Navigation: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <Image src={isMobile ? "/images/logo.svg" : "/images/logo-long.svg"} alt="logo" fill />
        </div>
        <div className={styles.links}>
          <Links />
        </div>
      </div>
    </div>
  )
}
