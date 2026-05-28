import { fetchRecipeById } from "@/app/lib/data";
import { updateRecipe } from "@/app/lib/actions";
import { notFound } from "next/navigation";

export default async function EditRecipePage({ params }: { params: { id: string } }) {
	const recipe = await fetchRecipeById(params.id);

	if (!recipe) return notFound();

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
				<h1 className="text-2xl font-bold text-center text-[#191919]">Edit Recipe</h1>

				<p className="text-sm text-gray-500 text-center mt-1 mb-6">
					Update your recipe details
				</p>

				<form action={updateRecipe} className="space-y-4">
					<input type="hidden" name="id" value={recipe.id} />

					<input
						name="name"
						defaultValue={recipe.name}
						className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF3008]"
					/>

					<input
						name="image"
						defaultValue={recipe.image}
						className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FF3008]"
					/>

					<textarea
						name="ingredients"
						defaultValue={recipe.ingredients}
						className="w-full p-3 rounded-xl border min-h-[100px] focus:ring-2 focus:ring-[#FF3008]"
					/>

					<textarea
						name="steps"
						defaultValue={recipe.steps}
						className="w-full p-3 rounded-xl border min-h-[120px] focus:ring-2 focus:ring-[#FF3008]"
					/>

					<button className="w-full bg-[#FF3008] text-white py-3 rounded-full font-semibold">
						Save changes
					</button>
				</form>
			</div>
		</div>
	);
}
