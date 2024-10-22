@echo off

:: Check if Brave is installed by attempting to run Brave
where brave >nul 2>nul
if %ERRORLEVEL%==0 (
    :: Brave is found, open Brave to localhost:5173
    start brave http://localhost:5173
) else (
    :: Brave not found, open Chrome to localhost:5173
    start chrome http://localhost:5173
)

:: Run npm run dev
npm run dev

:: Keep the command prompt open
pause
