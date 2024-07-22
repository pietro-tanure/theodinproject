https://webpack.js.org/guides/getting-started/

mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
npm install --save lodash
npx webpack
<!-- npx webpack --config webpack.config.js -->
npm run build

npm install --save-dev style-loader css-loader
npm install --save-dev csv-loader xml-loader
npm install toml yamljs json5 --save-dev

<!-- https://youtu.be/WVEvhwv3cBs   this authomatically generates the whole dist folder-->
npm install --save-dev html-webpack-plugin

npm install --save-dev webpack-dev-server
npm run start

npm install --save-dev express webpack-dev-middleware
npm run server
http://localhost:3000

https://webpack.js.org/guides/production/
npm install --save-dev webpack-merge

