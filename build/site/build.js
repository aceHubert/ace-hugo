
const ora = require('ora')
const chalk = require('chalk')
const rm = require('rimraf')
const webpack = require('webpack')
const WebpackConfig = require('./webpack.prod.conf.js')

var spinner = ora('building for production...')
spinner.start()

console.log(JSON.stringify(WebpackConfig))

rm(WebpackConfig.output.path,err=>{
  if(err) throw err
  webpack(WebpackConfig, (err, stats)=> {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})