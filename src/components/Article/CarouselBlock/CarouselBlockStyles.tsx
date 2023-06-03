import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const CarouselBlockStyles = styled.div`
  position: relative;
  max-width: 2000px;
  margin: auto;

  .swiper {
    padding-bottom: 45px;
    @media ${DEVICE.xs} {
      padding-bottom: 7px;
    }
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    width: auto;

    img {
      width: 100%;
      height: 100%;
    }

    .caption {
      display: none;
      margin-top: 10px;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;

      @media ${DEVICE.xs} {
        margin-top: 15px;
        height: 60px;
        padding-right: 100px;
      }

      @media ${DEVICE.xl} {
        margin-top: 22px;
      }
    }
  }

  .swiper-slide-active {
    .caption {
      display: block;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    bottom: 0;
    top: auto;
    height: 32px;
    @media ${DEVICE.xs} {
      bottom: 42px;
    }
  }

  .swiper-button-next {
    right: calc(47% - 22px);
    @media ${DEVICE.xs} {
      right: 17%;
    }
    @media ${DEVICE.lg} {
      right: 25.5%;
    }
  }

  .swiper-button-prev {
    left: auto;
    right: calc(47% + 22px);
    @media ${DEVICE.xs} {
      left: auto;
      right: calc(17% + 44px);
    }
    @media ${DEVICE.lg} {
      right: calc(25.5% + 44px);
    }
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: "";
    width: 32px;
    height: 32px;
    position: absolute;
  }

  .swiper-button-next:after {
    background-image: url("/assets/arrowRight.svg");
  }

  .swiper-button-prev:after {
    background-image: url("/assets/arrowLeft.svg");
  }
`
