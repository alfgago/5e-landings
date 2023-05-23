import { useEffect, useState } from "react"

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState(false)

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    let ticking = false

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (st > lastScrollTop) {
            setScrollDir(true)
          } else if (st < lastScrollTop) {
            setScrollDir(false)
          }
          lastScrollTop = st
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollDir
}

export default useScrollDirection
