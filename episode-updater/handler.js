'use strict';
var AWS = require('aws-sdk');
let sampleJson = require('./stub/dummyData.json');
// Set the region 
AWS.config.update({region: 'us-east-1'});

module.exports.hello = (event) => {
  var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
  const newItem = AWS.DynamoDB.Converter.marshall(
    {
      channelId: 'MARSHALLED02',
      string: 'foo',
      list: ['fizz', 'buzz', 'pop'],
      map: {
        nestedMap: {
          key: 'value',
        }
      },
      number: 123,
      nullValue: null,
      boolValue: true
    }
  );
  // console.log('Marshalled: ', newItem);
  var params = {
    TableName: "ChannelPlayLists",
    Item: newItem
  };
  ddb.putItem(params, function(err, data) {
    console.log('Inside hello');
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
