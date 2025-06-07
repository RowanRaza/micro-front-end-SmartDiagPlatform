export const mfConfig = {
  name: "auth",
  filename: 'remoteEntry.js',
  exposes: {
    './Login': './src/Login/Login.tsx',
  },
  shared: ["react", "react-dom"],
};
