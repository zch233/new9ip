echo "开始发布" &&
yarn build &&
echo "---------------------------" &&
echo "打包成功，正在发布第一台服务器81.68.65.13..." &&
scp -P 20430 -r ./dist/. root@81.68.65.13:/opt/n9-app/patent-member/frontend/mall &&
echo "---------------------------" &&
echo "正在发布第二台服务器81.68.150.113..." &&
scp -P 20430 -r ./dist/. root@81.68.150.113:/opt/n9-app/patent-member/frontend/mall &&
time=$(date "+%Y.%m.%d-%H.%M.%S") &&
echo "---------------------------" &&
echo "正在提交该版本" &&
git add . &&
echo "---------------------------" &&
echo "正在编写 commit" &&
git commit -m "版本更新：${time}" &&
echo "---------------------------" &&
echo "正在打标签" &&
git tag -a v${time} -m "日期：${time}" &&
echo "---------------------------" &&
echo "正在推送标签" &&
git push --tags &&
echo "---------------------------" &&
echo "发布成功：${time}"