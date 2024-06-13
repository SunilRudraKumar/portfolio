// pages/index.tsx
import Header from "@/components/custom/Header";
import Projects from "@/components/custom/Projects";

interface Project {
  title: string;
  description: string;
  content: string;
  footer: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "Description for project one",
      content: "/assets/projects/bitcoin.avif",
      footer: "Link to project one",
    },
    {
      title: "Project Two",
      description: "Description for project two",
      content: "Content for project two",
      footer: "Link to project two",
    },
    {
      title: "Project Three",
      description: "Description for project three",
      content: "Content for project three",
      footer: "Link to project three",
    },
    {
      title: "Project Four",
      description: "Description for project four",
      content: "Content for project four",
      footer: "Link to project four",
    },
    {
      title: "Project Five",
      description: "Description for project five",
      content: "Content for project five",
      footer: "Link to project five",
    },
    {
      title: "Project Six",
      description: "Description for project six",
      content: "Content for project six",
      footer: "Link to project six",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Projects projects={projects} />
        </div>
      </div>
    </div>
  );
}
