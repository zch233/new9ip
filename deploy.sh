yarn build &&
echo "打包成功，正在发布第一台服务器81.68.65.13..." &&
scp -P 20430 -r ./dist/. root@81.68.65.13:/opt/n9-app/patent-member/frontend/mall &&
echo "正在发布第二台服务器81.68.150.113..." &&
scp -P 20430 -r ./dist/. root@81.68.150.113:/opt/n9-app/patent-member/frontend/mall &&
time=$(date "+%Y.%m.%d-%H.%M.%S") &&
echo "正在提交该版本" &&
git add . &&
git commit -m "版本更新：${time}" &&
git tag -a v${time} -m "日期：${time}" &&
git push --tags &&
echo "发布成功：${time}"