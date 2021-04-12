import useSWR from "swr";
import { useEffect, useState } from "react";

const fetcher = (url) => fetch(url, { method: "POST" }).then((r) => r.json());

export default function ViewCount({ slug }) {
	const { data } = useSWR(`/api/views/${slug}`, fetcher);
	const views = data?.viewCount;

	const format = (number) => {
		return number
			? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			: "<->";
	};

	return <>{format(views)} views</>;
}
