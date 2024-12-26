import Image from "next/image"


export default function ToolCard({title, tools}) {
    return (
        <div className="p-3 rounded-lg">
                <h1 className="md:text-lg text-xl mb-2">{title} : </h1>
                <ul className="flex flex-wrap gap-2">
                    {tools.map((item,index) => (
                        <div key={index} className="flex gap-2 items-center text-sm bg-red-100/10 px-3 py-2 rounded-md"> 
                            <Image 
                                src={item.url}
                                alt= 'logo des differents tools'
                                height = {32}
                                width = {32}
                                className= ''
                            />
                            <p className="">{item.tool} </p>
                        </div>
                    ))}
                </ul>
        </div>
    )
}