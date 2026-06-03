"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
	return (
		<button
			onClick={() => signOut({ callbackUrl: "/login" })}
			className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 transition-colors"
		>
			Logout
		</button>
	);
}
