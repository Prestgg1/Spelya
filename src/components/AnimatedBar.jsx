"use client";
import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";

import Button from "./Button";

export default function AnimatedBar() {
    useEffect(() => {
        tsParticles.load("tsparticles", {
            autoPlay: true,
            background: {
                color: { value: "#000000" },
                opacity: 1
            },
            clear: true,
            fullScreen: {
                enable: false,
                zIndex: 0
            },
            detectRetina: true,
            fpsLimit: 120,
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 2,
                            smooth: 10
                        }
                    },
                    resize: { delay: 0.5, enable: true }
                },
                modes: {
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                        factor: 100,
                        speed: 1,
                        maxSpeed: 50,
                        easing: "ease-out-quad"
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffec00",
                    animation: {
                        h: { enable: true, speed: 20, sync: true }
                    }
                },
                move: {
                    enable: true,
                    speed: 6,
                    outModes: { default: "out" }
                },
                number: {
                    density: { enable: true, width: 1920, height: 1080 },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 1, max: 3 }
                },
                links: {
                    color: { value: "#ffffff" },
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                }
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true
        }).then(container => {
            console.log("callback - tsparticles config loaded");
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <div id="tsparticles" className="flex relative bg-black justify-between items-center px-5 w-full rounded-3xl">
            <div className="context absolute left-10 gap-5 flex flex-col">
                <h1 className="text-white rounded-lg">Discover, create and sell your own NFT</h1>
                {/* Buttons */}
                <div className="flex gap-3">
                    <Button>Explore Now</Button>
                    <Button>Create Your First NFT</Button>
                </div>
            </div>
        </div>
    );
}
