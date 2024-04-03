import Skill from "./Skill";

const Skills = () => {
  return (
    <div>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Skills
          </h2>
          <div className="py-4 grid grid-cols-2 gap-10">
            <Skill skillName="React" />
            <Skill skillName="NodeJs" />
            <Skill skillName="NextJS" />
            <Skill skillName="Express" />
            <Skill skillName="MongoDB" />
            <Skill skillName="Docker" />
            <Skill skillName="SQL" />
            <Skill skillName="TailWindCSS" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
