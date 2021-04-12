import {
	DynamoDBClient,
	QueryCommand,
	BatchWriteItemCommand,
	BatchWriteItemInput,
	BatchWriteItemCommandOutput,
	QueryInput,
	QueryOutput,
	GetItemInput,
	GetItemOutput,
	GetItemCommand,
	UpdateItemInput,
	UpdateItemOutput,
	UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
	region: "us-east-1",
	credentials: {
		accessKeyId: process.env.ACCESS_KEY_ID,
		secretAccessKey: process.env.SECRET_KEY,
	},
});

const Get = async (input: GetItemInput): Promise<GetItemOutput> => {
	return await client.send(new GetItemCommand(input));
};

const Update = async (input: UpdateItemInput): Promise<UpdateItemOutput> => {
	return await client.send(new UpdateItemCommand(input));
};

const Query = async (input: QueryInput): Promise<QueryOutput> => {
	return await client.send(new QueryCommand(input));
};

export default {
	Get,
	Query,
	Update,
};
