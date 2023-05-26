import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

interface WordpressArticleProps {
  highlight: string
}

export const WordPressContentStyles = styled.section<WordpressArticleProps>`
  position: relative;
  padding-top: 18px;

  @media ${DEVICE.xs} {
    margin-top: 30px;
  }

  .small {
    @media ${DEVICE.md} {
      display: flex;
      flex-direction: row-reverse;
      gap: 30px;
    }
  }

  .article-hero-image {
    position: relative;
    width: 100%;
    height: 226px;

    @media ${DEVICE.xs} {
      height: 471px;
    }

    @media ${DEVICE.md} {
      width: ${(props) => (props.highlight === "small" ? "900px" : "100%")};
      height: ${(props) => (props.highlight === "small" ? "371px" : "480px")};
    }

    @media ${DEVICE.lg} {
      height: ${(props) => (props.highlight === "small" ? "502px" : "650px")};
    }

    @media ${DEVICE.xl} {
      height: ${(props) => (props.highlight === "small" ? "674px" : "866px")};
    }
  }

  .article-title {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .post-categories {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      margin-top: 17px;

      @media ${DEVICE.xs} {
        margin-top: 30px;
      }
    }

    h1 {
      text-align: center;
      font-size: 36px;
      line-height: 38px;
      margin: 10px 0 15px;

      @media ${DEVICE.xs} {
        margin: 20px 0;
        font-size: 70px;
        line-height: 75px;
      }

      @media ${DEVICE.md} {
        font-size: ${(props) =>
          props.highlight === "small" ? "54px" : "80px"};
        line-height: ${(props) =>
          props.highlight === "small" ? "58px" : "82px"};
        margin: ${(props) =>
          props.highlight === "small" ? "20px 0" : "15px 0 20px"};
      }
    }

    .post-excerpt {
      text-align: center;
      font-size: 22px;
      line-height: 26px;

      @media ${DEVICE.xs} {
        font-size: 26px;
        line-height: 30px;
      }

      p {
        margin: 0;
      }
    }

    .author {
      text-align: center;
      font-weight: 400;
      line-height: 22px;
      margin-top: 20px;

      @media ${DEVICE.md} {
        margin-top: ${(props) =>
          props.highlight === "small" ? "20px" : "32px"};
      }
    }
  }

  .more-from {
    position: relative;
    height: 614.4px;
    margin-top: 248px;

    .background {
      position: absolute;
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        #d43500 0%,
        rgba(244, 98, 1, 0.71) 34.37%,
        rgba(214, 125, 0, 0.22) 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
      width: 100%;
      height: 1200px;
      bottom: 0;
      left: 0;
      z-index: -1;
    }

    .title {
      color: ${COLORS.white};
      font-weight: 400;
      font-size: 40px;
      line-height: 44px;
      letter-spacing: -0.01em;
    }
  }
`
