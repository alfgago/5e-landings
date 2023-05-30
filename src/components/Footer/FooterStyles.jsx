import styled from "styled-components"

import { DEVICE, COLORS } from "@/styles/variables"

export const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  color: ${COLORS.black};
  border-top: 2px solid ${COLORS.black};
  padding: 20px 0;
  margin-top: 120px;

  .flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media ${DEVICE.xs} {
    margin-top: 160px;
    padding: 24px 0;
    justify-content: space-between;
    flex-direction: row;
    text-align: left;
  }

  .logo {
    display: block;
    width: 271px;
    height: 44px;
  }

  .footer-menu {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-bottom: 10px;
      @media ${DEVICE.xs} {
        margin-bottom: 20px;
      }
    }
  }

  .publishers {
    display: flex;
    gap: 21px;
    margin-top: 21px;
    @media ${DEVICE.xs} {
      gap: 38px;
    }

    img {
      max-width: 200px;
    }
  }

  .bottom {
    margin-top: 48px;
    .bottom-menu {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @media ${DEVICE.xs} {
        width: auto;
        gap: 43px;
        justify-content: initial;
      }
    }
    .siteby {
      a {
        border-bottom: 1px solid #000;
      }
    }
  }

  @media ${DEVICE.maxxs} {
    .col {
      order: 0;
      &.footer-menu {
        order: 1;
        margin-top: 30px;
      }
      &.social-links {
        order: 2;
        margin-top: 30px;
      }
      &.published-by {
        order: 3;
        margin-top: 50px;
        img {
          max-width: 160px;
        }
      }
    }

    .bottom {
      position: relative;
      .bottom-menu {
        justify-content: left;
        gap: 36px;
      }
      .siteby {
        position: absolute;
        right: 0;
      }
      &.monument.s {
        font-size: 12px;
      }
    }
  }
`
