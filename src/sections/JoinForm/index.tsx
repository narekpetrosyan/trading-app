"use client"
import { FC } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
import styles from "./JoinForm.module.scss"
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Typography,
  useMediaQuery,
} from "@mui/material"
import theme from "@/styles/theme"
import { useController, useForm } from "react-hook-form"
import { Input } from "@/components/Input"
import { formSchema, TSchema } from "@/sections/JoinForm/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { toast } from "react-toastify"

export const JoinForm: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<TSchema>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(formSchema),
  })

  const onSubmit = handleSubmit(async data => {
    try {
      const { data: responseData } = await axios.post("/api", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })

      if (responseData.status === "success") {
        toast.success(responseData.msg)
        reset({})
      } else {
        toast.error(responseData.msg)
      }
    } catch (e) {
      console.log(e)
    }
  })

  const {
    field: { onChange, value },
  } = useController({ control, name: "phone" })

  const handlePhoneChange = (value: string) => {
    onChange(value)
  }

  return (
    <section id="join-form" className={styles.wrapper}>
      <Typography
        variant={!isMobile ? "headline" : "secondHeadline"}
        color="white"
        className={styles.title}
      >
        Join Us
      </Typography>

      <div>
        <div>
          <div className={styles.form}>
            <Input placeholder="First name" {...register("first_name")} />
            <Input placeholder="Last name" {...register("last_name")} />
            <Input placeholder="Email" {...register("email")} />
            <PhoneInput
              placeholder="Phone number"
              className={styles.phoneInput}
              defaultCountry="US"
              countrySelectProps={{
                arrowComponent: "div",
              }}
              value={value}
              onChange={handlePhoneChange}
            />
          </div>
          <div className={styles.checkbox}>
            <FormControlLabel
              {...register("agree_with_terms")}
              sx={{ color: "#18C8FF" }}
              control={<Checkbox sx={{ color: "#18C8FF" }} />}
              label="I agree with sharing my personal data with third parties"
            />
            {errors?.agree_with_terms?.message && (
              <FormHelperText sx={{ color: "red" }}>
                {errors?.agree_with_terms?.message}
              </FormHelperText>
            )}
          </div>
        </div>

        <div className={styles.btnWrapper}>
          <Button variant="contained" onClick={onSubmit}>
            Join Us
          </Button>
        </div>
      </div>
    </section>
  )
}
