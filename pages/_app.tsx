import "tailwindcss/tailwind.css";
import "../styles/global.css";
import LayoutWrapper from "../layouts/layout_wrapper";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<LayoutWrapper {...pageProps}>
				<Component {...pageProps} />
			</LayoutWrapper>
		</ChakraProvider>
	);
}

export default MyApp;
