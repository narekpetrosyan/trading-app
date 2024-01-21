import styles from "./page.module.scss"
import { Navigation } from "@/components/Navigation"
import { Home } from "@/sections/Home"
import { Statistics } from "@/sections/Statistics"
import { WhatWeDo } from "@/sections/WhatWeDo"
import { Footer } from "@/components/Footer"
import { Testimonials } from "@/sections/Testimonials"
import { JoinForm } from "@/sections/JoinForm"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

export default function HomePage() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Home />
      <WhatWeDo />
      <Statistics />
      <Testimonials />
      <JoinForm />
      <Footer />

      <ToastContainer />
    </main>
  )
}
