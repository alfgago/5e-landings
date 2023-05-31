import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const Container = styled.section`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: auto;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      182.91deg,
      rgba(255, 255, 255, 0) -20.77%,
      rgba(255, 255, 255, 0) -20.76%,
      rgba(255, 255, 255, 0.2) 1.07%,
      rgba(255, 255, 255, 0.52) 27.98%,
      rgba(255, 255, 255, 0.9) 66.31%,
      #ffffff 97.46%
    );
  }

  .header {
    padding-top: 40px;
    padding-bottom: 85px;
    position: relative;
    z-index: 3;

    @media ${DEVICE.xs} {
      padding-top: 80px;
      padding-bottom: 150px;
    }

    @media ${DEVICE.md} {
      padding: 120px 0 150px;
      padding-top: 120px;
      padding-bottom: 150px;
    }

    h1 {
      text-align: center;
      margin: 0 auto;
      @media ${DEVICE.xs} {
        font-size: 100px;
        line-height: 110px;
      }
    }

    p {
      text-align: center;
      margin: auto;
      margin-top: 20px;
      max-width: 340px;

      @media ${DEVICE.xs} {
        max-width: 585px;
        margin-top: 10px;
      }

      @media ${DEVICE.md} {
        max-width: 670px;
      }
    }

    &.contact {
      h1 {
        max-width: 340px;
        @media ${DEVICE.xs} {
          max-width: 520px;
        }
        @media ${DEVICE.md} {
          max-width: 850px;
        }
      }

      p {
        margin-top: 20px;

        @media ${DEVICE.xs} {
          margin-top: 33px;
          font-size: 20px;
          line-height: 30px;
        }

        @media ${DEVICE.md} {
          margin-top: 10px;
        }
      }
    }
  }
`
