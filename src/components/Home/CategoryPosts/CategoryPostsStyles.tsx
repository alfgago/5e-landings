import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const CategoryPostsStyles = styled.section`
  position: relative;
  text-align: center;
  padding-top: 30px;

  .content {
    > h2 {
      margin-bottom: 72px;

      @media ${DEVICE.xs} {
        margin-bottom: 40px;
      }

      @media ${DEVICE.md} {
        margin-bottom: 60px;
      }
    }
  }

  .see-all {
    position: absolute;
    top: 55px;
    left: 50%;
    translate: -50%;
    display: inline-block;
    border-bottom: 1px solid #000;

    @media ${DEVICE.xs} {
      position: absolute;
      top: 8px;
      left: auto;
      translate: none;
      right: 30px;
    }

    @media ${DEVICE.md} {
      top: 12px;
    }

    @media ${DEVICE.xl} {
      right: 80px;
    }
  }

  .posts-row {
    display: block;

    .post {
      margin-bottom: 60px;
    }

    @media ${DEVICE.xs} {
      display: flex;
      gap: 30px;

      .post {
        margin-bottom: 0;
      }
    }

    @media ${DEVICE.lg} {
      gap: 40px;
    }
  }
`
