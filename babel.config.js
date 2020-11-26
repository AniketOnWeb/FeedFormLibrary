module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "@babel/preset-react",
      ["@babel/preset-env", { targets: "defaults" }],
    ],
    plugins: [
      "@babel/plugin-transform-react-jsx",
      [
        "@babel/plugin-proposal-class-properties",
        {
          loose: true,
        },
      ],
    ],
  };
};
