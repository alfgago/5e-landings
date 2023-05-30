import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const MoreFromStyles = styled.section`
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

    @media ${DEVICE.xs} {
      height: 800px;
      bottom: -108px;
    }

    @media ${DEVICE.md} {
      height: 996px;
      bottom: -160px;
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

  .college-mental-health {
    background: radial-gradient(
      153.43% 50.96% at 50% 49.12%,
      #0047ff 0%,
      rgba(0, 35, 125, 0.71) 34.38%,
      rgba(20, 130, 255, 0.22) 65.62%,
      rgba(255, 255, 255, 0) 100%
    );

    @media ${DEVICE.md} {
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        #0047ff 0%,
        rgba(0, 35, 125, 0.71) 34.38%,
        rgba(20, 130, 255, 0.22) 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .equity-access {
    background: radial-gradient(
      153.43% 50.96% at 50% 49.12%,
      #007148 0%,
      rgba(0, 72, 47, 0.71) 34.38%,
      rgba(0, 159, 103, 0.22) 65.62%,
      rgba(255, 255, 255, 0) 100%
    );

    @media ${DEVICE.md} {
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        #007148 0%,
        rgba(0, 72, 47, 0.71) 34.38%,
        rgba(0, 159, 103, 0.22) 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .human-flourishing {
    background: radial-gradient(
      153.43% 50.96% at 50% 49.12%,
      #ffcf24 0%,
      rgba(160, 101, 0, 0.71) 34.38%,
      rgba(230, 157, 0, 0.22) 65.62%,
      rgba(255, 255, 255, 0) 100%
    );

    @media ${DEVICE.md} {
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        #ffcf24 0%,
        rgba(160, 101, 0, 0.71) 34.38%,
        rgba(230, 157, 0, 0.22) 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .perspectives {
    background: radial-gradient(
      153.43% 50.96% at 50% 49.12%,
      #7341e0 0%,
      rgba(78, 21, 202, 0.71) 34.38%,
      rgba(177, 117, 255, 0.22) 65.62%,
      rgba(255, 255, 255, 0) 100%
    );

    @media ${DEVICE.md} {
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        #7341e0 0%,
        rgba(78, 21, 202, 0.71) 34.38%,
        rgba(177, 117, 255, 0.22) 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }

  .teaching-learning {
    background: radial-gradient(
      153.43% 50.96% at 50% 49.12%,
      #d43500 0%,
      rgba(244, 98, 1, 0.71) 34.38%,
      rgba(214, 125, 0, 0.22) 65.62%,
      rgba(255, 255, 255, 0) 100%
    );

    @media ${DEVICE.md} {
      background: radial-gradient(
        145.3% 47.82% at -2.64% 53.58%,
        #d43500 0%,
        rgba(244, 98, 1, 0.71) 34.37%,
        rgba(214, 125, 0, 0.22) 65.62%,
        rgba(255, 255, 255, 0) 100%
      );
    }
  }
`
