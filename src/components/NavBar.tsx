import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <div className="w-42 h-32 mr-4">
          <Link to={"/"}>
            <img
              src="/src/assets/logo-removebg-preview.png"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
        </div>
      </div>
      <div className="text-white flex justify-center mx-auto text-3xl font-mono ">
        <Link to="/about" className="ml-6">
          About
        </Link>
        <Link to="/projects" className="ml-6">
          Projects
        </Link>
        <Link to="/skills" className="ml-6">
          Skills
        </Link>
        <Link to="/contact" className="ml-6">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
