// MIDDLEWARE
// They sit between the incoming request and the final intended route handler.

// EXAMPLE
function myMiddleware(req, res, next) {
  // Perform some operations
  console.log("Middleware function called");

  // Modify the request object
  req.customProperty = "Hello from myMiddleware";

  // Call the next middleware/route handler
  next();
}
app.use(myMiddleware);


// Create Custom error
class CustomNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    // So the error is neat when stringified. NotFoundError: message instead of Error: message
    this.name = "NotFoundError";
  }
}


// Handle Errors
const asyncHandler = require("express-async-handler");
// Any errors that is thrown in this function will automatically be caught and call the `next` function
const getUserById = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await someDBQueryToGetUser(userId);

  if (!user) {
    throw new CustomNotFoundError("User not found");
  }
  res.send(`User found: ${user.name}`);
});


// Error MIDDLEWARE located at the end of application code
app.use((err, req, res, next) => {
  console.error(err);
  // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
  res.status(err.statusCode || 500).send(err.message);
});


// next() - Will pass control to the next middleware function

// next(new Error(...)) - Will pass control directly to the error middleware function.

// next('route') - Will pass control to the next route handler with the same matching path (if there is one). 
// This only works for app.METHOD or router.METHOD. Potentially, it can also be the same as just calling next with no argument.

// next('router') - Will skip all middleware functions attached to the specific router instance and pass control back out of the router instance. 
// Basically, we exit the router and go back to the parent router, e.g. app (yes, the Express app is also just a router under the hood).

