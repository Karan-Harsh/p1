import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Project = () => {
  return (
    <div>
      <Carousel className="items-center mx-auto w-2/5">
        <div>
          <img src="/src/assets/porjects/mern.png" alt="" />
          <p className="text-4xl font-semibold mx-auto px-6 py-4">
            MERN Auth App
          </p>
          <div className="flex flex-row justify-evenly ">
            <a href="https://karan-auth.netlify.app/">
              <button className="bg-white text-black rounded-lg text-2xl px-6 py-4">
                Live
              </button>
            </a>
            <a href="https://github.com/Karan-Harsh/auth-app">
              <button className="bg-white text-black rounded-lg text-2xl px-6 py-4">
                Code
              </button>
            </a>
          </div>
        </div>
        <div>
          <img src="/src/assets/porjects/psm.png" alt="" className="h-2/3" />
          <p>Project 2</p>
          <div className="flex flex-row justify-evenly ">
            <button className="bg-white text-black rounded-lg text-2xl px-6 py-4">
              Live
            </button>
            <button className="bg-white text-black rounded-lg text-2xl px-6 py-4">
              Code
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Project;
