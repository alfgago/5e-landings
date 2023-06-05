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
    img {
      object-fit: cover;
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
      margin: 10px auto 15px;
      max-width: 100%;

      @media ${DEVICE.xs} {
        margin: 20px auto;
        font-size: 70px;
        line-height: 75px;
      }

      @media ${DEVICE.md} {
        font-size: ${(props) =>
          props.highlight === "small" ? "54px" : "80px"};
        line-height: ${(props) =>
          props.highlight === "small" ? "58px" : "82px"};
        margin: ${(props) =>
          props.highlight === "small" ? "20px auto" : "15px auto 20px"};
      }

      @media ${DEVICE.lg} {
        max-width: 1144px;
      }
    }

    .post-excerpt {
      text-align: center;
      font-size: 22px;
      line-height: 26px;
      margin: auto;
      max-width: 100%;

      @media ${DEVICE.xs} {
        font-size: 26px;
        line-height: 30px;
        max-width: 522px;
      }

      @media ${DEVICE.md} {
        max-width: 669px;
        margin: ${(props) => (props.highlight === "small" ? "0" : "auto")};
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

  .wp-content {
    & > *:first-child {
      margin-top: 30px;

      @media ${DEVICE.xs} {
        margin-top: 20px;
      }
    }

    h1,
    h2,
    h3,
    p,
    ul,
    ol,
    .wp-block-embed {
      max-width: 340px;

      @media ${DEVICE.xs} {
        max-width: 708px;
      }

      @media ${DEVICE.md} {
        max-width: 670px;
      }
    }

    h2,
    h3 {
      font-family: "Bradford LL", sans-serif;
      margin: auto;
      margin-bottom: 20px;
      font-weight: 400;
      font-size: 26px;
      line-height: 28px;

      @media ${DEVICE.xs} {
        font-size: 28px;
        line-height: 32px;
      }

      @media ${DEVICE.lg} {
        font-size: 32px;
        line-height: 35px;
      }
    }

    p,
    ul,
    ol {
      font-family: "Bradford LL", sans-serif;
      font-weight: 300;
      font-size: 18px;
      line-height: 27px;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 20px;

      @media ${DEVICE.xs} {
        font-size: 20px;
        line-height: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }

    ul {
      padding-left: 45px;
    }

    ol {
      padding-left: 52px;
    }

    .wp-block-embed {
      margin: 40px auto;

      @media ${DEVICE.xs} {
        margin: 60px auto;
      }

      iframe {
        width: 100%;
        height: 225px;

        @media ${DEVICE.xs} {
          height: 468px;
        }

        @media ${DEVICE.md} {
          height: 443px;
        }
      }

      figcaption {
        font-family: "Monument Grotesk", sans-serif;
        margin-top: 10px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;

        @media ${DEVICE.lg} {
          margin-top: 15px;
        }
      }
    }

    .wp-block-pullquote {
      margin: 40px auto;
      text-align: center;

      @media ${DEVICE.xs} {
        margin: 60px auto;
      }

      blockquote {
        margin: 0;
      }

      p {
        font-weight: 300;
        font-size: 28px;
        line-height: 34px;
        text-align: center;
        letter-spacing: -0.01em;
        max-width: 340px;
        margin-bottom: 20px;
        padding: 0;

        @media ${DEVICE.xs} {
          font-size: 48px;
          line-height: 56px;
          max-width: 708px;
          margin-bottom: 30px;
        }

        @media ${DEVICE.md} {
          max-width: 906px;
        }
      }

      cite {
        font-weight: 300;
        font-size: 26px;
        font-style: normal;
        line-height: 30px;
        text-align: center;
        color: #000000;
        display: inline-block;
      }
    }

    .wp-block-image {
      margin: 60px auto;
      max-width: 340px;

      @media ${DEVICE.xs} {
        max-width: 708px;
      }

      @media ${DEVICE.md} {
        max-width: 670px;
      }

      .wp-element-caption {
        font-family: "Monument Grotesk", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        margin-top: 10px;

        @media ${DEVICE.md} {
          margin-top: 15px;
        }
      }
    }
  }
`
