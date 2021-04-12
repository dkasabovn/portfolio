import { useRouter } from "next/router";

export default function ActiveLink({ children, href, mr }) {
	const router = useRouter();
	const style = {
		marginRight: mr * 0.25 + "rem",
		color: router.asPath === href ? "#7C3AED" : "#000",
	};

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a href={href} onClick={handleClick} style={style}>
			{children}
		</a>
	);
}
