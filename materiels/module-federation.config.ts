export const mfConfig = {
  name: "materiels",
  filename: "remoteEntry.js",
  exposes: {
    "./Materiels": "./src/page/Materiels.tsx",
  },
  shared: ["react", "react-dom"],
};
