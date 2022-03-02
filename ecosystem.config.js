module.exports = {
  apps: [
    {
      name : "research-pm2deploy",
      script: "./middleware/server.js",
      watch: ".",
      env_production : {
        NODE_ENV: "production",
        PORT: 4001,
      }
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "139.59.230.202",
      ref: "origin/develop",
      repo: "https://github.com/bryankyuri/pm2deploy.git",
      path: "/var/app/research/test-pm2-deploy",
      "pre-deploy-local": "",
      "post-deploy":
        "cd apps && npm install  && cp .env.staging.example .env && npm run build && npm run copy-to-deploy && cd ../middleware && npm install && cp .env.staging.example .env &&  cd ../ && pm2 startOrRestart ecosystem.config.js --env production && pm2 startup && pm2 save",
      "pre-setup": "",
    },
  },
};
