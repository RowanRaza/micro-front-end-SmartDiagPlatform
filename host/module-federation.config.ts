export const mfConfig = {
  name: "host",
  remotes: {
    auth: 'auth@http://localhost:4001/remoteEntry.js',
    dashboard: 'dashboard@http://localhost:4010/remoteEntry.js',
    notifications: 'notifications@http://localhost:4011/remoteEntry.js',
    users: 'users@http://localhost:4005/remoteEntry.js',
    profile: 'profile@http://localhost:4012/remoteEntry.js'
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
