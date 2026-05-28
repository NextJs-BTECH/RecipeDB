import Link from "next/link";
import { fetchRecipes } from "@/app/lib/data";

export default async function RecipesPage() {
	const recipes = (await fetchRecipes()) ?? [];

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-3xl font-bold">Recipes</h1>

				<Link
					href="/dashboard/recipes/create"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					+ Create Recipe
				</Link>
			</div>

			<div className="grid gap-4">
				{recipes.length === 0 ? (
					<p className="text-gray-500">No recipes found.</p>
				) : (
					recipes.map((recipe) => (
						<div
							key={recipe.id}
							className="border rounded-lg p-4 bg-white dark:bg-zinc-900 shadow-sm"
						>
							<h2 className="text-xl font-semibold">{recipe.name}</h2>

							<p className="mt-2 text-zinc-600 dark:text-zinc-400">
								{recipe.ingredients}
							</p>

							<div className="mt-4">
								<Link
									href={`/dashboard/recipes/${recipe.id}`}
									className="text-blue-500 hover:underline"
								>
									View Recipe
								</Link>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}
