import React from 'react';
import { format } from 'date-fns';
import { mockEvents } from '@/utils/mockData';

const Explore: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Explore Opportunities</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => (
          <div key={event.id} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                {event.type}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-gray-300">{event.organization}</p>
              <p className="text-sm text-gray-400">
                Starts {format(event.startDate, 'MMM dd, yyyy')}
              </p>
              <p className="text-sm text-gray-400">Duration: {event.duration}</p>
              <p className="text-lg font-semibold text-cyan-400">{event.price}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Skills you will gain:</p>
              <div className="flex flex-wrap gap-2">
                {event.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;