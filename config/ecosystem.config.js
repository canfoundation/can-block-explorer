module.exports = {
  apps : [{
    name: `api`,
    script    : `./server/server.js`,
    env: {
      CONFIG: 'config/config',
      PORT: 80,
    },
    watch: true,
    ignore_watch: [
      'node_modules',
      'src',
      'test_widget',
    ],
    //instances : `2`,
    //exec_mode : `cluster`,
  }],
};
