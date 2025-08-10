import React from 'react';
import { ChevronUpIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Tharindu.dev
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Creating digital experiences that blend creativity with technical
              excellence.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <a href="#home" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors mb-4">
              <ChevronUpIcon size={20} />
            </a>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Tharindu Prabashwara. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};