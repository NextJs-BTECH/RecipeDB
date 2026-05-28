import { fetchRecipeById } from "@/app/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function RecipePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const recipe = await fetchRecipeById(id);

	if (!recipe) return notFound();
	return (
		<div className="max-w-3xl mx-auto p-6 space-y-6">
			<h1 className="text-3xl font-bold">{recipe.name}</h1>

			<Image src={recipe.image} alt={recipe.name} width={800} height={400} />

			<p>{recipe.ingredients}</p>
			<p>{recipe.steps}</p>
		</div>
	);
}
