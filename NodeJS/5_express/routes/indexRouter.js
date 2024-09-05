const Router = require('express')

const indexRouter = Router()

// /**
//  * GET /odin/messages/79687378 will have this log
//  * { username: "odin", messageId: "79687378" }
//  */
// indexRouter.get("/:username/messages/:messageId", (req, res) => {
//   console.log(req.params);
//   res.end();
// });

// /*
// * GET /odin/messages?sort=date&sort=likes&direction=ascending will log
// * Params: { username: "odin" }
// * Query: { sort: ["date", "likes"], direction: "ascending" }
// */
// indexRouter.get("/:username/messages", (req, res) => {
//   console.log("Params:", req.params);
//   console.log("Query:", req.query);
//   res.end();
// });

indexRouter.get('/', (req, res) => res.send('Hello World'))

module.exports = indexRouter