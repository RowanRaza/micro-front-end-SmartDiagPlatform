export const mfConfig = {
  name: "users",
  filename: "remoteEntry.js",
  exposes: {
    "./Users" : "./src/page/Users.tsx"
  },
  shared: ["react", "react-dom"],
};
