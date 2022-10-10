module.exports = {
  apps : [{
    name: __dirname.split('/').pop(),
    script: 'index.js',
    args: '',
    autorestart: true,
    log_date_format: 'HH:mm:ss',
    watch: true,
    ignore_watch : [".git", "temp", "data", "node_modules"],
    max_memory_restart: '2G',
  }]
};
