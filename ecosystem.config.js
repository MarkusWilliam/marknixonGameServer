module.exports = {
  apps: [{
    name: 'marknixonGameServer',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-217-141-126.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/MarkNixonGameServer.pem',
      ref: 'origin/master',
      repo: 'git@github.com:MarkusWilliam/marknixonGameServer.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
