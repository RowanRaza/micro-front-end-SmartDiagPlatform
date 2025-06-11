export const mfConfig = {
  name: "notifications",
  filename: "remoteEntry.js",
  exposes: {
    "./Notification" : "./src/page/Notification.tsx"
  },
  shared: ["react", "react-dom"],
};
