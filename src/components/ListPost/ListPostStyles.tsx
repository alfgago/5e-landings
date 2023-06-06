import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const ListPostStyles = styled.div`
  position: relative;
  display: block;
  width: 100%;

  img {
    transition: 0.5s ease all;
    transform: scale(1);
    width: 100%;

    &.reg {
      @media ${DEVICE.xs} {
        width: 216px;
        height: 143px;
      }

      @media ${DEVICE.md} {
        width: 320px;
        height: 212px;
      }

      @media ${DEVICE.lg} {
        width: 433px;
        height: 287px;
      }

      @media ${DEVICE.xl} {
        width: 586px;
        height: 390px;
      }
    }
  }

  h3 {
    transition: 0.5s ease all;
    margin-bottom: 10px;
    opacity: 1;
  }

  .post {
    display: block;
    &:hover {
      h3 {
        opacity: 0.8;
      }
      img {
        transform: scale(1.01);
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

  .post-content {
    text-align: center;
    padding: 0 10px;
  }

  .post-excerpt {
    p {
      margin: 0;
    }
  }
`
