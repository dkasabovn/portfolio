import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../lib/mdx";
import PostPreview from "../components/PostPreview";
import Head from "next/head";

export default function Home({ posts }) {
	const sortedArticles = posts.sort((a, b) => {
		return new Date(b.data.date) < new Date(a.data.date) ? -1 : 1;
	});

	return (
		<div className="w-full my-10">
			{/* Cowboy emoji &#x1f920; */}
			<p className="mb-14 text-gray-500 text-justify font-medium">
				Hey, I'm Daniel. I'm trying to keep this site minimal, but
				here's the basics. Programming is my hobby and career. I am more
				backend oriented, but I end up spending a lot of time using
				react. My favorite languages are Go and Rust, but Typescript is
				a close contender.
			</p>
			<div className="mb-14">
				<p className="text-4xl thicc mb-8">Articles</p>
				<div className="">
					{sortedArticles.map((article, i) =>
						article.data.visible ? (
							<PostPreview
								article={article}
								key={i}
							></PostPreview>
						) : null
					)}
				</div>
			</div>
		</div>
	);
}
Home.layout = "default";

export function getStaticProps() {
	const posts = postFilePaths.map((filePath: string) => {
		const l = path.join(POSTS_PATH, filePath);
		const source = fs.readFileSync(l);
		const { content, data } = matter(source);

		return {
			content,
			data,
			filePath,
		};
	});
	return { props: { posts } };
}
