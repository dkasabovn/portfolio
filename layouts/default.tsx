import { useEffect, useRef } from "react";

export default function DefaultLayout(props) {
	const canvasRef = useRef();

	return (
		<>
			<div className="w-screen min-h-screen flex flex-col items-center bg-black">
				<div className="container h-full">
					<div className="flex flex-row justify-between items-center w-full mt-20">
						<div className="">
							<p className="font-semibold text-3xl thicc">
								<span className="bg-white px-2 black">
									DKNDEV
								</span>
							</p>
						</div>
					</div>
					<div>{props.children}</div>
				</div>
			</div>
		</>
	);
}
