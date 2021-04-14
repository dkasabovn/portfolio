import { useState } from "react";

export default function ThemeSwitcher() {
	const toggle = () => {
		document.documentElement.classList.toggle("dark");
	};

	return (
		<div className="lg:visible invisible absolute lg:left-5 lg:top-5 ">
			<button
				className="bg-black dark:bg-white lg:w-6 lg:h-6 inline-block rounded-sm"
				onClick={toggle}
			></button>
		</div>
	);
}
