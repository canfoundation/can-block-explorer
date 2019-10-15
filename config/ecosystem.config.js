module.exports = {
  apps : [{
    name: `api`,
    script    : `./server/server.js`,
    env: {
      CONFIG: 'config/config',
      PORT: 80,
    },
    //instances : `2`,
    //exec_mode : `cluster`,
  }],
};
