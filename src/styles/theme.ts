import { CSSProperties } from "react"

import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface TypographyVariantsOptions {
    headline?: CSSProperties
    secondHeadline?: CSSProperties
    title?: CSSProperties
    subHeading?: CSSProperties
    button?: CSSProperties
    subtitle?: CSSProperties
    paragraph?: CSSProperties
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    icon: true
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    headline: true
    secondHeadline: true
    title: true
    subHeading: true
    button: true
    subtitle: true
    paragraph: true
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    headline: {
      fontFamily: "GraphikBold, sans-serif",
      fontSize: "80px",
      fontWeight: "500",
      lineHeight: "88px",
    },
    secondHeadline: {
      fontFamily: "GraphikRegular, sans-serif",
      fontSize: "52px",
      fontWeight: "400",
      lineHeight: "62px",
    },
    title: {
      fontFamily: "GraphikBold, sans-serif",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
    },
    subHeading: {
      fontFamily: "GraphikRegular, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
    },
    button: {
      fontFamily: "GraphikRegular, sans-serif",
      fontWeight: 500,
      fontSize: "17px",
      lineHeight: "25px",
    },
    subtitle: {
      fontFamily: "GraphikRegular, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    paragraph: {
      fontFamily: "GraphikRegular, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
})

theme.components = {
  MuiTypography: {
    styleOverrides: {
      root: {
        textTransform: "none",
        margin: "0",
      },
    },
  },
  MuiButton: {
    defaultProps: {
      style: {
        textTransform: "none",
        fontFamily: "GraphikRegular, sans-serif",
        fontSize: "17px",
        fontWeight: "500",
        lineHeight: "25px",
      },
    },
    variants: [
      {
        props: { variant: "icon" },
        style: {
          borderRadius: "10px",
        },
      },
    ],
    styleOverrides: {
      contained: {
        padding: "20px 40px",
        background: "#4452FE",
        textAlign: "center",
        color: "white",
        cursor: "pointer",
        boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)",
        borderRadius: "0",
        ":hover": {
          background: "#192aff",
        },
        "&:disabled": {
          color: "not-allowed",
        },
      },
      text: {
        padding: "20px 40px",
        boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)",
        border: "1px solid #FFF",
        background: "#181818",
        borderRadius: "0",
        "&:hover": {
          background: "#000000",
        },
        "&:disabled": {
          color: "not-allowed",
        },
      },
    },
  },
}

export default theme
