import Social from "./Social";

const Home = () => {
  return (
    <div>
      <div className="flex h-screen  justify-center ">
        <div className="my-96 pl-16 py-8 ">
          <Social />
        </div>
        <div className="flex flex-col items-center  mx-auto mt-48">
          <div className="text-2xl font-semibold">Hi! My name is </div>
          <div className="text-8xl font-bold py-6">Harsh Karan</div>
          <div className="text-2xl font-semibold">
            I am a Software Developer{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
