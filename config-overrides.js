//// filepath: c:\Vscode\FKStock-FrontEnd\config-overrides.js
module.exports = function override(config, env) {
    config.resolve.fallback = {
      fs: false,
      path: require.resolve("path-browserify"),
    };
    return config;
  };