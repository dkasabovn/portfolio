import { useEffect, useRef } from "react";

export default function DefaultLayout(props) {
	const canvasRef = useRef();

	return (
		<>
			<div className="w-screen min-h-screen flex flex-col items-center">
				<div className="w-1/3 h-full">
					<div className="flex flex-row justify-between items-center w-full mt-20">
						<div className="">
							<p className="font-semibold text-3xl thicc">
								<span className="bg-black px-2 text-white">
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
