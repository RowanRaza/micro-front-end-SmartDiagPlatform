export const mfConfig = {
  name: "auth",
  filename: 'remoteEntry.js',
  exposes: {
    './Login': './src/Login.tsx'
  },
  shared: ["react", "react-dom"],
};
