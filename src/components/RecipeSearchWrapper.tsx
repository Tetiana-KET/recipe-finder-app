'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RecipeSearchForm } from './RecipeSearchForm';

export default function RecipeSearchWrapper() {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxTime, setMaxTime] = useState('');
  const router = useRouter();

  const isFormValid = Boolean(query || cuisine || maxTime);

  const handleSearch = () => {
    if (!isFormValid) return;
    router.push(`/recipes?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxTime}`);
  };

  return (
    <RecipeSearchForm
      query={query}
      cuisine={cuisine}
      maxTime={maxTime}
      onQueryChange={setQuery}
      onCuisineChange={setCuisine}
      onMaxTimeChange={setMaxTime}
      onSearch={handleSearch}
      isFormValid={isFormValid}
    />
  );
}
