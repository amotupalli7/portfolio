'use client'
import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import deved from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/dev-ed-wave.png"
import design from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/design.png"
import code from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/code.png"
import consulting from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/consulting.png"

import web1 from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/web1.png"
import web2 from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/web2.png"
import web3 from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/web3.png"
import web4 from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/web4.png"
import web5 from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/web5.png"
import web6 from "C:/Users/amotupalli/Desktop/PortfolioWebsite/public/web6.png"


export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div classname = {darkMode ? "dark" : ""}>
    <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className="min-h-screen ">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl font-burtons">Developedbyabhi</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onclick = {() => setDarkMode(!darkMode)}  className=" cursor-pointer text-2xl"/> </li>
            <li><a href="#" className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8">Resume</a></li>
          </ul>
        </nav>

        <div className=" text-center p-10">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium md:text-6xl">Abhi Motupalli</h2>
          <h3 className=" text 2xl py-2 md:text-3xl">Software Engineer</h3>
          <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">Aspiring software engineer. Looking for ways to grow knowledge through industry experience.</p>
        </div>

        <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>

        <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={deved} layout="fill" objectFit="cover"></Image>
        </div>
      </section>
      
      
      <section>
        <div>
          <h3 className=" text-3xl py-1">Services I offer</h3>
          <p className=" text-md py-5 leading-8 text-gray-800">
            I am a rising junior at the <span className=" text-teal-500">University of Massachussetts Amherst</span>.
          </p>
        </div>


        
        <div className=" lg:flex gap-10">
          
            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={design} width={100} height={100} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
              <p className=" py-2">Creating elegant suited for you needs</p>
              <h4 className=" py-4 text-teal-500">Design tools I use</h4>
              <p className=" text-gray-500 py-1">Photoshop</p>
              <p className=" text-gray-500 py-1">Illustrator</p>
              <p className=" text-gray-500 py-1">FIgma</p>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={code} width={100} height={100} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
              <p className=" py-2">Creating elegant suited for you needs</p>
              <h4 className=" py-4 text-teal-500">Design tools I use</h4>
              <p className=" text-gray-500 py-1">Photoshop</p>
              <p className=" text-gray-500 py-1">Illustrator</p>
              <p className=" text-gray-500 py-1">FIgma</p>
            </div>

            <div className=" text-center shadow-lg p-10 rounded-xl my-10 flex-1">
              <Image src={consulting} width={100} height={100} className=" m-auto"/>
              <h3 className=" text-lg font-medium pt-8 pb-2">Beatiful Designs</h3>
              <p className=" py-2">Creating elegant suited for you needs</p>
              <h4 className=" py-4 text-teal-500">Design tools I use</h4>
              <p className=" text-gray-500 py-1">Photoshop</p>
              <p className=" text-gray-500 py-1">Illustrator</p>
              <p className=" text-gray-500 py-1">FIgma</p>
            </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className=" text-3xl py-1">Portfolio</h3>
          <p className=" text-md py-5 leading-8 text-gray-800">
            I have had a few prior internship experiences including.
          </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div classname=" basis-1/3 flex-1"><Image src={web2} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div classname=" basis-1/3 flex-1"><Image src={web1} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div classname=" basis-1/3 flex-1"><Image src={web3} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div classname=" basis-1/3 flex-1"><Image src={web4} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div classname=" basis-1/3 flex-1"><Image src={web5} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>
          <div classname=" basis-1/3 flex-1"><Image src={web6} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"></Image></div>

        </div>
      </section>

    </main>
    </div>
  );
}
