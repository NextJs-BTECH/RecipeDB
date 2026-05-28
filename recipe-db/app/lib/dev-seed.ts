import { sql } from "@/app/lib/db";

async function seed() {
	try {
		await sql`
			INSERT INTO recipes (name, image, ingredients, steps, userId)
			VALUES (
				'Spaghetti',
				'https://picsum.photos/300',
				'Noodles, sauce',
				'Cook noodles and add sauce',
				'seed-user'
			)
		`;

		console.log("Database seeded");
	} catch (e) {
		console.error("Seed error:", e);
		process.exit(1);
	}
}

seed();
