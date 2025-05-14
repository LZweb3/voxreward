@echo off
echo Inicializando repositório VoxReward...

:: Clonar repositório (modifique a URL abaixo se já tiver)
git init
git remote add origin https://github.com/SEU_USUARIO/voxreward.git

:: Adicionar arquivos ao git
git add .
git commit -m "Commit inicial - VoxReward"
git branch -M main
git push -u origin main

echo Repositório pronto! Agora configure a Vercel se desejar.
pause