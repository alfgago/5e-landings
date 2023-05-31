import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

interface backgroundColors {
  color1: string
  color2: string
  color3: string
}

export const MoreFromStyles = styled.section<backgroundColors>`
  position: relative;
  margin-top: 113px;

  @media ${DEVICE.xs} {
    margin-top: 152px;
  }

  @media ${DEVICE.md} {
    margin-top: 264px;
  }

  @media ${DEVICE.lg} {
    margin-top: 248px;
  }

  .background {
    position: absolute;
    width: 100%;
    height: 700px;
    bottom: 380px;
    left: 0;
    z-index: -1;
    background: radial-gradient(
      153.43% 50.96% at 50% 49.12%,
      ${(props) => props.color1} 0%,
      ${(props) => props.color2 + "b5"} 34.38%,
      ${(props) => props.color3 + "38"} 65.62%,
      rgba(255, 255, 255, 0) 100%
    );

    @media ${DEVICE.xs} {
      height: 800px;
      bottom: -108px;
    }

    @media ${DEVICE.md} {
      height: 996px;
      bottom: -180px;
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        ${(props) => props.color1} 0%,
        ${(props) => props.color2 + "b5"} 34.37%,
        ${(props) => props.color3 + "38"} 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    @media ${DEVICE.lg} {
      height: 1200px;
    }

    @media ${DEVICE.xl} {
      bottom: -110px;
    }
  }

  .more-from-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    @media ${DEVICE.xs} {
      gap: 60px;
    }

    @media ${DEVICE.md} {
      flex-direction: row;
      align-items: flex-start;
      gap: 88px;
    }

    @media ${DEVICE.lg} {
      gap: 159px;
    }

    @media ${DEVICE.xl} {
      gap: 194px;
    }

    .title {
      color: ${COLORS.white};
      font-weight: 400;
      font-size: 32px;
      line-height: 34px;
      letter-spacing: -0.01em;

      @media ${DEVICE.xs} {
        font-size: 40px;
        line-height: 44px;
      }
    }

    .posts {
      display: flex;
      flex-direction: column;
      gap: 60px;

      @media ${DEVICE.xs} {
        gap: 30px;
        flex-direction: row;
      }

      @media ${DEVICE.md} {
        gap: 40px;
      }

      .article {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        @media ${DEVICE.xs} {
          width: 339px;
        }

        @media ${DEVICE.md} {
          width: 319px;
        }

        @media ${DEVICE.lg} {
          width: 433px;
        }

        @media ${DEVICE.xl} {
          width: 586px;
        }

        .image {
          position: relative;
          width: 100%;
          height: 226px;

          @media ${DEVICE.xs} {
            height: 224px;
          }

          @media ${DEVICE.md} {
            height: 213px;
          }

          @media ${DEVICE.lg} {
            height: 287px;
          }

          @media ${DEVICE.xl} {
            height: 388px;
          }

          img {
            object-fit: cover;
          }
        }

        .post-categories {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 15px;
        }

        h2 {
          font-weight: 300;
          font-size: 32px;
          line-height: 34px;
          text-align: center;
          letter-spacing: -0.01em;
          margin-top: 10px;
          @media ${DEVICE.xs} {
            font-size: 28px;
            line-height: 32px;
          }

          @media ${DEVICE.md} {
            font-size: 32px;
            line-height: 35px;
          }
        }

        .post-excerpt p {
          font-weight: 300;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          margin: 0;
          margin-top: 10px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }
    }
  }
`
