import { Lightbulb } from "lucide-react";

export default function ServiceCard({title, description, icon}:{title:string; description:string; icons:React.ReactNode}){

  return <div className=" px-20 text-center justify-center items-center flex flex-col gap-6">
    {icon}
      <div className=" flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-gray-500 text-lg">{description}</p>
      </div>
  </div>;
}
