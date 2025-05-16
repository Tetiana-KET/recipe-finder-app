import { BASE_URL } from '@/consts/baseURL';

export const fetchRecipeDetails = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
};
