import { Input } from "@chakra-ui/input";
import { Box, Divider } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";

const dummyArticleData = [
	{
		title: "Golang worker pools",
		description: "Sometimes we don't want 1e6 workers",
		date: "March 23, 2021",
		views: "312",
	},
	{
		title: "Vue is better but I like React",
		description: "Listen to my irrational lies",
		date: "Feb 21, 2021",
		views: "1334",
	},
	{
		title: "Strong > Weak in programming",
		description: "Basically why you should use C++",
		date: "Feb 21, 2021",
		views: "123",
	},
	{
		title: "Why CP is actually good",
		description: "Its not a corporate lie",
		date: "Feb 21, 2021",
		views: "541",
	},
];

export default function Home() {
	return (
		<div className="w-full mt-14">
			{/* Cowboy emoji &#x1f920; */}
			<p className="mb-14 text-gray-500">
				Hey, I'm Daniel. I'm trying to keep this site minimal, but
				here's the basics. I like to code, more-so backend than frontend
				but react can be my jam. My fav languages are Go and Rust. AWS
				is the main provider I use but gcp is also cool.
			</p>
			<div>
				<div className="">
					{dummyArticleData.reverse().map((article, i) => (
						<div key={i} className="flex flex-col mb-6">
							<p className="font-semibold text-2xl thicc text-blue-600">
								{article.title}{" "}
								<span className="text-sm text-gray-400 pl-2">
									{article.views} views
								</span>
							</p>
							<p className="text-sm italic text-gray-500">
								{article.date} - 5 mins
							</p>
							<p className="font-semibolds">
								{article.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
