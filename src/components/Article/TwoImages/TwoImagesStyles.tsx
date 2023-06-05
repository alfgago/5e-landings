import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const TwoImagesStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media ${DEVICE.xs} {
    flex-direction: row;
    gap: 30px;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  @media ${DEVICE.lg} {
    gap: 40px;
  }

  .image1,
  .image2 {
    display: flex;
    flex-direction: column;

    img {
      object-fit: cover;
      width: 340px;
      height: 225px;

      @media ${DEVICE.xs} {
        width: 339px;
        height: 224px;
      }

      @media ${DEVICE.md} {
        width: 495px;
        height: 327px;
      }

      @media ${DEVICE.lg} {
        width: 670px;
        height: 443px;
      }

      @media ${DEVICE.xl} {
        width: 900px;
        height: 595px;
      }
    }

    span {
      font-family: "Monument Grotesk", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      margin-top: 10px;

      @media ${DEVICE.lg} {
        margin-top: 15px;
      }
    }
  }
`
