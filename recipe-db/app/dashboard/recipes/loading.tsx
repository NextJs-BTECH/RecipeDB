export default function Loading() {
	return (
		<div className="space-y-4 animate-pulse">
			<div className="h-8 w-40 bg-gray-300 rounded" />

			{Array.from({ length: 5 }).map((_, i) => (
				<div key={i} className="h-20 bg-gray-200 rounded-lg" />
			))}
		</div>
	);
}
