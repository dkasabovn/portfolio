import { NextApiRequest, NextApiResponse } from "next";

import dynamo from "../../../lib/dynamo";

const TABLE_NAME = process.env.DB_NAME;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { slug } = req.query;
	if (req.method === "POST") {
		const updateItem = await dynamo.Update({
			TableName: TABLE_NAME,
			Key: {
				slug: { S: slug as string },
			},
			UpdateExpression: "ADD view_count :n",
			ExpressionAttributeValues: {
				":n": {
					N: "1",
				},
			},
			ReturnValues: "UPDATED_NEW",
		});
		if (updateItem.Attributes) {
			return res
				.status(200)
				.json({ viewCount: updateItem.Attributes.view_count.N });
		}
		return res.status(500).json(updateItem);
	}
	if (req.method === "GET") {
		const viewCount = await dynamo.Get({
			TableName: TABLE_NAME,
			Key: {
				slug: { S: slug as string },
			},
			ProjectionExpression: "view_count",
		});
		if (!viewCount.Item) {
			return res.status(200).json({ viewCount: 0 });
		}
		return res.status(200).json({ viewCount: viewCount.Item.view_count.N });
	}
	return res.status(405).end();
}
