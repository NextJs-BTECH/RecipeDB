import postgres from "postgres";

const globalForSql = globalThis as unknown as {
	sql: ReturnType<typeof postgres> | undefined;
};

export const sql =
	globalForSql.sql ??
	postgres(process.env.POSTGRES_URL!, {
		ssl: "require",
	});

if (process.env.NODE_ENV !== "production") {
	globalForSql.sql = sql;
}
