"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const res = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (res?.error) {
				setError("Invalid email or password");
				return;
			}

			router.push("/dashboard");
			router.refresh();
		} catch {
			setError("Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#F6F6F6] px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
				<h1 className="text-2xl font-bold text-center text-[#191919]">Welcome back</h1>

				<p className="text-sm text-gray-500 text-center mt-1 mb-6">Sign in to continue</p>

				{error && (
					<div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl text-center mb-4">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-4">
					<input
						type="email"
						placeholder="Email"
						className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF3008]"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>

					<input
						type="password"
						placeholder="Password"
						className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF3008]"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-[#FF3008] text-white py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-50"
					>
						{loading ? "Signing in..." : "Sign in"}
					</button>
				</form>

				<p className="text-center text-sm text-gray-500 mt-6">
					Fast access to your recipes 🍔
				</p>
			</div>
		</div>
	);
}
