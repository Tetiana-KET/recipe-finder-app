import { GitHubIcon } from './ui/GitHubIcon';
import { LinkedinIcon } from './ui/LinkedinIcon';

export const Footer = () => {
  return (
    <footer className="border-t shadow-[0_-5px_5px_-2px_rgba(134,106,161,0.5)]">
      <div className="p-2 sm:p-5 md:p-11 max-w-[1620px] mx-auto flex flex-col relative z-10">
        <ul className="flex justify-between">
          <li className="flex gap-3 items-center">
            <a href="https://github.com/Tetiana-KET" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <span className="hidden sm:inline hover:text-accent duration-500">
              <a href="https://github.com/Tetiana-KET" target="_blank" rel="noreferrer">
                Tetiana Bezkorovaina
              </a>
            </span>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tatiana-ket" target="_blank" rel="noreferrer">
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
