import SEOHead from "../components/SEOHead";

export default function Resume() {
	const dark = true;

	return (
		<div className="my-10">
			<SEOHead title="Daniel Kasabov | CV" />
			<div className="prose max-w-none">
				<pre>
					<code>
						// * Here's my resume & contact form
						<form
							action="https://formspree.io/f/meqejywb"
							className="flex flex-col"
							method="POST"
						>
							<label className="text-white">
								{">"} Your email:
							</label>
							<input
								type="email"
								name="_replyto"
								className="bg-transparent border-2 border-gray-600 rounded-md pl-2"
							></input>
							<label>{">"} Your message:</label>
							<textarea
								name="message"
								className="bg-transparent border-2 border-gray-600 rounded-md px-2"
							></textarea>

							<button
								type="submit"
								className=" text-center pl-2 rounded-md mt-3 bg-gray-700 text-gray-200"
							>
								Submit
							</button>
						</form>
					</code>
				</pre>
			</div>

			<div className="lg:absolute" style={{ left: "50%" }}>
				<div className="lg:relative" style={{ left: "-50%" }}>
					<img
						src="/static/images/resume-1.png"
						alt=""
						className="filter dark:invert"
					/>
					<img
						src="/static/images/resume-2.png"
						alt=""
						className="filter dark:invert"
					/>
				</div>
			</div>
		</div>
	);
}
