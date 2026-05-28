import { deleteRecipe } from "@/app/lib/actions";

export default async function DeletePage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<div className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow text-center">
			<h1 className="text-xl font-bold mb-4">Confirm recipe deletion?</h1>

			<p className="text-gray-500 mb-6">This action cannot be undone.</p>

			<div className="flex justify-center gap-3">
				<a href="/dashboard" className="px-4 py-2 bg-gray-100 rounded-md">
					Cancel
				</a>

				<form action={deleteRecipe.bind(null, id)}>
					<input type="hidden" name="id" value={id} />

					<button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-md">
						Delete
					</button>
				</form>
			</div>
		</div>
	);
}
