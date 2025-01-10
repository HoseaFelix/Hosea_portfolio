import React, {useEffect, useRef, useState} from 'react';
import Globe from "globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const globeRef = useRef(null);
    
    const handleCopy = ()=>{
        setHasCopied(true)
        navigator.clipboard.writeText('felixhosea61@gmail.com')

        setTimeout(()=>{
            setHasCopied(false)
        }, 2000)
    }

    useEffect(() => {
        if (globeRef.current) {
            const myGlobe = Globe()
                .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
                .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
                .backgroundColor('rgba(0,0,0,0)')
                .showAtmosphere(true)
                .showGraticules(true)
                .labelsData([{
                    lat:8.17916,
                    lng: 4.73344,
                    text: "i'm here!",
                    color:'white',
                    size:20
                    
                }])(globeRef.current)
                
            ;

            // Optional: Add data or features
            myGlobe.width(326).height(326);
        }
    }, []);

    return (
        <section className="c-space my-20" id='about'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Hi, I'm Hosea</p>
                            <p className="grid-subtext">With 2 years of experience, I have honed my skills in frontend development, with a focus on animated 3D websites.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt='grid-2' className="w-full sm:w-[276px] h-fit object-contain "/>
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext"> I specialize in JavaScript with a focus on React ecosystems.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div
                            className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"
                            ref={globeRef} // Attach reference to this div
                        ></div>
                        <div>
                            <p className="grid-headtext">
                                I work remotely across most timezones
                            </p>
                            <p className="grid-subtext">
                                I'm based in Nigeria, with remote work available
                            </p>
                        </div>
                        <Button name="Contact Me" isBeam cotainerClass="mt-10 "/>

                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">I love solving problems and building things through code. Coding isn't just my profession, it is my passion</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top " />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">felixhosea61@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;