
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.conf.js')
const port = process.env.Port || 3000
const host = process.env.Host || 'localhost'

const options = {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
  host:host,
  port:port
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options)

server.listen(port, host, (err) => {
  if(err) throw err
  const url = 'http://'+ host + ':' + port
  console.log('dev server listening on ' +  url);
})