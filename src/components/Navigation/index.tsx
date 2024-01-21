import { FC } from "react"

import styles from "./Navigation.module.scss"
import Image from "next/image"
import { Links } from "@/components/Navigation/Links"

export const Navigation: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="logo" fill />
        </div>
        <div className={styles.links}>
          <Links />
        </div>
      </div>
    </div>
  )
}
