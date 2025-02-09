import React, { useState } from "react";
import ImageGallery from "./ImageGallery";

interface ProjectItemTypes {
  id: number;
  srcItem: string;
}

interface ProjectsProps {
  projectData: ProjectItemTypes[];
  projectImages: { [key: number]: string[] };
}

export default function Project({ projectData, projectImages }: ProjectsProps) {
  const [galleryOpenStatus, setGalleryOpenStatus] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openGallery = (projectId: number) => {
    setSelectedImages(projectImages[projectId] || []);
    setGalleryOpenStatus(true);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projectData.map((item) => (
          <div
            key={item.id}
            className="  p-2 relative before:absolute before:top-4 before:left-0 before:w-[calc(100%-0.5rem)] before:h-[calc(100%-1rem)] before:bg-[#84621f]  before:!rounded-2xl before:z-[-1]  "
            onClick={() => openGallery(item.id)}
          >
            <div className="rounded-md overflow-hidden max-h-[300px] flex items-center justify-center">
              <img src={item.srcItem} className="-cover rounded-xl" />
            </div>
          </div>
        ))}
      </div>
      <ImageGallery
        images={selectedImages}
        galleryIsOpen={galleryOpenStatus}
        closeGallery={() => setGalleryOpenStatus(false)}
      />
    </>
  );
}
