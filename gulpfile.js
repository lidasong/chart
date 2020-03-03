const webpack = require('webpack')
const { config } = require('./webpack.config.js')
const WebpackDevServer = require('webpack-dev-server')
const chalk = require('chalk')
const gulp = require('gulp')
const path = require('path')
const fs = require('fs-extra')

gulp.watch(["src/**/*"], {
    delay: 3000
}, (done) => {
    console.log(chalk.bgYellowBright("重新编译中..."))
    webpack(config, (err, stat) => {
        if(err) {
            console.log(chalk.bgRedBright("编译出错"))
        }else {
            console.log(chalk.bgGreenBright("编译完成"))
        }
        done();
    })
});

gulp.task('build', (done) => {
    fs.remove('./lib', (err) => {
        if(err) {
            console.log(err)
            console.log(chalk.bold.redBright("remove dir lib error"))
            process.exit()
        }
        webpack(config, (err, stat) => {
            if (err) {
                console.log(chalk.bgCyan('webpack 编译出错'))
                process.exit()
            }
            console.log(stat)
            done()
        })
    })
})
