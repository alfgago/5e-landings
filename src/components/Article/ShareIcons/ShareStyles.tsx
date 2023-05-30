import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const ShareContainer = styled.section`
  margin-top: 50px;

  @media ${DEVICE.xs} {
    margin-top: 90px;
  }

  .share-icons {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    max-width: 340px;
    gap: 11px;

    @media ${DEVICE.xs} {
      max-width: 708px;
      flex-direction: row;
    }

    @media ${DEVICE.md} {
      max-width: 670px;
    }

    .date {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
    }
    .icons-container {
      display: flex;
      gap: 27px;
      .icons {
        display: flex;
        gap: 15px;
        align-items: center;
        img {
          height: 12px;
          width: auto;
          cursor: pointer;
        }
      }
    }
  }
`
