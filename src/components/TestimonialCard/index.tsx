import { FC } from "react"

import styles from "./TestimonialCard.module.scss"
import { Avatar, Typography } from "@mui/material"

interface ITestimonialCardProps {
  name: string
  avatar: string
  position: string
  comment: string
}

export const TestimonialCard: FC<ITestimonialCardProps> = ({ name, avatar, position, comment }) => {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <Avatar src={avatar} alt={name} />
        <div className={styles.texts}>
          <Typography variant="subtitle" color="white">
            {name}
          </Typography>
          <Typography variant="subtitle" color="white">
            {position}
          </Typography>
        </div>
      </div>
      <Typography variant="paragraph" color="white">
        {comment}
      </Typography>
    </div>
  )
}
