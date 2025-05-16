'use client';

import Link from 'next/link';
import { NAVIGATION_LIST } from '@/consts/navigationList';
import { usePathname } from 'next/navigation';

interface NavigationListItem {
  id: string;
  title: string;
  path: string;
}

export const NavBar = () => {
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;
  return (
    <nav className="h-full flex justify-between items-center">
      {NAVIGATION_LIST.map((item: NavigationListItem) => (
        <Link
          key={item.id}
          href={item.path}
          className={`inline-flex items-center h-full px-2 text-lg 
            transition-colors duration-300 ease-in-out 
            hover:bg-black/30 ${isActive(item.path) ? 'bg-black/10 pointer-events-none' : ''}`}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
