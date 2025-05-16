import RecipeSearchWrapper from '@/components/RecipeSearchWrapper';

export default async function Home() {
  return (
    <div className="px-2 sm:px-5 md:px-11 max-w-[1620px] mx-auto flex flex-col gap-8 py-12">
      <h1 className="text-3xl font-bold text-center">Find Your Perfect Recipe</h1>
      <RecipeSearchWrapper />
    </div>
  );
}
