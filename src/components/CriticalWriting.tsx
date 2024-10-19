import React from 'react';
import { BookOpen, Users, MapPin, Calendar, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

type Writing = {
  title: string;
  details: string;
  publication: string;
  editors: string;
  publisher: string;
  location: string;
  year: string;
  pages: string;
  translatedBy?: string;
};

type CriticalWritingsProps = {
  writings: Writing[];
};

const CriticalWritings: React.FC<CriticalWritingsProps> = ({ writings }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 p-6">
      {writings.map((writing, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden bg-white shadow-lg dark:bg-gray-950 dark:shadow-none transition-transform transform hover:scale-105 flex flex-col"
        >
          <div className="p-6 flex flex-col flex-grow">
          <Link to={`/essay/${writing.title.replace(/\s+/g, '-').toLowerCase()}`}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {writing.title}
            </h3>
          </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {writing.details}
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
              <Globe className="mr-2 h-5 w-5 text-gray-500" />
              <span>{writing.publication}</span>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 my-4 pt-4">
              <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Users className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">Editors:</span> {writing.editors}
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">Publisher:</span> {writing.publisher}
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="font-medium">Location:</span> {writing.location}
                </div>
                {writing.translatedBy && (
                  <div className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4 text-gray-500" />
                    <span className="font-medium">Translated by:</span> {writing.translatedBy}
                  </div>
                )}

              </div>
            </div>

            {/* The Year and Pages section at the bottom */}
            <div className="mt-auto pt-2 border-t flex justify-between gap-2 border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                <span className="font-medium">Year:</span> {writing.year}
              </div>
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4 text-gray-500" />
                <span className="font-medium">Pages:</span> {writing.pages}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CriticalWritings;
