export interface ExtendedIngredient {
  id: number;
  name: string;
  original: string;
}

export interface RecipeDetailsResponse {
  id: number;
  title: string;
  image: string;
  summary: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: ExtendedIngredient[];
}
