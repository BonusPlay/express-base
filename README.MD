# Base project structure for Express.js
Feel free to use. Check other branches for different combinations.

# Important info
 - subdomains - handled by express-subdomain. Remember to set DNS correctly!
 - css imports go to `/views/base/pre-includes.pug`
 - js  imports go to `/views/base/post-includes.pug`
 - rename project in `/package.json`
 - add favicon to `/public/favicon.ico` and uncomment line #16 in `/app.js`
 - change secrets in `/app.js` line #22 & #24
 - change config in `/config/index.js`
 - run production with `npm start`
 - run development with `npm test`