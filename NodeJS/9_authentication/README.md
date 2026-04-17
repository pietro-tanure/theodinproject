Youtube series: https://www.youtube.com/watch?v=z7872Nki5FY&list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK&index=1

Website: https://www.fullstackfoundations.com/blog/passport-jwt

github: https://github.com/zachgoll/express-session-authentication-starter

# Video 1 What is User Authentication? (Node+Express+passport)

User authentication choices: 
- session <-
- json web tokens <-
- oauth
    - in-house
    - saas
- other/ ad-hoc

authentication =/= authorization
- authentication = who you are
- authorization = what you can do

- passport js is a middleware for node js that helps with authentication
- passport js can use different strategies which is a template for authentication methods

# Video HTTP Headers and Cookies
headers are metadata about the http request/ response
- Response headers, request headers, general headers
- http client: anything (me, you, cellphone, notebook)
- http server (express js app)
- cookies are small pieces of data stored on the client side
- cookies are sent in the http headers

# Video Your complete guide to understanding the express-session library
- cookie stores data in the browser and attaches it to every request to the server
- session stores data on the server side and uses a cookie to identify the session

# Video 2 Passport Local Configuration (Node + Express + Passport)
go to: express-session-authentication-starter/

# VIdeo 3 Passpoer Local Strategy Usage (Node + Express + Passport)
go to: express-session-authentication-starter/
