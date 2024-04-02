const Skill = ({ skillName }: { skillName: string }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4">
      <p className="text-2xl font-medium text-white">{skillName}</p>
    </div>
  );
};

export default Skill;
