yarn build:sit &&
echo "打包成功，正在发布服务器49.235.115.239..." &&
scp -P 20430 -r ./dist/. root@49.235.115.239:/www/9ip
time=$(date "+%Y.%m.%d-%H.%M.%S") &&
echo "发布成功：${time}"
