import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { Fragment } from "react";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	// spooky code
	injectGA(gaID) {
		return {
			__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','${gaID}');`,
		};
	}

	render() {
		const isProduction = true;
		const ga_tracker = process.env.GA_ID;
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" href="/logo.png" />
				</Head>
				<body className="dark:bg-black">
					<Main />
					<NextScript />
					{isProduction && (
						<Fragment>
							<script
								dangerouslySetInnerHTML={this.injectGA(
									ga_tracker
								)}
							/>
						</Fragment>
					)}
				</body>
			</Html>
		);
	}
}

export default MyDocument;
