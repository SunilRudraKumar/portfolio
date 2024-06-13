// components/custom/Projects.tsx
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  content: string;
  footer: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Card
          key={index}
          className="shadow-lg rounded-lg overflow-hidden flex flex-col justify-between items-center text-center"
        >
          <CardHeader className="w-full">
            <CardTitle className="text-xl font-semibold">
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            {project.content.startsWith("/assets") ? (
              <Image
                src={project.content}
                alt={project.description}
                width={500} // Example width, adjust as necessary
                height={300} // Example height, adjust as necessary
                layout="responsive"
              />
            ) : (
              <p>{project.content}</p>
            )}
          </CardContent>
          <CardFooter className="w-full justify-center">
            <p className=" text-blue-500 hover:underline cursor-pointer">
              {project.footer}
            </p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default Projects;
