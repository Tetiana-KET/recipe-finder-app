import { RecipeDetails } from '@/components/RecipeDetails';
import { fetchRecipeDetails } from '@/services/fetchRecipeDetails';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface RecipeDetailsPageProps {
  params: {
    id: string;
  };
}
const RecipeDetailsPage = async ({ params }: RecipeDetailsPageProps) => {
  const recipeParams = await params;
  const recipe = await fetchRecipeDetails(recipeParams.id);

  if (!recipe) {
    notFound();
  }
  return <RecipeDetails recipe={recipe} />;
};

export default RecipeDetailsPage;
