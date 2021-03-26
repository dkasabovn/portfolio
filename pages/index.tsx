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
		<div className="w-full mt-14 bg-black text-white text-lg fc">
			{/* Cowboy emoji &#x1f920; */}
			<p className="fc text-white pr-10 py-4 text-xl">
				<span className="text-green-600">dkn@dev</span>:> cat ~/about/interlude.txt
			</p>
			<p className="w-1/2">
				Howdy partner! &#x1f920;<br></br>
				I'm Daniel. I like to keep it quick so here we go.<br></br>
				<br></br>
				I'm a hobbyist dev who also programs for work. I primarily enjoy backend dev with Go and Rust but sometimes a good dose of React.js fills my hunger for frontend development. I'm currently working on a couple of projects which I'll update the site with. In the meantime explore the terminal.<br></br><br></br> <i>If you aren't a nerd, no biggie. Click the the help button and we can get you sorted</i>
			</p>
			<p className="fc text-white pr-10 py-4 text-xl">
				<span className="text-green-600">dkn@dev</span>:> <input type="text" className="terminal-input"/>
			</p>
			<div className="">
				
			</div>
			{/* <div>
				<div className="">
					{dummyArticleData.reverse().map((article, i) => (
						<div key={i} className="flex flex-col mb-6">
							<p className="font-semibold text-2xl thicc text-blue-800">
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
			</div> */}
		</div>
	);
}
