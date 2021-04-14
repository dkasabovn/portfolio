import fs from "fs";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import dynamic from "next/dynamic";
import { postFilePaths, POSTS_PATH } from "../../lib/mdx";
import path from "path";
import Image from "next/image";
import ViewCount from "../../components/ViewCount";
import SEOHead from "../../components/SEOHead";

const components = {
	Image,
};

export default function PostPage({ source, frontmatter, slug }) {
	const content = hydrate(source, { components });
	return (
		<div className="my-10 max-w-full">
			<SEOHead
				title={frontmatter.title}
				description={frontmatter.description}
			></SEOHead>
			<div className="mt-10 mb-6">
				<h1 className="text-5xl font-bold mb-6 dark:text-white">
					{frontmatter.title}
				</h1>
				<div className="flex flex-row justify-between text-sm dark:text-gray-300">
					<p>
						{frontmatter.date} {"-->"} {frontmatter.readTime} min
						read
					</p>
					<p>
						<ViewCount slug={slug} />
					</p>
				</div>
			</div>
			<main className="prose dark:prose-dark mx-0 max-w-none">
				{content}
			</main>
		</div>
	);
}
PostPage.layout = "default";

export const getStaticProps = async ({ params }) => {
	const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
	const source = fs.readFileSync(postFilePath);

	const { content, data } = matter(source);

	const mdxSource = await renderToString(content, {
		components: components,
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [],
		},
		scope: data,
	});

	return {
		props: {
			source: mdxSource,
			frontmatter: data,
			slug: params.slug,
		},
	};
};

export const getStaticPaths = async () => {
	const paths = postFilePaths
		// Remove file extensions for page paths
		.map((path) => path.replace(/\.mdx?$/, ""))
		// Map the path into the static paths object required by Next.js
		.map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};
