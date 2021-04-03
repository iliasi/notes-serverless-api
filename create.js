import * as uuid from "uuid";
import handler from "./libs/handler-lib";
import dynamoDb from "./libs/dynamodb-lib";


export const main = handler(async(event, context) => {
    //The content of the request body is passed as a JSON
    //encoded string.
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableName,
        Item: {
            userId: "123", //userid of note creator
            noteId: uuid.v1(), //unique id for the note
            content: data.content, //note's content as stated in request body
            attachment: data.attachment, //note attachement as stated in request body
            createdAt: Date.now(), //Time/date at note creation
        },
    };
    await dynamoDb.put(params);
    return params.Item;
});