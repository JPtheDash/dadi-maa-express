import { execSync } from 'child_process';
import fs from 'fs';

console.log('Building React app for mobile...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Copying assets to Capacitor...');
execSync('npx cap copy', { stdio: 'inherit' });

console.log('Updating Android project...');
execSync('npx cap update android', { stdio: 'inherit' });

console.log('Opening Android Studio...');
execSync('npx cap open android', { stdio: 'inherit' });

console.log('To build the APK, click "Build" in Android Studio and select "Build Bundle(s) / APK(s)" -> "APK"');