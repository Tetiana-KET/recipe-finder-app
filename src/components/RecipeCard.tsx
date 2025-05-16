import { Recipe } from '@/models/Recipe';
import Image from 'next/image';
import Link from 'next/link';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link
      key={recipe.id}
      href={`/recipes/${recipe.id}`}
      className="group bg-white rounded shadow hover:shadow-md transition overflow-hidden min-h-[300px] min-w-[310px]"
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={312}
        height={231}
        className="rounded-t w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="p-2 text-center font-medium">{recipe.title}</div>
    </Link>
  );
};
