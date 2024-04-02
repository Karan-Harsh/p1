import { useState } from "react";

const ProjectCarousel = ({ projects }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="relative">
        <img
          src={currentProject.image}
          alt={currentProject.name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 rounded-lg p-4">
            <h3 className="text-white text-2xl font-semibold mb-2">
              {currentProject.name}
            </h3>
            <p className="text-gray-300 mb-4">{currentProject.description}</p>
            <div className="flex">
              <button
                className="mr-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                onClick={handlePrev}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
            <div className="mt-4">
              <a
                href={currentProject.codeLink}
                className="mr-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
              <a
                href={currentProject.demoLink}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
