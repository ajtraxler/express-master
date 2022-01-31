const Express = require("express");
const router = require("./router"); //this is use

const app = Express();
const PORT = 3000;

app.use(Express.static("./client")); //this is used for static so yur css, html, pictures, js etc
//express.stataic is responsible for serving static assets of express aapplication
//the troot argument referss to the root directory from which static assets aare served

app.use(Express.json()); //built in middleware function in Express.
// This method is used to parse incoming requests with JSON payloads and is based upon the body parser
// this method returns the middleware that only parses JSON and only looks at the request

//jsonify for posting messaage.


app.use(router);

//would 404 error message

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT} 😺`);
});


//APP.USE(). The app object is instantiated on creation of the Express server
//it has a middleware stack

//app.use is th way you 