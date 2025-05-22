# RN Image Storage

This is a React Native (Expo) mobile application that displays a gallery of images retrieved from the [Picsum Photos API](https://picsum.photos/). The app allows users to view images in a two-column layout and see detailed information on each image. It also supports offline access for previously viewed content.

## Features

- 📸 Fetches and displays 100 images from `https://picsum.photos/v2/list?limit=100`
- 🖼️ Two-column responsive image gallery
- 🔍 Tap to view full-screen image with author name as title
- 📴 Offline support: previously loaded images are cached and available offline
- 📱 Portrait mode only
- 🧹 Clean and modern code structure with Hooks, Functional Components, and Context API
- 💾 State management and persistent storage via Redux and Redux-Persist
- 🧭 Navigation using Expo Router

## Screenshots

*(You can add screenshots here to showcase the app)*

## Installation

### Prerequisites

- Node.js ≥ 14
- npm ≥ 6
- Expo CLI: `npm install -g expo-cli`

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/sgtbrunner/rn-image-storage.git
   cd rn-image-storage
2. Install dependencies

   ```bash
   npm install
   ```
3. Install dependencies

   ```bash
   npm run ios
   npm run android
   ```
4. Run the app on a device or emulator using the Expo Go app or development build.

### Project Structure
```bash
   rn-image-storage/
   ├── app/                 # Main app routes and screens
   ├── components/          # Reusable UI components
   ├── queries/             # API requests and logic
   ├── store/               # Redux store and slices
   ├── assets/              # Static assets
   ├── constants.ts         # Global constants
   ├── app.json             # Expo configuration
   ├── tsconfig.json         # TypeScript configuration
```

### Technologies Used
   * React Native
   * Expo
   * TypeScript
   * Expo Router
   * Redux + Redux Toolkit + Redux-Persist
   * AsyncStorage
   * Expo's asset/image caching

### Offline Support
The app caches all loaded images locally. Once images are loaded for the first time, they are saved to persistent storage using AsyncStorage and can be accessed even without an internet connection.

### Known Limitations
Images are cached in memory and storage but may not persist indefinitely depending on device limitations.

This app is designed and locked to portrait mode only.

### Main Challenges

### Coming next...