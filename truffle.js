// babel --presets react app/javascripts/ --watch --out-dir app/build
module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "../node_modules/jquery/dist/jquery.js",
      "../node_modules/react/dist/react.js",
      "../node_modules/react-dom/dist/react-dom.js",
      "./build/contract.js",
      "./build/main.js",
      "./build/app.js",
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": [
      "images/background_medical.png",
    ],
  },
  deploy: [
    "Doctors",
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
