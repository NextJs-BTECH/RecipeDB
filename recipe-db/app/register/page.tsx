"use client";

import { registerUser } from "@/app/lib/actions";

export default function RegisterPage() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
				<h1 className="text-2xl font-bold text-center text-[#191919]">Create account</h1>

				<p className="text-sm text-gray-500 text-center mt-1 mb-6">
					Join to start managing your recipes
				</p>

				<form action={registerUser} className="space-y-4">
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF3008]"
						required
					/>

					<input
						type="password"
						name="password"
						placeholder="Password"
						className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF3008]"
						required
					/>

					<button
						type="submit"
						className="w-full bg-[#FF3008] text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
					>
						Create account
					</button>
				</form>

				<p className="text-center text-sm text-gray-500 mt-6">
					Fast setup for your recipe dashboard 🍔
				</p>
			</div>
		</div>
	);
}
