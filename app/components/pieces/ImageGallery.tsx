import dynamic from "next/dynamic";
import { useEffect } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";

interface ImageGalleryProps {
  images: string[];
  galleryIsOpen: boolean;
  closeGallery: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  galleryIsOpen,
  closeGallery,
}) => {
  useEffect(() => {
    console.log("Images being passed to gallery:", images);
  }, [images]);

  useEffect(() => {
    if (galleryIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [galleryIsOpen]);

  if (!galleryIsOpen || images.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-screen min-h-screen !bg-black z-50">
      <div className="flex items-center justify-center flex-col ">
        <div className="my-4 ml-4 mr-auto w-fit">
          <button
            className=" text-red-500 duration-300 hover:text-red-700 text-2xl "
            onClick={closeGallery}
          >
            ✕
          </button>
        </div>
        <div className="h-[90vh] overflow-y-scroll">
          <LightGallery
            speed={500}
            plugins={[lgZoom, lgFullscreen, lgShare]}
            mode="lg-fade"
            selector=".gallery-item"
            elementClassNames="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 "
          >
            {images.map((image, index) => (
              <a
                key={index}
                href={image}
                data-src={image}
                className="gallery-item flex items-center justify-center max-h-[250px] border-[2px] border-transparent duration-300 hover:border-gold  rounded-lg cursor-pointer overflow-hidden "
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
