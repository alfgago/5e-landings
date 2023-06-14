import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const BannerStyles = styled.section`
  position: relative;
  min-height: 75vh;
  padding: 4rem 0;
  margin-bottom: 4rem;
  h1 {
    height: 0;
    overflow: hidden;
  }

  .flex {
    position: relative;
    display: flex;
    min-height: 75vh;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  .copy {
    position: relative;
    top: 4rem;

    strong {
      position: relative;
      display: inline-block;
      padding: 0 0.5rem;
      font-weight: 400;
      margin-left: 0.25rem;
      span {
        position: relative;
      }
      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.3rem;
        background: #ff2600;
      }
    }
  }

  a {
    position: absolute;
    bottom: -4rem;
    right: 0;
    color: #ff2600;
    font-size: 3rem;
    transition: 0.5s ease all;
    text-shadow: 0 0 15px rgba(255, 38, 0, 0);

    &:hover {
      text-shadow: 0 0 15px rgba(255, 38, 0, 1);
    }
  }

  #mirror-bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`
