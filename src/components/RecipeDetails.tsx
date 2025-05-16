import { ExtendedIngredient, RecipeDetailsResponse } from '@/models/RecipeDetails';
import Image from 'next/image';

interface RecipeDetailsProps {
  recipe: RecipeDetailsResponse;
}

export const RecipeDetails = ({ recipe }: RecipeDetailsProps) => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <Image src={recipe.image} alt={recipe.title} width={556} height={370} className="rounded mb-4" priority />

      <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside">
        {recipe.extendedIngredients.map((ingredient: ExtendedIngredient) => (
          <li key={`${ingredient.id}-${ingredient.original}`}>{ingredient.original}</li>
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
