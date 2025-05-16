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
        {recipesData.results.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
