yarn build &&
echo "打包成功，正在发布第一台服务器81.68.65.13..." &&
scp -P 20430 -r ./dist/. root@81.68.65.13:/opt/n9-app/patent-member/frontend/mall &&
echo "正在发布第二台服务器81.68.150.113..." &&
scp -P 20430 -r ./dist/. root@81.68.150.113:/opt/n9-app/patent-member/frontend/mall &&
node setGitTag
