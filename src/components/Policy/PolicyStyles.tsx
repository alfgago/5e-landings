import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const PolicyStyles = styled.section`
  position: relative;

  h1 {
    text-align: center;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    @media ${DEVICE.xs} {
      padding-top: 120px;
      padding-bottom: 110px;
    }
  }

  h2,
  h3 {
    //styleName: Mobile/H5;
    font-family: Bradford LL;
    font-size: 26px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;

    margin-top: 40px;
    @media ${DEVICE.xs} {
      margin-top: 60px;
    }

    @media screen and (min-width: 1080px) {
      //styleName: Tablet/H5;
      font-size: 28px;
      line-height: 32px;
    }

    @media screen and (min-width: 1440px) {
      //styleName: Desktop/H5;
      font-size: 32px;
      line-height: 35px;
    }
  }

  .policy-text {
    margin: auto;
    width: 340px;
    p {
      margin: 20px auto;
    }
    @media ${DEVICE.xs} {
      width: 708px;
    }

    @media ${DEVICE.md} {
      width: 670px;
    }

    a {
      text-decoration: underline;
    }
  }
`
