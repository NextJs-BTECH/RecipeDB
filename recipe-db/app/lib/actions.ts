"use server";

import { sql } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

/* ---------------- CREATE ---------------- */
export async function createRecipe(formData: FormData) {
	const name = String(formData.get("name"));
	const image = String(formData.get("image"));
	const ingredients = String(formData.get("ingredients"));
	const steps = String(formData.get("steps"));

	const userId = "temp-user";

	await sql`
		INSERT INTO recipes (name, image, ingredients, steps, userId)
		VALUES (${name}, ${image}, ${ingredients}, ${steps}, ${userId})
	`;

	revalidatePath("/dashboard");

	redirect("/dashboard");
}

/* ---------------- REGISTER ---------------- */
export async function registerUser(formData: FormData) {
	const email = String(formData.get("email"));
	const password = String(formData.get("password"));

	const existing = await sql`
		SELECT id FROM users WHERE email = ${email}
	`;

	if (existing.length > 0) {
		throw new Error("User already exists");
	}

	const hashed = await bcrypt.hash(password, 10);

	await sql`
		INSERT INTO users (email, password)
		VALUES (${email}, ${hashed})
	`;

	redirect("/login");
}

/* ---------------- DELETE ---------------- */
export async function deleteRecipe(id: string) {
	if (!id) {
		throw new Error("Invalid or missing id");
	}

	await sql`
		DELETE FROM recipes WHERE id = ${id}
	`;

	revalidatePath("/dashboard");
	redirect("/dashboard?deleted=1");
}

/* ---------------- EDIT ---------------- */
export async function updateRecipe(formData: FormData) {
	const id = String(formData.get("id"));
	const name = String(formData.get("name"));
	const image = String(formData.get("image"));
	const ingredients = String(formData.get("ingredients"));
	const steps = String(formData.get("steps"));

	if (!id) throw new Error("Missing recipe id");

	await sql`
		UPDATE recipes
		SET name = ${name},
			image = ${image},
			ingredients = ${ingredients},
			steps = ${steps}
		WHERE id = ${id}
	`;

	revalidatePath("/dashboard");
	revalidatePath(`/dashboard/recipes/${id}`);

	redirect("/dashboard");
}
