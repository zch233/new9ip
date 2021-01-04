const exec = require("child_process").exec;
const ora = require('ora');
const chalk = require('chalk');
let spinner = ora(chalk.green('正在提交该版本...')).start();
(async function () {
  await gitAdd();
  await gitCommit();
  spinner.stop();
  console.log(chalk.green("提交代码成功!"));
  spinner = ora(chalk.green('正在对该版本打标签...')).start();
  await addTagWithCurrentTime();
  spinner.stop();
  console.log(chalk.green("打标签成功!"));
  spinner = ora(chalk.green('正在推送该标签...')).start();
  await pushTags();
  spinner.stop();
  console.log(chalk.green("推送标签成功!"));
})();
function gitAdd () {
  return new Promise((resolve, reject) => {
    exec(`git add .`, function (err, stdout, stderr) {
      if (err) {
        console.error("git add 失败！！！");
        reject(stderr);
        process.exit(1);
        throw err;
      }
      resolve(stdout);
    });
  });
}
function gitCommit () {
  return new Promise((resolve, reject) => {
    exec(`git commit -m '版本更新：${formatDate()}'`, function (err, stdout, stderr) {
      if (err) {
        console.error("生成 commit 失败！！！");
        reject(stderr);
        process.exit(1);
        throw err;
      }
      resolve(stdout);
    });
  });
}

function addTagWithCurrentTime () {
  return new Promise((resolve, reject) => {
    exec(`git tag -a v${formatDate()} -m '日期：${formatDate()}'`, function (err, stdout, stderr) {
      if (err) {
        console.error("打标签失败！！！");
        reject(stderr);
        process.exit(1);
        throw err;
      }
      resolve(stdout);
    });
  });
}

function pushTags () {
  return new Promise((resolve, reject) => {
    exec('git push --tags', function (err, stdout, stderr) {
      if (err) {
        console.error("推送标签失败！！！");
        reject(stderr);
        process.exit(1);
        throw err;
      }
      resolve(stdout);
    });
  });
}

function formatDate () {
  const isZero = m => (m < 10 ? "0" + m : m),
    time = new Date(),
    y = time.getFullYear(),
    m = time.getMonth() + 1,
    d = time.getDate(),
    h = time.getHours(),
    mm = time.getMinutes(),
    s = time.getSeconds();
  return y + "." + isZero(m) + "." + isZero(d) + "-" + isZero(h) + "." + isZero(mm) + "." + isZero(s);
}
