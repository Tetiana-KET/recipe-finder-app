import { RecipeCard } from '@/components/RecipeCard';
import { RecipesResponse } from '@/models/RecipesResponse';
import { fetchRecipes } from '@/services/fetchRecipes';

interface RecipesPageProps {
  searchParams: {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
  };
}

const Recipes = async ({ searchParams }: RecipesPageProps) => {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const recipesData = await fetchRecipes({ query, cuisine, maxReadyTime });
  return (
    <div className="px-2 sm:px-5 md:px-11 max-w-[1620px] mx-auto flex flex-col gap-8 py-12">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {recipesData.results.length ? (
          recipesData.results.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-gray-500 py-12">
            <p className="text-5xl font-semibold">No recipes found 😕</p>
            <p className="mt-2 text-2xl text-gray-400">Try adjusting your search filters or keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
