const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <div className="w-42 h-32 mr-4">
          <img
            src="/src/assets/logo-removebg-preview.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="text-white flex justify-center mx-auto text-3xl font-mono ">
        <div className="ml-6">About</div>
        <div className="ml-6">Projects</div>
        <div className="ml-6">Skills</div>
        <div className="ml-6">Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
