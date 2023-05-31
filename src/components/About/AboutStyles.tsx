import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const AboutStyles = styled.section`
  .team-members-container {
    .lw-team:not(:first-child) .team-name {
      margin-top: 80px;

      @media ${DEVICE.xs} {
        margin-top: 120px;
      }
    }

    .team-name {
      margin-bottom: 30px;

      @media ${DEVICE.xs} {
        margin-bottom: 60px;
      }

      h2 {
        font-size: 32px;
        line-height: 34px;
        font-weight: 400;
        text-align: center;
        letter-spacing: -0.01em;

        @media ${DEVICE.xs} {
          font-size: 40px;
          line-height: 44px;
        }
      }
    }

    .cards-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 60px 0;
      @media ${DEVICE.xs} {
        grid-template-columns: repeat(2, 339px);
        grid-gap: 80px 30px;
      }

      @media ${DEVICE.md} {
        grid-template-columns: repeat(3, 320px);
      }

      @media ${DEVICE.lg} {
        grid-template-columns: repeat(4, 315px);
        grid-gap: 80px 40px;
      }

      @media ${DEVICE.xl} {
        grid-template-columns: repeat(4, 430px);
      }

      .card {
        img {
          object-fit: cover;
          width: 100%;
        }

        h3 {
          font-size: 26px;
          line-height: 28px;
          font-weight: 400;
          font-style: normal;
          margin-top: 20px;
          margin-bottom: 10px;

          @media ${DEVICE.xs} {
            font-size: 28px;
            line-height: 32px;
          }

          @media ${DEVICE.lg} {
            font-size: 32px;
            line-height: 35px;
          }
        }

        span {
          font-family: "Monument Grotesk", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;

          @media ${DEVICE.xs} {
            font-size: 20px;
            line-height: 24px;
          }
        }

        p {
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          line-height: 27px;
          margin-top: 15px;
          margin-bottom: 0;
          @media ${DEVICE.xs} {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
    }
  }
`
