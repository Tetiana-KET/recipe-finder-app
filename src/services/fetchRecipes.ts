import { BASE_URL } from '@/consts/baseURL';
import { RecipesResponse } from '@/models/RecipesResponse';

interface FetchRecipesProps {
  query: string | undefined;
  cuisine: string | undefined;
  maxReadyTime: string | undefined;
}

export const fetchRecipes = async ({
  query = '',
  cuisine = '',
  maxReadyTime = '',
}: FetchRecipesProps): Promise<RecipesResponse> => {
  const response = await fetch(
    `${BASE_URL}/complexSearch?query=${encodeURIComponent(query)}&cuisine=${encodeURIComponent(
      cuisine,
    )}&maxReadyTime=${encodeURIComponent(maxReadyTime)}&apiKey=${process.env.SPOONACULAR_API_KEY}`,
    { next: { revalidate: 60 } },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const recipesData: RecipesResponse = await response.json();

  return recipesData;
};
