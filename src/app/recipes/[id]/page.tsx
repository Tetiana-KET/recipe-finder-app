import { fetchRecipeDetails } from '@/services/fetchRecipeDetails';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface RecipeDetailsPageProps {
  params: {
    id: string;
  };
}
const RecipeDetailsPage = async ({ params }: RecipeDetailsPageProps) => {
  const recipe = await fetchRecipeDetails(params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <Image src={recipe.image} alt={recipe.title} width={556} height={370} className="rounded mb-4 " />

      <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {recipe.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>

      <p className="mt-6 text-gray-600">
        <strong>Ready in:</strong> {recipe.readyInMinutes} minutes
      </p>
      <p className="text-gray-600">
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <div
        className="prose prose-sm mt-4 [&_a]:text-blue-600 [&_a]:font-semibold [&_a]:underline"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />
    </div>
  );
};

export default RecipeDetailsPage;
