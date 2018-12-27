'use strict';
const fetch = require('node-fetch');
const channelId = `UC-lHJZR3Gqxm24_Vd_AJ5Yw`;
const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=25&key=AIzaSyDNOOFn5wDKlldZEwfomscJnZ7E9bM9c-0`;

module.exports.getPlaylists = async (event, context) => {
    const getData = async url => {
        try {
            console.log('Inside try');
            const response = await fetch(url);
            const json = await response.json();
            const payLoad = {
                uid: channelId,
                items: json.items
            };
            console.log(payLoad);
        } catch (error) {
            console.log(error);
        }
    };
    await getData(url);
    console.log('Outside');
}