import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const LPContentStyles = styled.section`
  position: relative;
  margin: 12rem 0;

  &:before {
    content: "";
    z-index: 0;
    position: absolute;
    top: 0;
    left: 55%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 38, 0, 0.5) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  }

  .flex {
    position: relative;
    display: flex;
    min-height: 90vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  .side {
    position: absolute;
    display: inline-block;
    left: 65%;
    top: -2rem;
    padding: 0 0.5rem;
    word-spacing: 0.5rem;
    font-size: 1.7rem;
    transform-origin: left;
    transform: rotate(90deg);
    white-space: nowrap;
    span {
      position: relative;
      z-index: 1;
    }
    &:before {
      content: "";
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2.3rem;
      background: #ff2600;
    }

    .boxes {
      position: absolute;
      top: 0;
      left: 0;
      height: 1px;
      width: 1px;
      transform-origin: center;
      transform: rotate(-90deg);
      .boxes-cont {
        position: absolute;
        top: 0;
        left: -11.5rem;
        height: 28rem;
        width: 28rem;
      }

      .sq {
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid rgba(255, 38, 0, 0.3);
        width: 33%;
        height: 33%;

        &:after {
          content: "";
          z-index: 0;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 38, 0, 0.3) 0%,
            rgba(255, 38, 0, 0) 50%
          );
        }

        &.sq1 {
          left: calc(33% + 2.2rem);
          border-bottom: 0;
        }

        &.sq2 {
          top: 33%;
          border-bottom: 0;
        }

        &.sq3 {
          top: 33%;
          left: calc(33% + 2.2rem);
          width: 66%;

          &:after {
            content: "";
            z-index: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              -90deg,
              rgba(255, 38, 0, 0.3) 0%,
              rgba(255, 38, 0, 0) 50%
            );
          }
        }

        &.sq4 {
          top: 66%;
          left: -33%;
          width: 66%;
        }

        &.sq5 {
          top: 66%;
          left: calc(33% + 2.2rem);
          border-top: 0;
        }
      }
    }
  }

  .pride {
    .h2 {
      display: block;
      margin-top: -1rem;
    }
  }

  strong {
    position: relative;
    display: inline;
    padding: 0 0.5rem;
    padding-bottom: 0.25rem;
    margin-left: 0.25rem;
    background: #ff2600;
    font-weight: 400;
    span {
      position: relative;
    }
  }
`
