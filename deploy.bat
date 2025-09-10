@echo off
echo ========================================
echo    Cybersecurity Portfolio Deployment
echo ========================================
echo.

echo [1/4] Installing dependencies...
call npm install
if errorlevel 1 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)
echo ✅ Dependencies installed successfully!
echo.

echo [2/4] Building project...
call npm run build
if errorlevel 1 (
    echo Error: Build failed
    pause
    exit /b 1
)
echo ✅ Project built successfully!
echo.

echo [3/4] Testing build...
echo Starting preview server... (Press Ctrl+C to stop)
echo Visit: http://localhost:4173 to test your site
call npm run preview
echo.

echo [4/4] Ready for deployment!
echo.
echo Next steps:
echo 1. Push your code to GitHub
echo 2. Connect GitHub repo to Vercel
echo 3. Deploy automatically!
echo.
echo For detailed instructions, see VERCEL_DEPLOYMENT_GUIDE.md
echo.
pause
