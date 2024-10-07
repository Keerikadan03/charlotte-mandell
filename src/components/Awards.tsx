import React from 'react';

type AwardItem = {
  year: string;
  awardName: string;
  awardedBy: string;
  extra?: string;
};

type AwardsAndHonorsProps = {
  awards: AwardItem[];
};

const AwardsAndHonors: React.FC<AwardsAndHonorsProps> = ({ awards }) => {
  return (
    <div className="p-6 sm:p-10 max-w-2xl mx-auto">
      <div className="after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
        {awards.map((award, index) => (
          <div
            key={index}
            className="grid gap-1 relative max-w-6xl bg-white p-6 shadow rounded-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
          >
            {/* Circle indicator */}
            <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />

            {/* Year */}
            <div className="font-medium text-gray-700 dark:text-gray-300">
              {award.year}
            </div>

            {/* Award Name */}
            <div className="text-xl font-semibold text-gray-900 dark:text-white opacity-75 transition-colors hover:text-indigo-500 dark:hover:text-indigo-400">
              {award.awardName}
            </div>

            {/* Awarded By */}
            <div className="text-gray-600 dark:text-gray-400">
              {award.awardedBy}
            </div>

            {/* Extra Info */}
            {award.extra && (
              <div className="text-gray-500 dark:text-gray-400">
                {award.extra}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsAndHonors;
