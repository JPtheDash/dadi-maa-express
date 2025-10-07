# Welcome to your Dyad app

## Building for Mobile

To build an APK for Android, follow these steps:

1. Install the required dependencies:
   ```bash
   npm install
   ```

2. Initialize Capacitor:
   ```bash
   npx cap init
   ```

3. Add the Android platform:
   ```bash
   npx cap add android
   ```

4. Build the app and open Android Studio:
   ```bash
   npm run build:android
   ```

5. In Android Studio:
   - Click "Build" in the menu
   - Select "Build Bundle(s) / APK(s)" -> "APK"
   - Follow the prompts to generate the APK

## Development

To run the app in development mode:
```bash
npm run dev
```

To build the web version:
```bash
npm run build