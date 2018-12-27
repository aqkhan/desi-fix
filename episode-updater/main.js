'use strict';
const fetch = require('node-fetch');
const AWS = require('aws-sdk');
const channelId = `UC-lHJZR3Gqxm24_Vd_AJ5Yw`;
const config = require('./config');
const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${config.YT_MAX_RESULTS}&key=${config.YT_TOKEN}`;

AWS.config.update({region: 'us-east-1'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

module.exports.getPlaylists = async (event, context) => {
    const getData = async url => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            const params = {
                TableName: config.AWS_DYNAMO_DB_TABLE,
                Item: {
                    channelId: channelId
                    // items: json.items
                }
            };
            
            // DynamoDB content below
            docClient.put(params, function(err, data){
                if(err) {
                    // Do something you idiot!
                    console.log('Error entering data in DynamoDB: ', err)
                }
                else {
                    console.log('Success: ', data.items)
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    await getData(url);
    console.log('Outside');
}