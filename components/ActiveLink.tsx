import { useRouter } from "next/router";

export default function ActiveLink({ children, href, mr }) {
	const router = useRouter();
	const active = `dark:text-purple-400 text-purple-600 mr-${mr}`;
	const inactive = `dark:text-white text-black mr-${mr}`;

	const handleClick = (e) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={`${router.asPath === href ? active : inactive}`}
		>
			{children}
		</a>
	);
}
