import styled from "styled-components"
import { COLORS, DEVICE } from "@/styles/variables"

export const LayoutStyles = styled.main`
  position: relative;

  .page-content {
    margin-top: 58px;

    @media ${DEVICE.md} {
      margin-top: 135px;
    }
  }
`
