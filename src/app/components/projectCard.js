import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Code } from "lucide-react";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, description }) {
  return (
    <div className="p-3 bg-blue-950/10 hover:border-[1px] border-blue-700 shadow-lg rounded-lg flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl">{title}</h1>
        <p className="ml-3">{description}</p>
      </div>
      <div className="relative group overflow-hidden">
        <Image
          src="/R.png"
          alt="photo de profile du développeur front end Nahoua Coulibaly"
          height={200}
          width={300}
          priority
          className="rounded-lg h-[200px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button className="px-4 py-2 border-[1px] rounded-md text-base bg-slate-50 text-gray-800">
            <Link className="flex items-center gap-3" href="/">
              <Code className="w-4 h-4" />
              View Code
            </Link>
          </button>
          <button className="px-4 py-2 border-[1px] rounded-md text-base bg-slate-50 text-gray-800">
            <Link className="flex items-center gap-3" href="/">
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
