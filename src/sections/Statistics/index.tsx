import { FC } from "react"

import styles from "./Statistics.module.scss"
import { Typography } from "@mui/material"

export const Statistics: FC = () => {
  return (
    <section id="statistics" className={styles.wrapper}>
      <div className={styles.left}>
        <Typography variant="secondHeadline" color="white">
          Statistics
        </Typography>
      </div>
      <div className={styles.right}>
        <div className={styles.statItem}>
          <Typography className={styles.stat}>11.5 M+</Typography>
          <Typography variant="paragraph" color="#C4C4C4">
            ACTIVE ACCOUNTS
          </Typography>
        </div>

        <div className={styles.statItem}>
          <Typography className={styles.stat}>221.9 M</Typography>
          <Typography variant="paragraph" color="#C4C4C4">
            Earned
          </Typography>
        </div>

        <div className={styles.statItem}>
          <Typography className={styles.stat}>$0.00025</Typography>
          <Typography variant="paragraph" color="#C4C4C4">
            Average cost per transaction
          </Typography>
        </div>
      </div>
    </section>
  )
}
