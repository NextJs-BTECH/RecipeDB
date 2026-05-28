import Link from "next/link";

export default function Home() {
	return (
		<div className="min-h-screen bg-white dark:bg-black flex flex-col">
			{/* Hero Section */}
			<div className="flex flex-col items-center justify-center text-center px-6 py-20 bg-red-500 text-white">
				<h1 className="text-5xl font-extrabold mt-6">Isaac's Recipes</h1>

				<p className="max-w-xl mt-4 text-red-100 text-lg">
					Create, store, and manage your favorite recipes in one place — fast, simple, and
					always accessible.
				</p>

				<div className="flex gap-4 mt-8">
					<Link
						href="/login"
						className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-red-50 transition"
					>
						Sign In
					</Link>

					<Link
						href="/dashboard"
						className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-red-600 transition"
					>
						Go to Dashboard
					</Link>
				</div>
			</div>

			{/* Feature Section */}
			<div className="grid md:grid-cols-3 gap-6 px-10 py-16 bg-gray-50 dark:bg-zinc-900">
				<div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
					<h3 className="text-xl font-bold mb-2">Fast Access</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Your recipes are always one click away.
					</p>
				</div>

				<div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
					<h3 className="text-xl font-bold mb-2">Simple Storage</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Save ingredients and steps without complexity.
					</p>
				</div>

				<div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow">
					<h3 className="text-xl font-bold mb-2">Personal Dashboard</h3>
					<p className="text-gray-600 dark:text-gray-300">
						Manage your recipes in one clean space.
					</p>
				</div>
			</div>
		</div>
	);
}
