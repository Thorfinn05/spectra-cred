import React from 'react';

const skills = [
  { name: 'Web Development', level: 85, certificates: 3 },
  { name: 'Data Science', level: 70, certificates: 2 },
  { name: 'Blockchain', level: 60, certificates: 1 },
  { name: 'UI/UX Design', level: 75, certificates: 2 },
];

export const SkillsOverview: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Skills Overview</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{skill.name}</span>
              <span className="text-sm text-cyan-400">{skill.certificates} certificates</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};