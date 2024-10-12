import React from "react";
import { Link } from "react-router-dom";

interface Essay {
  id: number;
  title: string;
  content: JSX.Element;
  description: string;
  references?: string;
  banner?: string;
}

interface EssayPreviewProps {
  essay: Essay;
}

const EssayPreview: React.FC<EssayPreviewProps> = ({ essay }) => {
  const formatTitle = (title: string): string => {
    return title.replace(/-/g, " ")
                .replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div className="flex flex-col p-5 bg-white shadow border-b-4 border-gray-600 h-full">
      <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`}>
        <h2 className="scroll-m-20 mt-12 border-b pb-4 text-gray-400 hover:text-gray-800 text-3xl font-semibold tracking-tight first:mt-0 w-full transition-colors duration-1000">
          {formatTitle(essay.title)}
        </h2>
      </Link>
      <div className="py-2 opacity-75 flex-grow">
        {essay.description}
      </div>
      <div className="mt-auto"> {/* Pushes the button to the bottom */}
        <Link to={`/essay/${essay.title.replace(/\s+/g, '-').toLowerCase()}`} className="inline-block text-gray-400 rounded hover:text-gray-800 transition-colors duration-300">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default EssayPreview;
