'use strict';
const fetch = require('node-fetch');
const AWS = require('aws-sdk');
const _ = require('lodash');
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
            let dataNeeded = [];

            _.forEach( json.items, (piece, key) => {
                const { publishedAt, channelId, title, thumbnails } = piece.snippet;
                
                // Marshall
                
                const marshalled = AWS.DynamoDB.Converter.marshall({
                    channelId, publishedAt, title, thumbnails, playListId: piece.id
                });

                const params = {
                    TableName: config.AWS_DYNAMO_DB_TABLE,
                    Item: marshalled
                };

                dataNeeded.push(params);
            });

            return dataNeeded;

        } catch (error) {
            console.log(error);
        }
    };
    let dataReady = await getData(url);

    for(let i = 0; i <= (dataReady.length - 1); i++) {
        let res = await ddb.putItem(dataReady[i]).promise();
        console.log('Res: ', i);
    }
}