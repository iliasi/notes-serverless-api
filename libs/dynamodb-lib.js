import AWS from "aws-sdk";

//Line 5 needed if the region of
//the lambda function is different to that of the dynamoDB
AWS.config.update({ region: "us-east-2" });

const client = new AWS.DynamoDB.DocumentClient();

export default {
    get: (params) => client.get(params).promise(),
    put: (params) => client.put(params).promise(),
    query: (params) => client.query(params).promise(),
    update: (params) => client.update(params).promise(),
    delete: (params) => client.delete(params).promise(),
};