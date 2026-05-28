"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError(null);
		setLoading(true);

		const res = await signIn("credentials", {
			email,
			password,
			redirect: false,
			callbackUrl: "/dashboard",
		});

		setLoading(false);

		if (!res || res.error) {
			setError("Invalid email or password");
			return;
		}

		window.location.href = "/dashboard";
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 p-6 border rounded-lg bg-white dark:bg-zinc-900 shadow"
		>
			<h1 className="text-3xl font-bold text-center">Login</h1>

			<input
				type="email"
				placeholder="Email"
				className="border p-3 rounded"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>

			<input
				type="password"
				placeholder="Password"
				className="border p-3 rounded"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>

			{error && <p className="text-red-500 text-sm text-center">{error}</p>}

			<button
				type="submit"
				disabled={loading}
				className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:opacity-50"
			>
				{loading ? "Signing in..." : "Sign In"}
			</button>
		</form>
	);
}
