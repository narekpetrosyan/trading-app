"use client"
import { FC } from "react"

import styles from "./Testimonials.module.scss"
import { Typography, useMediaQuery } from "@mui/material"
import theme from "@/styles/theme"
import { TestimonialCard } from "@/components/TestimonialCard"
import { TESTIMONIALS } from "@/constants/testimonials"

export const Testimonials: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <section id="testimonials" className={styles.wrapper}>
      <Typography
        variant={!isMobile ? "headline" : "secondHeadline"}
        color="white"
        className={styles.title}
      >
        Testimonials
      </Typography>

      <div className={styles.items}>
        {TESTIMONIALS.map(el => (
          <TestimonialCard key={el.name} {...el} />
        ))}
      </div>
    </section>
  )
}
