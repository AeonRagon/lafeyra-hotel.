@echo off
cd /d "%~dp0"
echo.
echo  Lafeyra Hotel - Local server
echo  Opening http://localhost:3000 in your browser...
echo  Press Ctrl+C to stop the server.
echo.
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000"
npx -y serve -l 3000
pause
