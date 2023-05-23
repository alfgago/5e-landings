import styled from "styled-components"

import { COLORS, DEVICE } from "@/styles/variables"

export const GradientBackgroundStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  canvas {
    position: absolute;
    top: 0;
    left: -10%;
    height: 100%;
    width: 120%;
    opacity: 1;
    z-index: 0;
    filter: blur(10px);

    &#gradient-canvas {
      z-index: 1;
      --gradient-color-1: #fb00fb;
      --gradient-color-2: #1415ff;
      --gradient-color-3: #00ecff;
      --gradient-color-4: #000000;
      opacity: 0.9;
    }
  }
`
