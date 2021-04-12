import "tailwindcss/tailwind.css";
import "../styles/global.css";
import LayoutWrapper from "../layouts/layout_wrapper";

function MyApp({ Component, pageProps }) {
	return (
		<LayoutWrapper {...pageProps}>
			<Component {...pageProps} />
		</LayoutWrapper>
	);
}

export default MyApp;
