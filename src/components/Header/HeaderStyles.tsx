import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const HeaderStyles = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9000;
  transition: 0.5s ease all;
  color: ${COLORS.white};
  background:  ${COLORS.white};
  padding: 0;
  margin: 0;
  color:  ${COLORS.black};
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 60px;

  .content {
    display: flex;
    align-items: center;
  }

  ul {
    margin: 0;
    padding: 0;
  }
  
`
