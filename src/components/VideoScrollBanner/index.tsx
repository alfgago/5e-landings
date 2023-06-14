import { useEffect, useRef, useState } from "react"
import { useTimeout, useWindowSize } from "usehooks-ts"

import { VideoScrollStyles } from "./VideoScrollStyles"

function getCurrentFrame(folder: string, prefix: string, index: any) {
  return `/${folder}/${prefix}${index.toString().padStart(4, "0")}.webp`
}

const ImageCanvas = ({
  scrollHeight,
  scrollStart,
  numFrames,
  width,
  height,
  folder = "video-frames",
  prefix = "",
}: any) => {
  const canvasRef = useRef(null)
  const [images, setImages] = useState([])
  const [frameIndex, setFrameIndex] = useState(0)

  function preloadImages() {
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image()
      const imgSrc = getCurrentFrame(folder, prefix, i)
      img.src = imgSrc
      setImages((prevImages) => [...prevImages, img])
    }
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY ?? 0.1

    const scrollFraction =
      1 - (scrollPosition - scrollStart) / (scrollHeight - scrollStart)

    let index = Math.min(numFrames - 1, Math.ceil(scrollFraction * numFrames))

    if (index > numFrames) {
      index = numFrames
    }

    if (index <= 0) {
      index = 1
    }

    setFrameIndex(index)
  }

  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d")
    const windowWidth = window.innerWidth
    context.canvas.width = windowWidth
    context.canvas.height = height
  }

  const drawImageProp = (ctx: any, img: any) => {
    const windowWidth = window.innerWidth

    const imgRatio = img.height / img.width
    const winRatio = height / windowWidth
    if (imgRatio > winRatio) {
      const h = windowWidth * imgRatio
      ctx.drawImage(img, 0, (height - h) / 2, windowWidth, h)
    }
    if (imgRatio < winRatio) {
      const w = (windowWidth * winRatio) / imgRatio
      ctx.drawImage(img, (windowWidth - w) / 2, 0, w, height)
    }
  }

  useEffect(() => {
    preloadImages()
    renderCanvas()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [width])

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return
    }

    const context = canvasRef.current.getContext("2d")
    let requestId = 0

    const render = () => {
      const img = images[frameIndex] ? images[frameIndex] : images[numFrames]
      drawImageProp(context, img)
      requestId = requestAnimationFrame(render)
    }

    render()

    return () => cancelAnimationFrame(requestId)
  }, [frameIndex, images])

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} />
    </div>
  )
}

const VideoScrollBanner = ({ description, writtenBy }: any) => {
  const [progress, setCurrentProgress] = useState(0)
  const [distanceFromTop, setDistanceFromTop] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [minScroll, setMinScroll] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const [render, setRender] = useState(false)

  const { width, height } = useWindowSize()
  const bannerHeight = height / 2

  const showRender = () => setRender(true)
  useTimeout(showRender, 500)

  useEffect(() => {
    const cont = document.querySelector(".scroll-video-container")

    const containerHeight = cont.offsetHeight
    setContainerHeight(containerHeight)
    const rect = cont.getBoundingClientRect()
    const distanceFromTop = rect.top + window.pageYOffset

    setDistanceFromTop(distanceFromTop)
    let min = distanceFromTop - window.innerHeight + 80
    min = min > 0 ? min : 0.1
    const max = containerHeight + distanceFromTop
    setMinScroll(min)
    setMaxScroll(max)
  }, [render, width])

  useEffect(() => {
    if (minScroll && maxScroll) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY ?? 0.1
        const progress =
          1 - (scrollPosition - minScroll) / (maxScroll - minScroll)
        setCurrentProgress(progress * 100)
      }

      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [maxScroll, minScroll])

  return (
    <VideoScrollStyles style={{ height: bannerHeight }}>
      <div
        className={
          "scroll-video-container " + (progress < 100 ? "is-fixed" : "")
        }
        attr-progress={progress}
      >
        <div id="video-pin">
          {render && maxScroll > 0 ? (
            <ImageCanvas
              scrollHeight={maxScroll}
              scrollStart={minScroll}
              width={width}
              height={containerHeight}
              numFrames={100}
              folder="video-frames"
              prefix=""
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </VideoScrollStyles>
  )
}
export default VideoScrollBanner
