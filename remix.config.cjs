/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app",
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    server: "./server.js", // required for custom deployments like Cloudflare
    serverBuildPath: "build/server.js",
    ignoredRouteFiles: ["**/.*"]
  };
  