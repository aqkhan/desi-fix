'use strict';
const fetch = require('node-fetch');
const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&maxResults=25&key=AIzaSyDNOOFn5wDKlldZEwfomscJnZ7E9bM9c-0`;

module.exports.getPlaylists = async (event, context) => {
    const getData = async url => {
        try {
            console.log('Inside try');
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.items);
        } catch (error) {
            console.log(error);
        }
    };
    await getData(url);
    console.log('Outside');
}