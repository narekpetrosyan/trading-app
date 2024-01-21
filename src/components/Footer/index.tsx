import { FC } from "react"

import styles from "./Footer.module.scss"
import { Typography } from "@mui/material"

export const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Typography variant="paragraph" color="#898CA9">
        © All rights reserved. 2024
      </Typography>
    </footer>
  )
}
