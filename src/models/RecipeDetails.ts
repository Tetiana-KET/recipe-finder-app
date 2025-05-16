export interface ExtendedIngredient {
  id: number;
  name: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  consistency: string;
  aisle: string;
  image: string;
  nameClean: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
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
