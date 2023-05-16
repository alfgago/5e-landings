import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const KeepLearningStyles = styled.section`
  position: relative;
  padding: 170px 0;
  margin: 40px 0;

  &:after,
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 170px;
    z-index: 2;
  }

  &:before {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &:after {
    top: 0;
    bottom: auto;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  @media ${DEVICE.md} {
    padding: 300px 0;

    &:after,
    &:before {
      height: 300px;
    }
  }

  .content {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${DEVICE.lg} {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  .title {
    position: relative;
    color: #fff;
    max-width: 473px;
    text-align: center;
    margin: auto;
    @media ${DEVICE.lg} {
      text-align: left;
      margin: 0;
    }

    h2 {
      margin-bottom: 20px;

      @media ${DEVICE.md} {
        margin-bottom: 14px;
      }
    }
    .text {
      max-width: 432px;
    }
  }

  form {
    position: relative;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 340px;
    max-width: 100%;

    @media ${DEVICE.md} {
      width: auto;
      gap: 30px;
      flex-direction: row;
    }

    @media ${DEVICE.lg} {
      gap: 40px;
      margin-top: 0;
    }

    input {
      background: #ffffff;
      border: 1px solid #ffffff;
      border-radius: 65px;
      width: 100%;
      line-height: 50px;
      padding: 0 22px;
      @media ${DEVICE.md} {
        width: 433px;
      }
    }
    button {
      background: #000000;
      border-radius: 41px;
      color: #fff;
      width: 100%;
      text-align: center;
      line-height: 50px;
      border: 0;
      outline: none;
      @media ${DEVICE.md} {
        width: 197px;
      }
    }

    @media ${DEVICE.xs} {
      display: flex;
    }
  }
`
