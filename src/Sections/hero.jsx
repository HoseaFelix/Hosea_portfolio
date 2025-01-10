import React, {Suspense} from 'react'
import {PerspectiveCamera, useTexture} from "@react-three/drei";
import  HackerRoom from "../components/hackerRoom.jsx"
import CanvasLoader from "../components/canvasLoader.jsx";
import {Canvas} from "@react-three/fiber";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import Target from "../components/target.jsx"
import ReactLogo from "../components/ReactLogo.jsx";
import {pass} from "three/src/nodes/display/PassNode.js";
import Cube from "../components/Cube.jsx";
import Ring from "../components/Ring.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {
  
    const isSmall = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 768, maxWidth:1024})

    const sizes = (isSmall, isMobile, isTablet) => ({
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        targetPosition: isSmall
            ? [-5, -10, -10]
            : isMobile
                ? [-9, -10, -10]
                : isTablet
                    ? [-14, -7, -10]
                    : [-13, -13, -10],
        reactPosition: isSmall? [3, 4, 0] : isMobile? [5, 4, 0] :isTablet ? [5, 4, 0]: [12,3,0],
        reactScale: isSmall? 0.4 : 0.7,
        cubePosition: isSmall? [4, -5, 0 ]:  isMobile? [5, -5, 0] : isTablet? [5, -5, 8] : [9.0, -5.5, 0],
        ringPosition: isSmall? [-5, 7, 0 ] :isMobile ? [-10, 10,0] :isTablet? [-12, 10, 0] : [-24.0, 10.0, 0]
        
    });
    const {deskScale, deskPosition, targetPosition, reactPosition, cubePosition, ringPosition} = sizes(isSmall, isMobile, isTablet)

    


    return (
        <section className="min-h-screen border2 w-full flex flex-col relative" id="home">
            <div className=" w-full mx-auto flex flex-col sm:mt-20 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi I am Hosea <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building products & Brands</p>
                <div className="w-full h-ful absolute inset-0">
                 

                    <Canvas className="w-full h-full">
                        <Suspense fallback={CanvasLoader}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                            <HeroCamera isMobile ={isMobile} >
                                <HackerRoom
                                    
                                    position={deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={deskScale}
                                />
                            </HeroCamera>



                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]}/>
                            <group>
                                <Target position={targetPosition}/>
                                <ReactLogo position={reactPosition}/>
                                <Cube position={cubePosition}/>
                                <Ring position={ringPosition}/>
                            </group>
                        </Suspense>

                    </Canvas>

                </div>
                <div className=" absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                    <a href="#about" className="w-fit">
                        <Button name="lets work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Hero
//2:46:20
