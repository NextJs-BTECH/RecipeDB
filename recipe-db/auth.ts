import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { sql } from "@/app/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;

				const email = String(credentials.email);
				const password = String(credentials.password);

				const users = await sql`
					SELECT id, email, password
					FROM users
					WHERE email = ${email}
					LIMIT 1
				`;

				const user = users[0];

				if (!user) return null;

				const isValid = await bcrypt.compare(password, user.password);

				if (!isValid) return null;

				return {
					id: user.id,
					email: user.email,
				};
			},
		}),
	],

	session: {
		strategy: "jwt",
	},

	pages: {
		signIn: "/login",
	},

	secret: process.env.NEXTAUTH_SECRET,

	callbacks: {
		async jwt({ token, user }) {
			if (user) token.id = user.id;
			return token;
		},

		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
			}
			return session;
		},
	},
});
