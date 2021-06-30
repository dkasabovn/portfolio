import { useState } from "react";

export default function ThemeSwitcher() {
	const [dark, setDark] = useState(false);

	const toggle = () => {
		document.documentElement.classList.toggle("dark");
		setDark(!dark);
	};

	return (
		<div className="lg:visible invisible absolute flex items-center justify-center lg:left-5 lg:top-5 ">
			<button
				className="bg-black dark:bg-white lg:w-6 lg:h-6 inline-block rounded-sm"
				onClick={toggle}
			></button>
			<div className="dark:text-white pl-2">
				{dark ? "Dark theme" : "Light theme"}
			</div>
		</div>
	);
}
