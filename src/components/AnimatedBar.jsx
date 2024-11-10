"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaArrowUp } from "react-icons/fa";

const Animatedbar = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div className="relative border border-red-600 overflow-hidden h-[30vh] rounded-3xl">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="h-full"
                options={{
                    background: {
                        color: {
                            value: "#FC7700",
                        },
                    },
                    fullScreen: false,
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="absolute inset-0 flex items-center justify-start px-10 z-10 text-white text-2xl ">
                {/* Content */}
                <div className="flex flex-col gap-4 w-full md:w-auto">
                <h1 className="w-1/2 text-wrap text-4xl font-extrabold">Discover, create and sell your own NFT</h1>
                <div className="flex flex-col md:flex-row gap-4 text-xl [&>button]:flex [&>button]:gap-2">
                    <button className="bg-black flex-1 center text-center text-primary p-4 rounded-2xl hover:bg-white hover:text-black duration-200 ">Explore Now  <FaArrowUp className="text-lg rotate-45" />
                    </button>
                    <button className="bg-black center text-center flex-1 text-primary p-4 rounded-2xl  hover:bg-white hover:text-black duration-200">Create Your First Nft <FaArrowUp className="text-lg rotate-45" />
                    </button>
                </div>
                </div>
               
            </div>
        </div>
    );
};

export default Animatedbar;
