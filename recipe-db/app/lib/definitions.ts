export type Recipe = {
	id: string;
	name: string;
	image: string;
	ingredients: string;
	steps: string;
	userId: string;
	createdAt: string; // Postgres returns timestamp as string in most cases
};

export type User = {
	id: string;
	email: string;
	password: string;
};
