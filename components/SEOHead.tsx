import Head from "next/head";
import { useRouter } from "next/router";

type SEOProps = {
	title?: string;
	description?: string;
};

export default function SEOHead({ title, description }: SEOProps) {
	const router = useRouter();

	return (
		<>
			<Head>
				<title>{title ? title : "Daniel Kasabov"}</title>
				<meta name="robots" content="follow, index" />
				<meta
					content={
						description
							? description
							: "Developer @ TAMU '25. Go and Rust enthusiast. Next.js enjoyer. XQC viewer."
					}
					name="description"
				/>
				<meta
					property="og:url"
					content={`https://danielkasabov.com${router.asPath}`}
				/>
				<meta property="og:site_name" content="Daniel Kasabov" />
				<meta
					property="og:description"
					content={
						description
							? description
							: "Developer @ TAMU '25. Go and Rust enthusiast. Next.js enjoyer."
					}
				/>
				<meta
					property="og:title"
					content={title ? title : "Daniel Kasabov"}
				/>
			</Head>
		</>
	);
}
