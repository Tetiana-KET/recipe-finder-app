import { CUISINE_OPTIONS } from '@/consts/cuisineOptions';

type Props = {
  query: string;
  cuisine: string;
  maxTime: string;
  isFormValid: boolean;
  onQueryChange: (val: string) => void;
  onCuisineChange: (val: string) => void;
  onMaxTimeChange: (val: string) => void;
  onSearch: () => void;
};

interface CuisineOption {
  id: string;
  label: string;
  value: string;
}

export const RecipeSearchForm = ({
  query,
  cuisine,
  maxTime,
  onQueryChange,
  onCuisineChange,
  onMaxTimeChange,
  onSearch,
  isFormValid,
}: Props) => {
  return (
    <form className="w-full max-w-md px-5 py-10 mx-auto bg-white shadow-[0_2px_2px_2px_rgba(134,106,161,0.5)] rounded-lg flex flex-col gap-4">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="p-2 border rounded-md"
      />
      <select value={cuisine} onChange={(e) => onCuisineChange(e.target.value)} className="p-2 border rounded-md">
        {CUISINE_OPTIONS.map(({ id, value, label }: CuisineOption) => (
          <option key={id} value={value}>
            {label}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Max prep time (minutes)"
        value={maxTime}
        onChange={(e) => onMaxTimeChange(e.target.value)}
        className="p-2 border rounded-md"
      />
      <button
        type="button"
        onClick={onSearch}
        disabled={!isFormValid}
        className={`p-2 rounded-md text-white ${
          isFormValid
            ? 'bg-purple-600 hover:bg-purple-700  duration-300 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </form>
  );
};
