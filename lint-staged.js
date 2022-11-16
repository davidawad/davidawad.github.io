module.exports = {
  "functions/**/*.{js,jsx,ts,tsx}": ["yarn lint", "yarn test"],
  "*.{js,jsx,ts,tsx,json,css,js}": ["prettier --write"],
};
