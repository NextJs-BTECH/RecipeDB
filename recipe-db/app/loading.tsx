export default function Loading() {
	return (
		<div className="min-h-screen flex flex-col animate-pulse">
			{/* Hero skeleton */}
			<div className="bg-red-500 text-white px-6 py-20 text-center space-y-4">
				<div className="h-10 w-64 bg-red-300/50 mx-auto rounded" />
				<div className="h-4 w-96 bg-red-300/40 mx-auto rounded" />
				<div className="flex justify-center gap-4 mt-8">
					<div className="h-10 w-28 bg-white/30 rounded-full" />
					<div className="h-10 w-32 bg-white/20 rounded-full" />
				</div>
			</div>

			{/* Feature section skeleton */}
			<div className="grid md:grid-cols-3 gap-6 px-10 py-16 bg-gray-50 dark:bg-zinc-900">
				{Array.from({ length: 3 }).map((_, i) => (
					<div key={i} className="h-32 bg-gray-200 dark:bg-zinc-800 rounded-xl" />
				))}
			</div>
		</div>
	);
}
