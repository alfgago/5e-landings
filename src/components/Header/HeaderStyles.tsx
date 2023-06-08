import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const HeaderStyles = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9000;
  padding-top: 2rem;

  @media ${DEVICE.xs} {
    padding-top: 4rem;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 4rem;
  }
`
