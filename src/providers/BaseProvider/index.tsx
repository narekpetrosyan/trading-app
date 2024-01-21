"use client"
import theme from "@/styles/theme"
import { ThemeProvider } from "@mui/material"
import { FC, PropsWithChildren } from "react"

export const BaseProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
