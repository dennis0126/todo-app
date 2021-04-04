module.exports = {
  rules: {
    "color-no-invalid-hex": true,
    "comment-empty-line-before": [
      "always",
      {
        ignore: ["stylelint-commands", "after-comment"],
      },
    ],
    "declaration-colon-space-after": "always",
    "unit-whitelist": ["px", "em", "rem", "%", "s", "deg"],
  },
};
