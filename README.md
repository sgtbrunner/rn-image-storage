# RN Image Storage

This is a React Native (Expo) mobile application that displays a gallery of images retrieved from the [Picsum Photos API](https://picsum.photos/). The app allows users to view images in a two-column layout and see detailed information on each image. It also supports offline access for previously viewed content.

Expo was the chosen way to go on this task as it speeds up development quite significantly and also has many built-in tools already.

## Features

- 📸 Fetches and displays 100 images from `https://picsum.photos/v2/list?limit=100`
- 🖼️ Two-column responsive image gallery
- 🔍 Tap to view full-screen image with author name as title
- 📴 Offline support: previously loaded images are cached and available offline
- 📱 Portrait mode only
- 🧹 Clean and modern code structure with Hooks, and Functional Components
- 💾 State management and persistent storage via Redux and Redux-Persist
- 🧭 Navigation using Expo Router

## Screenshots

Android

https://github.com/user-attachments/assets/010d9d30-ec73-46ec-9b51-f5fe25d4538f

iOS

https://github.com/user-attachments/assets/8e9e466c-5631-4f43-bbdd-92d4223d710c

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
   ```
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

## Technologies Used

- React Native
- Expo
- TypeScript
- Expo Router
- Redux + Redux Toolkit + Redux-Persist
- AsyncStorage
- Expo's asset/image caching

## Offline Support

The app caches all loaded images locally. Once images are loaded for the first time, they are saved to persistent storage using AsyncStorage and can be accessed even without an internet connection.

## Known Limitations

- Images are cached in memory and storage but may not persist indefinitely depending on device limitations.

- This app is designed and locked to portrait mode only.

## Main Challenges faced (that could possibly be addressed with more development time)

### Image gallery performance:

- Loading 100 heavy images in a single screen in React Native could be a burden, even when using optimized solutions that implement lazy loading by default such as Flatlist.
- The `react-native` Flatlist component performed better on Android when the `shopify` Flashlist component had better results in iOS.
- The `expo-image` library proved to be very handy when it comes to caching and fast loading images on both gallery (home) and details screens.
- For further optimization, playing around with some of the recommended settings from the [React Native Docs](https://reactnative.dev/docs/optimizing-flatlist-configuration) could do the trick.

### Testing:
- The latest Expo build uses React version 19, which is great in many ways but also limits some 3rd-party tools compatibility, such as [Testing Library React Native](https://www.npmjs.com/package/@testing-library/react-native).
- An attempt to write unit/components & integration tests in this project was considered a big plus but due to a [known compatibility issue](https://github.com/callstack/react-native-testing-library/issues/1769) with the current React version and limited time for development, it was not pioritized until further notice.

## Nice improvements for the future

- More performant image gallery screen
- Find a workaround to have unit/component tests and screen integration tests (as mentioned in the Main Challenges section)
- Accessibility in order to make the app readable in screen readers
- Theming (light & dark mode)
- Use of [Storybook React Native](https://storybook.js.org/blog/react-native-storybook-8/) for component/screen development & testing
- Have the app deployed and easily tested in physical devices
