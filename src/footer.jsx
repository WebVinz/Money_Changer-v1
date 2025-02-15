import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 py-4 w-full bg-gray-800 text-center text-white flex justify-center items-center">
      <p className="mr-2">Made by Kevin Ivander</p>
      <a
        href="https://github.com/WebVinz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-1 hover:text-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.82-.26.82-.577v-2.24c-3.338.725-4.04-1.61-4.04-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.206.085 1.84 1.24 1.84 1.24 1.07 1.832 2.81 1.303 3.493.996.108-.774.417-1.303.76-1.604-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.467-2.383 1.237-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.01-.323 3.31 1.23.96-.267 1.99-.4 3.01-.404 1.02.004 2.05.137 3.01.404 2.3-1.553 3.31-1.23 3.31-1.23.652 1.65.24 2.873.116 3.176.77.837 1.237 1.91 1.237 3.22 0 4.61-2.807 5.625-5.48 5.921.43.37.81 1.096.81 2.21v3.28c0 .32.22.694.82.577C20.562 21.8 24 17.303 24 12 24 5.37 18.63 0 12 0z"
            clipRule="evenodd"
          />
        </svg>
        <span>KevinIvander</span>
      </a>
    </footer>
  );
};

export default Footer;
