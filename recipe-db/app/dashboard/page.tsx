import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { fetchRecipes } from "@/app/lib/data";
import LogoutButton from "../ui/recipes/logout-button";

export default async function DashboardPage() {
	const session = await auth();

	if (!session) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-[#F6F6F6]">
				<div className="bg-white p-8 rounded-2xl shadow text-center max-w-md w-full">
					<h1 className="text-xl font-bold text-[#191919]">Welcome back</h1>
					<p className="text-sm text-gray-500 mt-2">Log in to manage your recipes</p>

					<Link
						href="/login"
						className="mt-6 block bg-[#FF3008] text-white py-3 rounded-full font-semibold"
					>
						Log in
					</Link>

					<Link
						href="/register"
						className="mt-3 block border border-gray-200 py-3 rounded-full font-semibold"
					>
						Create account
					</Link>
				</div>
			</div>
		);
	}

	const recipes = await fetchRecipes();

	return (
		<div className="min-h-screen bg-[#F6F6F6] p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-[#191919]">Your Recipes</h1>

				<div className="flex items-center gap-3">
					<LogoutButton />

					<Link
						href="/dashboard/recipes/create"
						className="bg-[#FF3008] text-white px-5 py-2 rounded-full font-semibold"
					>
						+ Add
					</Link>
				</div>
			</div>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{recipes.map((r) => (
					<div
						key={r.id}
						className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
					>
						<div className="relative h-40 w-full">
							<Image src={r.image} alt={r.name} fill className="object-cover" />
						</div>

						<div className="p-4">
							<h2 className="font-semibold text-lg text-[#191919]">{r.name}</h2>

							<p className="text-sm text-gray-500 mt-1 line-clamp-2">{r.ingredients}</p>

							<div className="flex justify-between items-center mt-4">
								<Link
									href={`/dashboard/recipes/${r.id}`}
									className="text-[#FF3008] font-medium text-sm"
								>
									View
								</Link>

								<div className="flex gap-3">
									<Link
										href={`/dashboard/recipes/${r.id}/edit`}
										className="text-blue-500 font-medium text-sm"
									>
										Edit
									</Link>

									<Link
										href={`/dashboard/recipes/${r.id}/delete`}
										className="text-sm text-red-500 font-medium"
									>
										Delete
									</Link>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
