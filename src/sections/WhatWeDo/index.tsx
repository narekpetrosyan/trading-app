"use client"
import { FC } from "react"

import styles from "./WhatWeDo.module.scss"
import { Typography, useMediaQuery } from "@mui/material"
import theme from "@/styles/theme"
import Image from "next/image"

export const WhatWeDo: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <section id="what-we-do" className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.title}>
          <Typography variant={!isMobile ? "headline" : "secondHeadline"} color="white">
            Buy and sell with the lowest fees in the industry
          </Typography>
          <Typography variant="subHeading" color="#898CA9">
            Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using bank transfers or your
            credit/debit card.
          </Typography>
        </div>

        <div className={styles.table}>
          <Image src="/images/table.png" alt="table" fill />
        </div>
      </div>
    </section>
  )
}
