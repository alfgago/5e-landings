import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const HeaderStyles = styled.section`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9000;
  padding: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 0;
  transition: 0.5s ease all;
  color: ${COLORS.black};
  background: ${COLORS.white};
  border-bottom: 2px solid rgba(0, 0, 0, 0.6);

  @media ${DEVICE.md} {
    padding-top: 25px;
    padding-bottom: 10px;
  }

  .main-menu {
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${DEVICE.md} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    @media ${DEVICE.maxmd} {
      .nav {
        position: fixed;
        top: 0;
        left: 0;
        transition: 0.5s ease all;
        opacity: 0;
        visibility: hidden;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: calc(100% - 58px);
        background: ${COLORS.white};
        z-index: 0;
        margin-top: 58px;

        a {
          opacity: 1;
        }

        ul {
          margin-bottom: 100px;
          li {
            margin-bottom: 22px;
            &:last-of-type {
              margin-bottom: 0;
            }
          }
          a {
            display: block;
            font-family: Bradford LL;
            font-size: 26px;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0em;
          }
        }
      }
      &.is-active {
        .nav {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    @media ${DEVICE.maxxs} {
      .nav {
        ul {
          margin-bottom: 80px;
          li {
            a {
              font-size: 22px;
              line-height: 26px;
            }
          }
        }
      }
    }
  }

  .top {
    @media ${DEVICE.md} {
      position: absolute;
      top: 25px;
      left: 0;
      width: 100%;
      z-index: 1;

      .content {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    @media ${DEVICE.md} {
      display: flex;
      gap: 40px;
    }
  }

  .top,
  nav {
    a {
      transition: 0.5s ease all;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
    }
  }

  .logo {
    display: block;
    position: relative;
    z-index: 1;
    width: 161px;
    height: 26px;
    transition: 0.5s ease all;

    @media ${DEVICE.md} {
      width: 354px;
      height: 57px;
      margin-bottom: 19px;
    }
  }

  .hamburger {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    scale: 0.6;

    .hamburger-inner,
    .hamburger-inner:after,
    .hamburger-inner:before {
      height: 3px;
    }

    @media ${DEVICE.md} {
      display: none;
    }
  }

  .nav {
    @media ${DEVICE.md} {
      transition: 0.5s ease all;
      height: 22px;
      overflow: hidden;
    }
  }

  .social-nav {
    display: flex;
    .topics {
      transition: 0.5s ease all;
      margin-right: 40px;
      opacity: 0;
      visibility: hidden;
      cursor: pointer;
      display: none;
      @media ${DEVICE.md} {
        display: block;
      }
    }
  }

  &.scrolling {
    @media ${DEVICE.md} {
      padding: 21px 0;
      .logo {
        width: 174px;
        height: 28px;
        margin-bottom: 0;
      }

      &:not(.toggle-topics) {
        .nav {
          height: 0;
          opacity: 0;
          visibility: hidden;
        }
      }
      &.toggle-topics {
        padding-bottom: 10px;
        .nav {
          margin-top: 10px;
        }
      }
      .social-nav {
        .topics {
          opacity: 0.6;
          visibility: visible;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
`
