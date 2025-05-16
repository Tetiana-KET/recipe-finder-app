import { NavBar } from './Navbar';

export const Header = () => {
  return (
    <header className="border-b shadow-[0_5px_5px_-2px_rgba(134,106,161,0.5)]">
      <div className="h-[100px] flex justify-between items-center px-4 sm:px-5 md:px-11 max-w-[1620px] mx-auto">
        <div className="flex justify-center items-center">
          <svg
            width="70"
            height="70"
            viewBox="-10.5 -9.45 21 18.9"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-gray-500 text-black transition-colors duration-300 cursor-pointer"
            fill="currentColor"
          >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
        </div>
        <NavBar />
      </div>
    </header>
  );
};
