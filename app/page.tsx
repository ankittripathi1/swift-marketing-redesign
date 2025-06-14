'use client'
import ServiceCard from "@/components/ServiceCard";
import { Lightbulb } from "lucide-react";

export default function Home() {

  return (
    <div className="text-dark dark:text-light">
      <nav className="flex items-center justify-between py-8  px-20 bg-background">
        <div className="text-3xl font-bold text-foreground">
        Swift Marketing
        </div>
        <ul className="flex gap-4 text-lg">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Services</li>
          <li className=" cursor-pointer">Our Works</li>
          <li className=" cursor-pointer">Technologies</li>
          <li className=" cursor-pointer">Contact</li>
        </ul>
        <input placeholder="Search ..." className="border-2 rounded-lg border-gray-400 py-1 px-4 focus:outline-none focus:border-foreground/60"></input>
      </nav>
      <section className="flex flex-col items-center justify-center mt-30">
        <h1 className="text-6xl font-bold text-center">We Build Digital Strategies That <br/> Drive Revenue</h1>
        <p className="text-2xl text-gray-500"> Websites, Marketing, and Software Designed to Grow Your Business.</p>
        <button className="mt-8 bg-foreground text-white font-bold text-base py-3 px-8 uppercase rounded-lg cursor-pointer hover:bg-[#e02f00]">Let's have a chat</button>
      </section>
      <section id="our-services" className="mt-29 ">
        <h1 className="text-5xl font-bold text-center text-foreground">Our Services</h1>
        <p className="text-gray-500 text-center text-xl">We focus on solving digitization, brand awareness and process automation problems</p>

        <div className="flex flex-col  
          justify-between mt-12">
        <div className="first-row flex  items-center justify-center">
          <ServiceCard title="Digital Strategies" description="Extend your reach with digital strategy, planning, advertising & campaigning. Grow or develop a new brand" icon={<Lightbulb size={54} className="bg-foreground rounded-full text-background p-3 "/>}
         />
          <ServiceCard title="Digital Strategies" description="Extend your reach with digital strategy, planning, advertising & campaigning. Grow or develop a new brand" 

      icon={<Lightbulb size={54} className="bg-foreground rounded-full text-background p-3 "/>}
              
         />
          <ServiceCard title="Digital Strategies" description="Extend your reach with digital strategy, planning, advertising & campaigning. Grow or develop a new brand" 

      icon={<Lightbulb size={54} className="bg-foreground rounded-full text-background p-3 "/>}
         />
          </div>
        </div>
      </section>
    </div>
  );
}
