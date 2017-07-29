# Lambda-Bot-Builder
A simple node package to allow botbuilder bots to be hosted on AWS Lambda.

## Basic Use

Use of this library is very straightforward, just create your bot framework bot like normal, but instead of using restify or express, pass the `ChatConnector` listener to the `ConnectListener` method.

```javascript
var lambdaGlue = require('lambda-bot-builder');
exports.handler = lambdaGlue.ConnectListener(connector.listen());
```