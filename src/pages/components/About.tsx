import React from 'react'
import Image from "next/image";
import profile from "../assets/profile.png";

const About = () => {
  return (
    <div id="about">
        <div className="container">
            <div className="flex flex-row">
                <div className="order-first">
                    <Image src={profile} alt="profile" width={800} height={300} />
                </div>
                <div className="order-last">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="text-xl">I am a self-taught web developer and I love to build websites and web applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
