import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers"

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)"); // Changed to 768px for better tablet support
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <header>
            <section className="relative w-full min-h-screen md:flex items-center">

                <div className={`${styles.paddingX} absolute inset-0 top-[120px] w-full flex flex-row md:justify-normal justify-center items-start gap-5 z-0`}>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div>
                            <h1 className={`${styles.heroHeadText} text-white z-10`}>
                                Hi, I am{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(90deg, rgba(3, 234, 255, 1) 0%, rgba(75, 162, 211, 1) 33%, rgba(204, 73, 187, 1) 66%, rgba(114, 55, 253, 1) 100%)",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        color: "transparent",
                                        WebkitTextFillColor: "transparent"
                                    }}
                                >
                                    Authoi
                                </span>
                            </h1>
                            <p className={`${styles.heroSubText} mt-2 z-10 text-white-100 text-start ${isMobile ? 'mb-2' : 'mb-8'}`}>
                                I am MD. JAWAD JABBAR KHAN AUTHOI, <br /> A Full-Stack Mern-Stack Web developer.
                            </p>
                        </div>
                    </div>
                </div>
                <ComputersCanvas />

                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                    <a href='#about'>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className='w-3 h-3 rounded-full bg-secondary mb-1'
                            />
                        </div>
                    </a>
                </div>

            </section>
            <div className="h-14 -mt-16 w-full bg-no-repeat bg-center" style={{ backgroundImage: "url(https://www.programming-hero.com/_next/image?url=%2Fbanner%2Fbottom-layer.png&w=1920&q=75)" }}>
            </div>
        </header>
    );
};

export default Hero;
