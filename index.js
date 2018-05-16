exports.helloGET = (req, res) => {
  res.send("Hello World!");
};

exports.helloHttp = function helloHttp(request, response) {
  response.json({
    fulfillmentText: "This is a sample response from your webhook!"
  });
};
