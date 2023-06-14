import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const VideoScrollStyles = styled.section`
  position: relative;
  width: 100%;
  margin: 1rem 0;

  .scroll-video-container {
    position: relative;
    width: 100%;
    height: 100%;

    .video-pin {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`
