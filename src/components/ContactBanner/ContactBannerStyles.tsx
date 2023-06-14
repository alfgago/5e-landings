import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const ContactBannerStyles = styled.section`
  position: relative;
  margin: 6rem 0;
  text-align: center;

  .shout {
    margin-bottom: 6rem;
    span {
      display: block;

      &.h2 {
        margin-top: -0.5rem;
      }
    }
  }

  .down {
    margin-bottom: 6rem;
  }

  h2 {
    color: #ff2600;
    font-size: 4rem;
    font-weight: 300;
    margin-bottom: 3rem;
  }

  form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
    margin: auto;
    max-width: 40rem;
    text-align: left;
    p {
      display: block;
      margin: 1rem 0;
      padding: 0 1rem;
      width: 100%;

      @media ${DEVICE.md} {
        width: 50%;
      }

      label {
        display: block;
        input,
        textarea {
          width: 100%;
          padding: 0 1rem;
          font-size: 1rem;
          line-height: 1.75rem;
        }
        textarea {
          height: 5.5rem;
        }
        span {
          padding: 0 1rem;
        }
      }

      &.submit-field {
        position: relative;
        @media ${DEVICE.md} {
          position: absolute;
          bottom: 0.75rem;
          left: 0;
        }

        input {
          display: block;
          width: 100%;
          padding: 0 1rem;
          font-size: 1rem;
          line-height: 1.75rem;
          height: 1.75rem;
          border: 2px solid #ff2600;
          background: #000;
          color: #ff2600;
          font-weight: 400;
          cursor: pointer;
          transition: 0.5s ease all;
          box-shadow: 0 0 15px rgba(255, 38, 0, 0);

          &:hover {
            box-shadow: 0 0 15px rgba(255, 38, 0, 1);
          }
        }
      }
    }
  }
`
