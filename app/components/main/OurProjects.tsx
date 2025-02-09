import React from "react";
import SectionTitle from "../pieces/SectionTitle";
import Project from "../pieces/Project";

export default function OurProjects() {
  const projectsDataItems = [
    { id: 1, srcItem: "/assets/media/projects/copa_cup/1.jpg" },
    { id: 2, srcItem: "/assets/media/projects/copa_cup/2.jpg" },
    { id: 3, srcItem: "/assets/media/projects/copa_cup/3.jpg" },
  ];

  const projectImages = {
    1: [
      "/assets/media/projects/copa_cup/1.jpg",
      "/assets/media/projects/copa_cup/2.jpg",
      "/assets/media/projects/copa_cup/3.jpg",
      "/assets/media/projects/copa_cup/4.jpg",
      "/assets/media/projects/copa_cup/5.jpg",
      "/assets/media/projects/copa_cup/6.jpg",
      "/assets/media/projects/copa_cup/7.jpg",
      "/assets/media/projects/copa_cup/8.jpg",
      "/assets/media/projects/copa_cup/9.jpg",
      "/assets/media/projects/copa_cup/10.jpg",
      "/assets/media/projects/copa_cup/11.jpg",
      "/assets/media/projects/copa_cup/12.jpg",
      "/assets/media/projects/copa_cup/13.jpg",
    ],
    2: [
      "/assets/media/projects/project-1/1.jpeg",
      "/assets/media/projects/project-1/1.jpeg",
      "/assets/media/projects/project-1/1.jpeg",
    ],
    3: [
      "/assets/media/projects/project-1/1.jpeg",
      "/assets/media/projects/project-1/1.jpeg",
      "/assets/media/projects/project-1/1.jpeg",
    ],
  };
  return (
    <section className="mb-[75px] md:mb-[100px] container">
      <SectionTitle title="أعــمـالـنـا" />
      <div className="my-12">
        <Project
          projectData={projectsDataItems}
          projectImages={projectImages}
        />
      </div>
    </section>
  );
}
