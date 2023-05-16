import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const SocialsStyles = styled.div`
  position: relative;
  display: flex;
  gap: 27px;

  @media ${DEVICE.md} {
    gap: 20px;
  }
`
