import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const BannerStyles = styled.section`
  .title {
    position: relative;
    color: #fff;
    height: 600px;

    .content {
      padding: 40px 0 60px 0;
      @media ${DEVICE.xs} {
        padding: 80px 0 60px 0;
      }

      @media ${DEVICE.md} {
        padding: 120px 0 100px 0;
      }
    }
    h1 {
      margin-bottom: 10px;
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 66%;
      z-index: 2;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .content {
    position: relative;
    z-index: 2;
    text-align: center;
    @media ${DEVICE.xs} {
      text-align: center;
    }
  }

  .hero-post {
    margin-top: -375px;
    @media ${DEVICE.md} {
      margin-top: -230px;
    }
    .post {
      @media ${DEVICE.md} {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .post-content {
        max-width: 100%;
        @media ${DEVICE.md} {
          max-width: 495px;
        }

        @media ${DEVICE.lg} {
          max-width: 522px;
        }
      }

      .post-image {
        order: 2;
        max-width-100%;
        img {
          max-width: 100%;
          width: auto;
        }
        @media ${DEVICE.xs} {
          width: 100%;
        }

        @media ${DEVICE.md} {
          width: 495px;
        }

        @media ${DEVICE.lg} {
          width: 670px;
        }

        @media ${DEVICE.xl} {
          width: 900px;
        }
      }
    }
  }
`
