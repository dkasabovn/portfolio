export default function Resume() {
	return (
		<div className="my-10">
			<div className="prose max-w-none">
				<pre>
					<code>
						// * Here's my resume
						<br />
						// TODO Contact form
						<br />
						// ? For now use linkedin
					</code>
				</pre>
			</div>
			<div className="lg:absolute" style={{ left: "50%" }}>
				<div className="lg:relative" style={{ left: "-50%" }}>
					<img src="/static/images/resume-1.png" alt="" />
					<img src="/static/images/resume-2.png" alt="" />
				</div>
			</div>
		</div>
	);
}
