export const mfConfig = {
  name: "profile",
  filename: "remoteEntry.js",
  exposes: {
    "./Profile": "./src/page/Profile.tsx"
  },
  shared: ["react", "react-dom"],
};
