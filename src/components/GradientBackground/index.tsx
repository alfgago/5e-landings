/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-rest-params */
// @ts-nocheck
import { useEffect, useState } from "react"

import { Gradient } from "@/utils/GradientEffect/gradient"

import { GradientBackgroundStyles } from "./GradientBackgroundStyles"

const GradientBackground = ({
  className = "",
  customCanvas = "gradient-canvas",
  color1 = "#0047FF",
  color2 = "#B175FF",
  color3 = "#009F67",
}) => {
  const [initiated, setInitiated] = useState(false)

  useEffect(() => {
    if (window.gradient) {
      window.gradient.forceStop()
    }
    setInitiated(true)
  }, [])

  useEffect(() => {
    if (initiated) {
      const colors = [color1, color2, color3]

      window.gradient = new Gradient()
      window.gradient.colorSet = colors
      window.gradient.initGradient("#" + customCanvas)
    }
  }, [initiated])

  return (
    <GradientBackgroundStyles className={className} id="grad-container">
      <canvas id={customCanvas} data-transition-in />
    </GradientBackgroundStyles>
  )
}

export default GradientBackground
