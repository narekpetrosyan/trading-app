"use client"
import { FC, MouseEvent, useState } from "react"
import Link from "next/link"
import styles from "@/components/Navigation/Navigation.module.scss"
import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material"
import theme from "@/styles/theme"

export const Links: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleJoin = () => {
    const formNode = document.getElementById("join-form")
    formNode?.scrollIntoView({
      behavior: "smooth",
    })
  }

  if (isMobile) {
    return (
      <>
        <Button variant="icon" onClick={handleClick} sx={{ padding: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="53"
            viewBox="0 0 66 53"
            fill="none"
          >
            <path
              d="M11 13.25H55V17.6667H11V13.25ZM22 24.2917H55V28.7083H22V24.2917ZM35.75 35.3333H55V39.75H35.75V35.3333Z"
              fill="white"
            />
          </svg>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          slotProps={{
            paper: {
              className: styles.hamburger,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="#home" className={styles.link}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="#what-we-do" className={styles.link}>
              What We Do
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="#statistics" className={styles.link}>
              Statistics
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="#testimonials" className={styles.link}>
              Testimonials
            </Link>
          </MenuItem>
        </Menu>
      </>
    )
  }

  return (
    <>
      <Link href="#home" className={styles.link}>
        Home
      </Link>
      <Link href="#what-we-do" className={styles.link}>
        What We Do
      </Link>
      <Link href="#statistics" className={styles.link}>
        Statistics
      </Link>
      <Link href="#testimonials" className={styles.link}>
        Testimonials
      </Link>
      <Button variant="contained" onClick={handleJoin}>
        Join Us
      </Button>
    </>
  )
}
