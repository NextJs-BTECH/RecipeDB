import { sql } from "@/app/lib/db";

/* GET ALL RECIPES */
export async function fetchRecipes() {
	const data = await sql`
		SELECT id, name, image, ingredients, steps
		FROM recipes
		ORDER BY id DESC
	`;

	return data ?? [];
}

/* GET SINGLE RECIPE */
export async function fetchRecipeById(id?: string) {
	if (!id) return null;

	const data = await sql`
		SELECT * FROM recipes WHERE id::text = ${id} LIMIT 1
	`;

	return data?.[0] ?? null;
}
