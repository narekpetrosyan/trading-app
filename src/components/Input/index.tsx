import { forwardRef, InputHTMLAttributes } from "react"

import styles from "./Input.module.scss"

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({ ...rest }, ref) => {
  return <input className={styles.input} ref={ref} {...rest} />
})

Input.displayName = "Input"
