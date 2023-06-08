/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

import { Box, Octahedron, Text, useMatcapTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { mirrorsData } from "./data"
import { ThinFilmFresnelMap } from "./ThinFilmFresnelMap"
import useLayers from "./use-layers"
import useRenderTarget from "./use-render-target"
import useSlerp from "./use-slerp"

const TEXT_PROPS = {
  fontSize: 4,
  font: "http://localhost:3000/styles/fonts/IndianStrengthPersonalUse.woff",
}

function Title({ text = "Hey there", layers, ...props }) {
  const group = useRef()
  useEffect(() => {
    group.current.lookAt(0, 0, 0)
  }, [])

  const textRef = useLayers(layers)

  return (
    <group {...props} ref={group}>
      <Text
        ref={textRef}
        name="text-panna"
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        {...TEXT_PROPS}
      >
        {text}
      </Text>
    </group>
  )
}

function Mirror({ sideMaterial, reflectionMaterial, args, layers, ...props }) {
  const ref = useLayers(layers)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001
      ref.current.rotation.z += 0.01
    }
  })

  return (
    <Box
      {...props}
      ref={ref}
      args={args}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial,
      ]}
    />
  )
}

function Mirrors({ envMap, layers, ...props }) {
  const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap())
  const sideMaterial = useRef()
  const reflectionMaterial = useRef()

  return (
    <group name="mirrors" {...props}>
      <meshLambertMaterial
        ref={sideMaterial}
        map={thinFilmFresnelMap}
        color="#AAAAAA"
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        map={thinFilmFresnelMap}
        envMap={envMap}
        color="#FFFFFF"
      />
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          layers={layers}
          {...mirror}
          name={`mirror-${index}`}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
        />
      ))}
    </group>
  )
}

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const icoGeom = new THREE.IcosahedronBufferGeometry(10)
    console.log("Icosahedron Buffer Geometry:", icoGeom)
    console.log("Vertices:", icoGeom.attributes.position.array)
    return icoGeom.attributes.position.array
  }, [])

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title
          name={"titleCopy-" + i}
          position={vertex}
          layers={layers}
          key={`vertex-${i}`}
        />
      ))}
    </group>
  )
}

function Scene() {
  const [cubeCamera, renderTarget] = useRenderTarget()
  const group = useSlerp()

  const [matcapTexture] = useMatcapTexture("C8D1DC_575B62_818892_6E747B")

  return (
    <>
      <group name="sceneContainer" ref={group}>
        <Octahedron
          layers={[11]}
          name="background"
          args={[20, 4, 4]}
          position={[0, 0, -5]}
        >
          <meshMatcapMaterial
            matcap={matcapTexture}
            side={THREE.BackSide}
            transparent
            opacity={0.3}
            color="#FFFFFF"
          />
        </Octahedron>
        <cubeCamera
          layers={[11]}
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <Title name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  )
}

export default Scene
