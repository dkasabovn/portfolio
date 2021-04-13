import { useEffect, useRef } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import ActiveLink from "../components/ActiveLink";
import SEOHead from "../components/SEOHead";

export default function DefaultLayout(props) {
	return (
		<div className="min-h-screen w-full flex flex-col items-center">
			<SEOHead />
			<div className="lg:w-1/3 w-11/12 h-full">
				<div className="flex flex-row items-center justify-between w-full mt-20">
					<div className="mr-3">
						<p className="font-semibold text-3xl thicc">
							<span className="bg-purple-600 px-2 text-white">
								DKN/DEV
							</span>
						</p>
					</div>
					<div className="flex-row flex font-semibold">
						<ActiveLink href="/" mr={3}>
							HOME
						</ActiveLink>
						{/* <ActiveLink href="/blog" mr={3}>
								BLOG
							</ActiveLink>
							<ActiveLink href="/projects" mr={3}>
								PROJECTS
							</ActiveLink> */}
						<ActiveLink href="/resume" mr={0}>
							CV
						</ActiveLink>
					</div>
				</div>
				<div>{props.children}</div>
			</div>
		</div>
	);
}
