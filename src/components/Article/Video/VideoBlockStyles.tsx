import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const VideoBlockStyles = styled.div`
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;

  @media ${DEVICE.xs} {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .videoContainer {
    max-width: 340px;
    height: 100%;
    margin: auto;

    @media ${DEVICE.xs} {
      max-width: 708px;
    }

    @media ${DEVICE.md} {
      max-width: 670px;
    }
  }

  .iframeContainer {
    width: 100%;
    height: 225px;

    @media ${DEVICE.xs} {
      height: 468px;
    }

    @media ${DEVICE.md} {
      height: 443px;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
  .caption {
    .wp-block-embed {
      margin: 0;
    }
    .wp-block-embed__wrapper {
      display: none;
    }
    .wp-element-caption {
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      margin-top: 10px;

      @media ${DEVICE.md} {
        margin-top: 15px;
      }
    }
  }
`
