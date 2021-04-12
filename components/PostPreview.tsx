import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function PostPreview({ article }) {
	const { data } = useSWR(
		`/api/views/${article.filePath.replace(/\.mdx?$/, "")}`,
		fetcher
	);
	const views = data?.viewCount;

	return (
		<div className="flex flex-col mb-6">
			<Link
				as={`/posts/${article.filePath.replace(/\.mdx?$/, "")}`}
				href={`/posts/[slug]`}
			>
				<p className="font-semibold text-2xl">
					<span className="">{article.data.title}</span>
					<span className="text-sm text-gray-500 pl-2">
						{views} views
					</span>
				</p>
			</Link>
			<p className="text-sm italic text-gray-500">
				{article.data.date} -{" " + article.data.readTime + " "}
				mins
			</p>
			<p className="font-semibolds">{article.data.description}</p>
		</div>
	);
}
