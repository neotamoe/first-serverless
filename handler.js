'use strict';

module.exports.hello = async event => {
  let message = 'Hello World!'
  const name = event.queryStringParameters && event.queryStringParameters.name;
  if(name !== null) {
    message = `Hello ${name}!`
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.hola = async event => {
  let message = 'Hola Mundo!'
  const name = event.pathParameters && event.pathParameters.name;
  if(name !== null) {
    message = `Hola ${name}!`
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.annyoung = async event => {
  const body = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: body,
        input: event,
      },
      null,
      2
    ),
  };
};