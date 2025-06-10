export const mfConfig = {
  name: "auth",
  filename: 'remoteEntry.js',
  exposes: {
    './Login': './src/page/Login.tsx',
    './AuthContext': './src/context/AuthContext.tsx',
  },
  shared: ["react", "react-dom"],
};
