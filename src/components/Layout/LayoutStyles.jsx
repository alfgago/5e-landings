import styled from "styled-components"
import { COLORS, DEVICE } from "@/styles/variables"

export const LayoutStyles = styled.main`
  position: relative;

  .page-content {
    margin-top: 57px;

    @media ${DEVICE.md} {
      margin-top: 134px;
    }
  }
`
