import React from "react";
import { Link } from "react-router-dom";
import { Newspaper, Youtube } from "lucide-react"; // Importing icons

interface Interview {
  name: string;
  link: string;
  type: string;
}

interface InterviewProps {
  interview: Interview;
}

const EssayPreview: React.FC<InterviewProps> = ({ interview }) => {
  const formatTitle = (title: string): string => {
    return title.replace(/-/g, " ")
                .replace(/\b\w/g, char => char.toUpperCase());
  };

  const renderIcon = (type: string) => {
    if (type === "article") {
      return <Newspaper className="w-12 h-12 text-gray-500 mr-2" />;
    } else if (type === "video") {
      return <Youtube className="w-12 h-12 text-gray-500 mr-2" />;
    }
    return null; // If there's no matching type, return nothing
  };

  return (
    <div className="flex flex-col p-5 bg-white shadow border-b-4 border-gray-300 h-full rounded-lg">
      <Link target="_blank" to={interview.link} className="flex items-center text-gray-500 hover:text-gray-800">
        {renderIcon(interview.type)}
        <h2 className="scroll-m-20  text-3xl font-medium tracking-tight first:mt-0 w-full transition-colors duration-1000">
          {formatTitle(interview.name)}
        </h2>
      </Link>
    </div>
  );
};

export default EssayPreview;
