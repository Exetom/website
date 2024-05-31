// https://cydstumpel.nl/

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import './utils';
import IMG1 from "../../assets/projects/project1.jpg";
import IMG2 from "../../assets/projects/project2.jpg";
import IMG3 from "../../assets/projects/project3.jpg";
import IMG4 from "../../assets/projects/project4.jpg";
import IMG5 from "../../assets/projects/project5.jpg";
import IMG6 from "../../assets/projects/project6.jpg";
import IMG7 from "../../assets/projects/project7.jpg";
import IMG8 from "../../assets/projects/project8.jpg";
import IMG9 from "../../assets/projects/project9.jpg";
import IMG10 from "../../assets/projects/project10.jpg";
import WORK from "../../assets/light-logo-black-bg.jpg";

const imageArray = ['', IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10]

export const Projects = () => (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={['#a79', 8.5, 12]} />
        <ScrollControls pages={4}>
            <Rig rotation={[0, 0, 0.15]}>
                <Carousel />
            </Rig>
            <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
    </Canvas>
)

function Rig(props) {
    const ref = useRef()
    const scroll = useScroll()
    useFrame((state, delta) => {
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
        state.events.update() // Raycasts every frame rather than on pointer-move
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
        state.camera.lookAt(0, 0, 0) // Look at center
    })
    return <group ref={ref} {...props} />
}

function Carousel({ radius = 1.4, count = 8 }) {
    return Array.from({ length: count }, (_, i) => (
        <Card
            key={i}
            url={`${imageArray[Math.floor(i % 10) + 1]}`}
            position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
            rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
    ))
}

function Card({ url, ...props }) {
    const ref = useRef()
    const [hovered, hover] = useState(false)
    const pointerOver = (e) => (e.stopPropagation(), hover(true))
    const pointerOut = () => hover(false)
    useFrame((state, delta) => {
        easing.damp3(ref.current.scale, hovered ? 2.2 : 1, 0.1, delta)
        easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
        easing.damp(ref.current.material, 'zoom', hovered ? 0.7 : 1.5, 0.2, delta)
    })
    return (
        <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props} >
            <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
        </Image>
    )
}

function Banner(props) {
    const ref = useRef()
    const texture = useTexture(WORK)
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    const scroll = useScroll()
    useFrame((state, delta) => {
        ref.current.material.time.value += Math.abs(scroll.delta) * 4
        ref.current.material.map.offset.x += delta / 2
    })
    return (
        <mesh ref={ref} {...props}>
            <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
            <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
    )
}
