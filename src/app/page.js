import Image from "next/image";
import SocialsMedias from "./components/socialMedia";
import ProjectCard from "./components/projectCard";
import ToolCard from "./components/toolCard";
import Contact from "./components/contact";
import Link from "next/link";
import Header from "./components/header";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <main className="lg:relative lg:flex lg:justify-around lg:w-[95%] lg:h-5/6 md:w-4/5 gap-x-8 row-start-2 items-center sm:items-start">
        <div className="p-6 lg:py-0 lg:w-[45%] flex flex-col gap-4 lg:sticky lg:top-16 lg:max-h-screen">
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
          <div className="grid grid-cols-1">
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
        <div className="p-6 lg:py-0 lg:w-[45%] flex flex-col gap-3 lg:sticky lg:top-0">
            <div>
              <ProjectCard title="Rock, Paper, Scissors" description="An interactive and fun version of the classic Rock, Paper, Scissors game, built with HTML, CSS, and JavaScript." imgURL="/rock-paper-scissors-site.png" codeURL="/" demoURL="https://rock-paper-scissors-taupe-theta.vercel.app/"/>
              <ProjectCard title="CGE DAO Website." description="A modern, fast-loading website for CGE DAO, built with Next.js." imgURL="/cge_dao_site.png" codeURL="/" demoURL="https://site-cge-dao-git-main-coulibaly-nahoua-arunas-projects.vercel.app/"/>
              <ProjectCard title="MonGE: Survey Finder in Ivory Coast" description="A platform for discovering surveys and insights in Ivory Coast, built with Next.js." imgURL="/mon_ge_site.png" codeURL="/" demoURL="https://mon-expert.geodaftar.com/"/>
            </div>
        </div>
      </main>
      <Contact />
    </div>
  );
}