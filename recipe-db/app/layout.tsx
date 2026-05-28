import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Recipe App",
	description: "A Next.js App Router recipe manager with Auth and CRUD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-black dark:text-white">
				{/* Global Header */}
				<header className="w-full border-b border-zinc-200 dark:border-zinc-800 p-4">
					<div className="max-w-5xl mx-auto flex items-center gap-6">
						{/* HOME LINK */}
						<Link href="/" className="font-bold text-lg hover:underline">
							Home Page
						</Link>

						{/* NAV */}
						<nav className="flex gap-6 text-sm ml-auto">
							<Link href="/dashboard" className="hover:underline">
								Dashboard
							</Link>

							<Link href="/login" className="hover:underline">
								Login
							</Link>
						</nav>
					</div>
				</header>

				{/* Page Content */}
				<main className="flex-1 max-w-5xl mx-auto w-full p-6">{children}</main>

				{/* Footer */}
				<footer className="border-t border-zinc-200 dark:border-zinc-800 p-4 text-center text-sm text-zinc-500">
					Built with Next.js App Router
				</footer>
			</body>
		</html>
	);
}
