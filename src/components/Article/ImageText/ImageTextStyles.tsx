import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const ImageTextStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
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

  .image {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 340px;

    @media ${DEVICE.xs} {
      width: 50%;
      max-width: 339px;
    }

    @media ${DEVICE.md} {
      max-width: 495px;
    }

    @media ${DEVICE.lg} {
      max-width: 552px;
    }

    img {
      width: 100%;
      height: 370px;
      max-height: 600px;
      max-width: 552px;
      object-fit: cover;

      @media ${DEVICE.xs} {
        width: 339px;
        height: 368px;
      }

      @media ${DEVICE.md} {
        width: 495px;
        height: 538px;
      }

      @media ${DEVICE.lg} {
        width: 552px;
        height: 600px;
      }
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      margin-top: 10px;

      @media ${DEVICE.md} {
        margin-top: 15px;
      }
    }
  }

  .text {
    width: 100%;
    max-width: 339px;

    @media ${DEVICE.xs} {
      width: 50%;
      max-width: 495px;
    }

    @media ${DEVICE.lg} {
      max-width: 552px;
    }

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 27px;
      padding: 0;
      margin: 0;

      @media ${DEVICE.xs} {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }
`
