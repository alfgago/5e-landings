import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const ButtonStyles = styled.span`
  display: block;
  position: relative;

  a {
    display: inline-block;
    padding: 0.5rem 2rem;
    border: 1px solid #000;
    border-radius: 50px;
  }

  @media ${DEVICE.xs} {
    position: relative;
  }
`
