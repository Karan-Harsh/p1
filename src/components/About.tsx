import { useEffect, useState } from "react";

const About = () => {
  const [aboutText, setAboutText] = useState("");
  const [, setTextDisplayed] = useState(false);

  useEffect(() => {
    const text =
      "Greetings, I'm Harsh Karan, a dedicated student enrolled at KIIT University. Within the realms of academia, I'm deeply entrenched in the fields of Competitive Coding and Web Development. My fervor for problem-solving is most evident in my active participation in coding challenges on esteemed platforms such as CodeChef and HackerRank.    However, amidst the pursuit of technological excellence, I harbor a keen interest in the discipline of finance. While it may not occupy the forefront of my endeavors, I am committed to exploring its nuances as a supplementary pursuit.";
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setAboutText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
        setTextDisplayed(true);
      }
    }, 60); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 text-3xl lg:mb-16 font-light text-center text-white">
            {aboutText}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
