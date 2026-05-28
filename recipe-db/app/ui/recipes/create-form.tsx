"use client";

import { createRecipe } from "@/app/lib/actions";

export default function CreateRecipeForm() {
	return (
		<form className="space-y-4" action={createRecipe}>
			<input
				name="name"
				placeholder="Recipe name"
				className="w-full p-3 rounded-xl border bg-white"
			/>

			<input
				name="image"
				placeholder="Image URL"
				className="w-full p-3 rounded-xl border bg-white"
			/>

			<textarea
				name="ingredients"
				placeholder="Ingredients"
				className="w-full p-3 rounded-xl border bg-white min-h-[100px]"
			/>

			<textarea
				name="steps"
				placeholder="Steps"
				className="w-full p-3 rounded-xl border bg-white min-h-[120px]"
			/>

			<button className="w-full bg-[#FF3008] text-white py-3 rounded-full font-semibold">
				Create Recipe
			</button>
		</form>
	);
}
