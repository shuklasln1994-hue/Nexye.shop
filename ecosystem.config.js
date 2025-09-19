module.exports = {
  apps : [{
    name: "courier-portal",
    script: "npm",
    args: "start",
    env: {
      NODE_ENV: "production",
      PORT: 3000,
    },
  }]
};