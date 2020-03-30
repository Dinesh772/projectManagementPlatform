module.exports = {
  plugins: [
    // ...
    require("tailwindcss")("./src/tailwind.js"),
    require("autoprefixer")
    // ...
  ]
};
