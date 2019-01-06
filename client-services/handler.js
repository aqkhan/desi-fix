'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.home = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      payLoad: {
        channels: {
          featured: {
            trailer: true,
            autoPlay: false,
            thumbnail: '',
            title: '',
            layout: 1
          },
          liveChannels: [
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            }
          ],
          dramas: [
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: '',
              series: [
                {
                  uuid: '',
                  thumbnail: '',
                  title: '',
                  description: '',
                  source: 'yt',
                  link: '',
                  childOf: ''
                }
              ]
            }
          ],
          movies: [
            {
              uuid: '',
              thumbnail: '',
              title: 'Lahore nhn jaon gi',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: 'Teefa in trouble',
              description: '',
              source: 'yt',
              link: ''
            }
          ],
          news: [
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            }
          ],
          misc: [
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            },
            {
              uuid: '',
              thumbnail: '',
              title: '',
              description: '',
              source: 'yt',
              link: ''
            }
          ]  

        }
      }
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};