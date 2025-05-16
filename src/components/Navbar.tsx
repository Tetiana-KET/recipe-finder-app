import Link from 'next/link';
import { NAVIGATION_LIST } from '@/consts/navigationList';

interface NavigationListItem {
  id: string;
  title: string;
  path: string;
}

export const NavBar = () => {
  return (
    <nav className="h-full flex justify-between items-center">
      {NAVIGATION_LIST.map((item: NavigationListItem) => (
        <Link
          key={item.id}
          href={item.path}
          className="inline-flex items-center h-full px-2 text-lg transition-colors hover:bg-black/10"
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
