@echo off
cd /d "%~dp0"
echo.
echo  Lafeyra Hotel - Local server (Python)
echo  Opening http://localhost:8000 in your browser...
echo  Press Ctrl+C to stop the server.
echo.
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:8000"
python -m http.server 8000
pause
