import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const BlockStyles = styled.div`
  position: relative;

  .wp-content {
    max-width: 340px;
    margin: auto;

    @media ${DEVICE.xs} {
      max-width: 708px;
    }

    @media ${DEVICE.md} {
      max-width: 670px;
    }
  }
`
