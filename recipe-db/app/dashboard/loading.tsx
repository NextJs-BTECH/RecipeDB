export default function Loading() {
	return (
		<div className="p-6 animate-pulse space-y-4">
			<div className="h-6 w-48 bg-gray-300 rounded" />
			<div className="h-4 w-64 bg-gray-200 rounded" />
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} className="h-40 bg-gray-200 rounded-xl" />
				))}
			</div>
		</div>
	);
}
