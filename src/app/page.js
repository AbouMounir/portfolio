import Image from "next/image";
import SocialsMedias from "./components/socialMedia";
import ProjectCard from "./components/projectCard";
import ToolCard from "./components/toolCard";
import Contact from "./components/contact";
import Link from "next/link";
import Header from "./components/heatder";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <main className="lg:flex lg:w-[95%] md:w-4/5 gap-x-8 row-start-2 items-center sm:items-start">
        <div className="p-6 lg:py-20 lg:w-[50%] flex flex-col gap-4 lg:sticky lg:top-0">
          <div className="md:flex gap-6 items-center">
            <Image 
              src='/Nahoua.jpg'
              alt="photo de profile du développeur front end Nahoua Coulibaly"
              height={175}
              width={175}
              className="rounded-full h-[170px] w-auto"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl "> Nahoua Aruna Coulibaly</h1>
              <h2 className="text-start"> Front-end developer and Geomatics professional</h2>
              <SocialsMedias color="white" colorStroke="white" rx="5.7622"/>
            </div>
          </div>
          <p className="text-justify text-muted-foreground">
          Junior front-end developer, passionate about the web, I design custom solutions that combine performance, design, and usability, and I am always ready to take on new challenges.
          </p>
          <div className="grid grid-cols-1 gap-2">
            
            <div className="">
              <ToolCard 
                title='Stack' 
                tools={[{url:"/React.png", tool: "React "}, {url:"/Next.js Icon.svg", tool: "Next"}, {url:"/html5.svg", tool: "Node js"}, {url:"/Tailwind CSS Icon.svg", tool: "Tailwind CSS"}, {url:"/github.svg", tool: "Github / Git"}, {url:"/figma.svg", tool: "Figma "}]}
              />
              <ToolCard 
                title='Langages utilisés' 
                tools={[{url:"/html5.svg", tool:"HTML / CSS "}, {url:"/javascript.svg", tool:"Javascript" }, {url:"/python.svg", tool: "Python" }]}
              />
            </div>
          </div>
          
        </div>
        <div className="p-6 lg:py-20 lg:w-[50%] flex flex-col gap-3">
          <ProjectCard title="Rock, Paper,Scissors" description="An interactive game built with React and TypeScript"/>
          <ProjectCard title="E commerce Platform" description="A full-stack e-commerce solution with Next.js."/>
          <ProjectCard title="Mon Géomètre Expert" description="An app to find a survey in Ivory Coast with Next.js"/>
        </div>
        <Contact />
      </main>
    </div>
  );
}

{/*
            <ToolCard 
              title='Frameworks et bibliothèques' 
              tools={[{url:"/React.png", tool: "React "}, {url:"/next.svg", tool: "Next"}, {url:"/html5.svg", tool: "Node js"}]}
            />
            <ToolCard 
              title='Outils de versioning' 
              tools={["Git", "Github"]}
            />
            <ToolCard
              title='Outils de design' 
              tools={["Figma "]}
            />
            <ToolCard 
              title='Others' 
              tools={[{url:"/git.svg", tool: "Git"}, {url:"/github.svg", tool: "Github"}, {url:"/figma.svg", tool: "Figma "}, {url:"/html5.svg", tool: "Progres"}, {url:"/html5.svg", tool: "Mongo db"}]}
            />
            */}