"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsList } from "@radix-ui/react-tabs";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: " hawwaiaa website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: " hollao website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next",
    name: " jomanji website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: " hexa website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next",
    name: " broxi website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "full stack",
    name: " fulliean website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/",
    github: "/",
  },
];

const uniqueCats = [
  "all projects",
  ...new Set(projectData.map((cat) => cat.category)),
];

const Projects = () => {
  const [cats, setCats] = useState(uniqueCats);
  const [category, setCategory] = useState("all projects");

  const filterdProjects = projectData.filter((project) => {
    // if category is 'all projects' return all project, else filter by category
    return category === "all projects" ? project : project.category === category;
  });

  console.log(filterdProjects)
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full  justify-center md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border md:rounded-[30px] dark:border-none">
            {cats.map((cat, index) => {
              return (
                <TabsTrigger
                  value={cat}
                  key={index}
                  className="capitalize w-[162px] md:w-auto "
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">{filterdProjects.map((project , index)=>{
            return (
              <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            )
          })}</div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
