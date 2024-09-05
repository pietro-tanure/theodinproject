// anatomy of a route
app.get("/", (req, res) => res.send("Hello, world!"));

app.post("/messages", (req, res) =>
  res.send("This is where you can see any messages."));

// paths
// "/messages?" = /message and /messages
// "/(messages)?"= /message and /
// "/mess*ages" = /messages and /messKSOAKSOages ...

// ROUTE PARAMETERS
/**
 * GET /odin/messages/79687378 will have this log
 * { username: "odin", messageId: "79687378" }
 */
app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});

// QUERY PARAMETERS 
/** ? denotes start of query param
* GET /odin/messages?sort=date&sort=likes&direction=ascending will log
* Params: { username: "odin" }
* Query: { sort: ["date", "likes"], direction: "ascending" }
*/
app.get("/:username/messages", (req, res) => {
 console.log("Params:", req.params);
 console.log("Query:", req.query);
 res.end();
});


// ROUTER EXAMPLE
const { Router } = require("express");
const authorsRouter = Router();

authorsRouter.get("/", (req, res) => res.send("All authors"));
authorsRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});
module.exports = authorsRouter;