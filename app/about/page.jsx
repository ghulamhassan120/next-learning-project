"use client";
import React, { useEffect, useRef } from "react";
import { easeInOut, motion } from "motion/react";
import gsap from "gsap";
const AboutPage = () => {
  const cardRef = useRef();
  const hoverRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const element = cardRef.current;
      if (!element) return;
      gsap.set(element, {
        opacity: 0,
        y: 50,
        scale: 1,
      });
      gsap.to(element, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  const handleMouseLeave=()=>{
    if(!cardRef.current) return;
    if (hoverRef.current) {
      hoverRef.current.kill()
    }

    hoverRef.current=gsap.to(cardRef.current,{
      duration:0.3,
      y:-50,
      scale:1.05,
      boxShadow:"0 10px 15px -3px rgb(0,0,0 / 0.1),0 4px 6px -4px rgb(0,0,0 / 0.1)",
      ease:"power2.out"
    })
  }
  return (
    <>
      {/* <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{opacity:0,x:-10}}
      animate={{opacity:1,x:0}}
      transition={{duration:0.2,ease:easeInOut}}
      whileTap={{scale:0.9}}
      className="bg-red-600 w-28 h-25 flex justify-center items-center"
    >

      AboutPage
    </motion.div> */}
      <div
        ref={cardRef}
        // onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-red-600 w-28 h-25 flex justify-center items-center"
      >
        About Page
      </div>
    </>
  );
};

export default AboutPage;
