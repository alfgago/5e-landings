/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react"

import { Canvas } from "@react-three/fiber"

import Scene from "./Scene"

const MirrorBackground = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 1000)

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="mirror-bg">
      {loading && (
        <Canvas shadowMap concurrent camera={{ position: [0, 0, 5], fov: 70 }}>
          <color attach="background" args={["#000"]} />
          <Scene />
          <ambientLight intensity={0.4} />
        </Canvas>
      )}
    </div>
  )
}

export default MirrorBackground
