import { createRecipe } from "@/app/lib/actions";

export default function CreateRecipePage() {
	return (
		<div className="max-w-xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-6">Create Recipe</h1>

			<form action={createRecipe} className="flex flex-col gap-4">
				<input name="name" placeholder="Name" className="border p-2" required />
				<input name="image" placeholder="Image URL" className="border p-2" required />

				<textarea
					name="ingredients"
					placeholder="Ingredients"
					className="border p-2"
					required
				/>

				<textarea name="steps" placeholder="Steps" className="border p-2" required />

				<button
					type="submit"
					className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
				>
					Create
				</button>
			</form>
		</div>
	);
}
