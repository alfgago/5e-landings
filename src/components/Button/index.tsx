import React from "react"
import Link from "next/link"

import { ButtonStyles } from "./ButtonStyles"

const Button = ({ label, href }: any) => {
  return (
    <ButtonStyles>
      <Link href={href}>
        <span>{label}</span>
      </Link>
    </ButtonStyles>
  )
}

export default Button
