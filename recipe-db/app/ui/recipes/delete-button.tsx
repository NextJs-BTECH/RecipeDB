"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: number }) {
	const router = useRouter();

	return (
		<button
			onClick={() => router.push(`/dashboard/recipes/${id}/delete`)}
			className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-700 hover:bg-red-200"
		>
			Delete
		</button>
	);
}
