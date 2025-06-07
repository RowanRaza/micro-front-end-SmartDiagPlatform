export const mfConfig = {
  name: "host",
  remotes: {
    auth: 'auth@http://localhost:4001/remoteEntry.js',
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
