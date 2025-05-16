import { Recipe } from './Recipe';

export interface RecipesResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}
