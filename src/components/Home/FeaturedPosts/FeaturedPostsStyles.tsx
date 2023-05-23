import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const FeaturedPostsStyles = styled.section`
  position: relative;
  text-align: center;
  padding-top: 30px;

  .posts-column {
    width: 100%;

    @media ${DEVICE.xs} {
      display: flex;
      gap: 30px;
    }

    @media ${DEVICE.md} {
      display: block;
      width: 233px;
    }

    @media ${DEVICE.lg} {
      width: 315px;
    }

    @media ${DEVICE.xl} {
      width: 430px;
    }
  }

  .post {
    display: block;
    width: 100%;
    margin-bottom: 60px;
    img {
      width: 100%;
    }

    .post-content {
      padding: 0 10px;
    }

    h3 {
      margin-bottom: 10px;
    }

    @media ${DEVICE.xs} {
      margin-bottom: 30px;
    }

    @media ${DEVICE.lg} {
      margin-bottom: 40px;
    }

    &.highlighted {
      width: auto;
      margin-left: -25px;
      margin-right: -25px;

      h3 {
        margin-bottom: 15px;
      }

      @media ${DEVICE.xs} {
        margin-left: -30px;
        margin-right: -30px;
        margin-bottom: 60px;
      }

      @media ${DEVICE.md} {
        width: 495px;
        margin: 0;
      }

      @media ${DEVICE.lg} {
        width: 670px;
      }

      @media ${DEVICE.xl} {
        width: 900px;
      }
    }
  }

  .post-categories {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .content {
    @media ${DEVICE.xs} {
      display: flex;
      flex-wrap: wrap;
    }

    @media ${DEVICE.md} {
      flex-wrap: nowrap;
      gap: 30px;
      .highlighted {
        order: 2;
      }

      .col-0 {
        order: 1;
      }

      .col-1 {
        order: 3;
      }
    }
    @media ${DEVICE.lg} {
      gap: 40px;
    }
  }
`
