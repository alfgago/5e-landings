import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const ListingStyles = styled.section`
  .posts-list {
    width: 100%;

    @media ${DEVICE.xs} {
      width: calc(100% + 40px);
      display: flex;
      flex-wrap: wrap;
    }

    .article {
      width: 100%;
      margin-top: 60px;
      @media ${DEVICE.xs} {
        width: 33.333%;
        margin-top: 80px;
        padding-right: 40px;
      }
      @media ${DEVICE.md} {
        margin-top: 120px;
      }
    }

    .featured {
      width: 100%;
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
          img {
            max-width: 100%;
            width: auto;
          }
          @media ${DEVICE.xs} {
            max-width: 100%;
          }

          @media ${DEVICE.md} {
            max-width: 495px;
          }

          @media ${DEVICE.lg} {
            max-width: 670px;
          }

          @media ${DEVICE.xl} {
            max-width: 900px;
          }
        }
      }

      &.index-3 {
        .post {
          .post-image {
            order: -1;
          }
        }
      }
    }
  }
`
