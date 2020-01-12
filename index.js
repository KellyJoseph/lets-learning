/*
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const router = require("./router");

app.use(router);
module.exports.handler = serverless(app);
*/

const awsServerlessExpress = require("aws-serverless-express");
const app = require("./app");
const server = awsServerlessExpress.createServer(app);
exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
