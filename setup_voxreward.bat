@echo off
echo Inicializando repositório VoxReward...

git init
git remote add origin https://github.com/LZweb3/voxreward.git

git add .
git commit -m "Commit inicial - VoxReward"
git branch -M main
git push -u origin main

echo Repositório pronto! Agora configure a Vercel se desejar.
pause